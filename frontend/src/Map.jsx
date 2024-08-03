import React, { useState, useEffect, useCallback, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaDirections } from 'react-icons/fa';
import PlacesAutocomplete from 'react-places-autocomplete';
import 'mapbox-gl/dist/mapbox-gl.css';
import './styles/map.css';
import { Button, Tooltip } from 'reactstrap';

const Map = () => {
  const [directionsVisible, setDirectionsVisible] = useState(false);
  const [startLocation, setStartLocation] = useState('');
  const [searchedLocation, setSearchedLocation] = useState(null);
  const [forecastTime, setForecastTime] = useState('current');
  const [tooltipContent, setTooltipContent] = useState('');
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [currentTrafficData, setCurrentTrafficData] = useState(null);
  const [predictionData, setPredictionData] = useState({});
  const mapContainerRef = useRef(null);
  const directionsControlRef = useRef(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const heatmapLayerRef = useRef(null);
  const selectedForecastTimeRef = useRef('current'); // Store selected forecast time

  const toggleDirections = useCallback(() => {
    setDirectionsVisible(prevState => !prevState);
  }, []);

  const fetchTrafficData = async (map, location = []) => {
    if (location.length === 0) return;

    const [lon, lat] = location;

    try {
      // Remove previous data visuals
      if (map.getSource('traffic-data')) {
        map.removeLayer('traffic-heatmap');
        map.removeSource('traffic-data');
      }

      // Simulated current traffic data
      const simulatedCurrentTrafficData = {
        congestion_level: 2,
        current_speed: 30,
        free_flow_speed: 50,
        latitude: lat,
        longitude: lon,
      };
      console.log('Fetched current traffic data:', simulatedCurrentTrafficData);
      setCurrentTrafficData(simulatedCurrentTrafficData);

      // Simulated prediction data for various horizons
      const simulatedPredictionData = {
        '15 mins': {
          latitude: lat,
          longitude: lon,
          predicted_congestion_level: 2,
          prediction_time: new Date(Date.now() + 15 * 60000).toISOString(),
        },
        '30 mins': {
          latitude: lat,
          longitude: lon,
          predicted_congestion_level: 3,
          prediction_time: new Date(Date.now() + 30 * 60000).toISOString(),
        },
        '45 mins': {
          latitude: lat,
          longitude: lon,
          predicted_congestion_level: 4,
          prediction_time: new Date(Date.now() + 45 * 60000).toISOString(),
        },
        '1 hr': {
          latitude: lat,
          longitude: lon,
          predicted_congestion_level: 2,
          prediction_time: new Date(Date.now() + 60 * 60000).toISOString(),
        },
        '2 hr': {
          latitude: lat,
          longitude: lon,
          predicted_congestion_level: 3,
          prediction_time: new Date(Date.now() + 120 * 60000).toISOString(),
        },
        '3 hr': {
          latitude: lat,
          longitude: lon,
          predicted_congestion_level: 4,
          prediction_time: new Date(Date.now() + 180 * 60000).toISOString(),
        },
      };
      console.log('Fetched prediction data:', simulatedPredictionData);
      setPredictionData(simulatedPredictionData);

      // Initialize heatmap layer if not already present
      if (!heatmapLayerRef.current) {
        map.addSource('traffic-data', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: []
          }
        });

        map.addLayer({
          id: 'traffic-heatmap',
          type: 'heatmap',
          source: 'traffic-data',
          paint: getHeatmapPaintProperties('current') // Initialize with 'current' colors
        });

        heatmapLayerRef.current = 'traffic-heatmap';
      }

      visualizeTrafficData(map, simulatedCurrentTrafficData, forecastTime);
    } catch (error) {
      console.error('Error fetching traffic data:', error);
    }
  };

  const getHeatmapPaintProperties = (forecastTime) => {
    // Define heatmap colors based on the forecast time
    const colorSchemes = {
      current: [
        'step',
        ['heatmap-density'],
        '#ffffff', // No congestion
        0.1, '#00ff00', // Low congestion
        0.3, '#ffff00', // Medium congestion
        0.6, '#ff8000', // High congestion
        1, '#ff0000' // Severe congestion
      ],
      '15 mins': [
        'step',
        ['heatmap-density'],
        '#ffffff', // No congestion
        0.1, '#00ff00', // Low congestion
        0.3, '#ffff00', // Medium congestion
        0.6, '#ff8000', // High congestion
        1, '#ff0000' // Severe congestion
      ],
      '30 mins': [
        'step',
        ['heatmap-density'],
        '#ffffff', // No congestion
        0.1, '#00ff00', // Low congestion
        0.3, '#ffff00', // Medium congestion
        0.6, '#ff8000', // High congestion
        1, '#ff0000' // Severe congestion
      ],
      '45 mins': [
        'step',
        ['heatmap-density'],
        '#ffffff', // No congestion
        0.1, '#00ff00', // Low congestion
        0.3, '#ffff00', // Medium congestion
        0.6, '#ff8000', // High congestion
        1, '#ff0000' // Severe congestion
      ],
      '1 hr': [
        'step',
        ['heatmap-density'],
        '#ffffff', // No congestion
        0.1, '#00ff00', // Low congestion
        0.3, '#ffff00', // Medium congestion
        0.6, '#ff8000', // High congestion
        1, '#ff0000' // Severe congestion
      ],
      '2 hr': [
        'step',
        ['heatmap-density'],
        '#ffffff', // No congestion
        0.1, '#00ff00', // Low congestion
        0.3, '#ffff00', // Medium congestion
        0.6, '#ff8000', // High congestion
        1, '#ff0000' // Severe congestion
      ],
      '3 hr': [
        'step',
        ['heatmap-density'],
        '#ffffff', // No congestion
        0.1, '#00ff00', // Low congestion
        0.3, '#ffff00', // Medium congestion
        0.6, '#ff8000', // High congestion
        1, '#ff0000' // Severe congestion
      ],
    };

    return {
      'heatmap-color': colorSchemes[forecastTime] || colorSchemes.current,
      'heatmap-weight': 1,
      'heatmap-intensity': 1,
      'heatmap-radius': 50, // Increased radius for better coverage
      'heatmap-opacity': 0.7
    };
  };

  const visualizeTrafficData = (map, data, forecastTime) => {
    const sourceId = 'traffic-data';
    const layerId = 'traffic-heatmap';

    console.log('Visualizing traffic data for forecastTime:', forecastTime);
    console.log('Data:', data);

    if (map.getSource(sourceId)) {
      // Update the heatmap source with data for the searched location
      map.getSource(sourceId).setData({
        type: 'FeatureCollection',
        features: [{
          type: 'Feature',
          properties: data,
          geometry: {
            type: 'Point',
            coordinates: [data.longitude, data.latitude]
          }
        }]
      });

      // Update heatmap layer properties to reflect new forecast time
      const heatmapPaintProperties = getHeatmapPaintProperties(forecastTime);
      console.log('Updating heatmap with properties:', heatmapPaintProperties);
      map.setPaintProperty(layerId, 'heatmap-color', heatmapPaintProperties['heatmap-color']);
      map.setPaintProperty(layerId, 'heatmap-radius', heatmapPaintProperties['heatmap-radius']);
    }

    // Remove previous marker if present
    if (markerRef.current) {
      markerRef.current.remove();
      markerRef.current = null;
    }

    const marker = new mapboxgl.Marker()
      .setLngLat([data.longitude, data.latitude])
      .addTo(map);

    markerRef.current = marker;

    marker.getElement().addEventListener('click', () => {
      const tooltipContent = generateTooltipContent(data, selectedForecastTimeRef.current); // Use stored forecast time
      console.log('Tooltip content generated:', tooltipContent);
      setTooltipContent(tooltipContent);
      setTooltipVisible(true);
    });

    const handleMouseEnter = (e) => {
      const coordinates = e.features[0].geometry.coordinates.slice();
      const properties = e.features[0].properties;

      const marker = new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(map);

      markerRef.current = marker;

      const tooltipContent = generateTooltipContent(properties, selectedForecastTimeRef.current);
      console.log('Tooltip content generated:', tooltipContent);
      setTooltipContent(tooltipContent);
      setTooltipVisible(true);

      marker.getElement().addEventListener('click', () => {
        setTooltipContent(tooltipContent);
        setTooltipVisible(true);
      });
    };

    const handleMouseLeave = () => {
      if (markerRef.current) {
        markerRef.current.remove();
        markerRef.current = null;
      }
      setTooltipVisible(false);
    };

    map.on('mouseenter', layerId, handleMouseEnter);
    map.on('mouseleave', layerId, handleMouseLeave);

    return () => {
      map.off('mouseenter', layerId, handleMouseEnter);
      map.off('mouseleave', layerId, handleMouseLeave);
    };
  };

  const generateTooltipContent = (data, forecastTime = 'current') => {
    if (!data) return '';
    const content = forecastTime === 'current'
      ? `Congestion Level: ${getCongestionIntensity(data.congestion_level)}\nCurrent Speed: ${data.current_speed}\nFree Flow Speed: ${data.free_flow_speed}\nIntensity: ${getCongestionIntensity(data.congestion_level)}`
      : `Forecast for ${forecastTime}:\nPredicted Congestion Level: ${getCongestionIntensity(data.predicted_congestion_level)}\nPrediction Time: ${data.prediction_time}`;
    console.log('Generated tooltip content:', content);
    return content;
  };

  useEffect(() => {
    if (window.mapboxgl && window.MapboxDirections) {
      const mapboxgl = window.mapboxgl;
      const MapboxDirections = window.MapboxDirections;

      mapboxgl.accessToken = 'pk.eyJ1IjoiY3Jpc29hbCIsImEiOiJjbHlqc2JiejIwczRuMmxzYXh6dDJtNmdtIn0.hIDGbhmIMaF3Bu0J-6qvVg'; // Replace with your Mapbox access token

      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [3.3792, 6.5244], // Example coordinates
        zoom: 12,
        pitch: 60,
        bearing: -17.6,
      });

      map.on('load', () => {
        mapRef.current = map;

        map.addControl(new mapboxgl.NavigationControl());

        const directions = new MapboxDirections({
          accessToken: mapboxgl.accessToken
        });

        directionsControlRef.current = directions;

        return () => {
          if (mapRef.current && directionsControlRef.current) {
            mapRef.current.removeControl(directionsControlRef.current);
          }
        };
      });

      return () => {
        if (mapRef.current) {
          mapRef.current.remove();
        }
      };
    } else {
      console.error('mapboxgl or MapboxDirections is not defined');
    }
  }, []);

  useEffect(() => {
    if (mapRef.current && directionsControlRef.current) {
      if (directionsVisible) {
        mapRef.current.addControl(directionsControlRef.current, 'top-left');
      } else {
        mapRef.current.removeControl(directionsControlRef.current);
      }
    }
  }, [directionsVisible]);

  useEffect(() => {
    if (mapRef.current) {
      // Force a re-render of the tooltip
      setTooltipVisible(false);
      setTooltipVisible(true);
    }
  }, [tooltipContent]);

  const handleSelect = async (address) => {
    console.log('Selected address:', address);
    setStartLocation(address); // Update the search box with the selected address

    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${address}`);
    const data = await response.json();
    if (data.length > 0) {
      const { lat, lon, display_name } = data[0];
      const coordinates = [parseFloat(lon), parseFloat(lat)];
      console.log('Coordinates of selected address:', coordinates);

      if (markerRef.current) {
        markerRef.current.remove();
      }

      mapRef.current.flyTo({ center: coordinates, zoom: 15 });

      const newMarker = new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(mapRef.current);

      markerRef.current = newMarker;

      setSearchedLocation(display_name);

      // Fetch current traffic data and prediction data when a location is searched
      fetchTrafficData(mapRef.current, coordinates);
    }
  };

  const getCongestionIntensity = (level) => {
    const intensity = {
      0: 'No congestion',
      1: 'Low congestion',
      2: 'Medium congestion',
      3: 'High congestion',
      4: 'Severe congestion'
    }[level] || 'Unknown';
    console.log('Congestion intensity for level', level, ':', intensity);
    return intensity;
  };

  return (
    <div>
      <div className="full-width-container">
        {!directionsVisible && (
          <div className="geocoder-container">
            <PlacesAutocomplete
              value={startLocation}
              onChange={setStartLocation}
              onSelect={handleSelect}
              searchOptions={{ types: ['address'] }}
            >
              {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                <div>
                  <input
                    {...getInputProps({
                      placeholder: 'Search Places ...',
                      className: 'location-search-input',
                    })}
                  />
                  <div className="autocomplete-dropdown-container">
                    {suggestions.map(suggestion => {
                      const { placeId, description, active } = suggestion;
                      const className = active ? 'suggestion-item--active' : 'suggestion-item';
                      const style = active
                        ? { backgroundColor: '#f0f0f0', cursor: 'pointer' }
                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                      return (
                        <div
                          key={placeId}
                          className={className}
                          style={style}
                          {...getSuggestionItemProps(suggestion)}
                        >
                          <span>{description}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
          </div>
        )}
        <FaDirections className="directions-icon" onClick={toggleDirections} aria-label="Toggle Directions" />
      </div>
      <div className="forecast-controls">
        {['current', '15 mins', '30 mins', '45 mins', '1 hr', '2 hr', '3 hr'].map(time => (
          <Button
            key={time}
            color={forecastTime === time ? 'primary' : 'secondary'}
            onClick={() => {
              console.log('Forecast time button clicked:', time);
              setForecastTime(time);
              selectedForecastTimeRef.current = time; // Store selected forecast time
              if (searchedLocation) {
                const data = time === 'current' ? currentTrafficData : predictionData[time];
                console.log('Traffic data for', time, ':', data);
                if (data && data.latitude) {
                  visualizeTrafficData(mapRef.current, data, time);
                  // Update heatmap colors based on selected forecast time
                  mapRef.current.setPaintProperty('traffic-heatmap', 'heatmap-color', getHeatmapPaintProperties(time)['heatmap-color']);
                  const content = generateTooltipContent(data, time);
                  setTooltipContent(content);
                  setTooltipVisible(false);
                  setTooltipVisible(true);
                  console.log('Updated tooltip content:', content);
                }
              }
            }}
          >
            {time}
          </Button>
        ))}
      </div>
      <div id="map" ref={mapContainerRef} style={{ width: '100%', height: '100vh' }}></div>
      {markerRef.current && tooltipVisible && (
        <Tooltip
          placement="top"
          isOpen={tooltipVisible}
          target={() => markerRef.current?.getElement()}
          toggle={() => setTooltipVisible(!tooltipVisible)}
          style={{
            backgroundColor: '#333',
            color: '#fff',
            fontSize: '14px',
            padding: '8px',
            borderRadius: '4px',
            maxWidth: '200px'
          }}
        >
          {tooltipContent}
        </Tooltip>
      )}
    </div>
  );
};

export default Map;
