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

  const toggleDirections = useCallback(() => {
    setDirectionsVisible(prevState => !prevState);
  }, []);

  const fetchTrafficData = async (map, location = []) => {
    if (location.length === 0) return;

    const [lon, lat] = location;

    try {
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
          predicted_congestion_level: 'Moderate congestion',
          prediction_time: new Date(Date.now() + 15 * 60000).toISOString(),
        },
        '30 mins': {
          latitude: lat,
          longitude: lon,
          predicted_congestion_level: 'High congestion',
          prediction_time: new Date(Date.now() + 30 * 60000).toISOString(),
        },
        '45 mins': {
          latitude: lat,
          longitude: lon,
          predicted_congestion_level: 'Severe congestion',
          prediction_time: new Date(Date.now() + 45 * 60000).toISOString(),
        },
        '1 hr': {
          latitude: lat,
          longitude: lon,
          predicted_congestion_level: 'Moderate congestion',
          prediction_time: new Date(Date.now() + 60 * 60000).toISOString(),
        },
        '2 hr': {
          latitude: lat,
          longitude: lon,
          predicted_congestion_level: 'High congestion',
          prediction_time: new Date(Date.now() + 120 * 60000).toISOString(),
        },
        '3 hr': {
          latitude: lat,
          longitude: lon,
          predicted_congestion_level: 'Severe congestion',
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
        0.3, '#ffff00', // Moderate congestion
        0.6, '#ff8000', // High congestion
        1, '#ff0000' // Extreme congestion
      ],
      '15 mins': [
        'step',
        ['heatmap-density'],
        '#ffffff', // No congestion
        0.1, '#00ff00', // Low congestion
        0.3, '#ffff00', // Moderate congestion
        0.6, '#ff8000', // High congestion
        1, '#ff0000' // Extreme congestion
      ],
      // Add other forecast times if needed
    };

    return {
      'heatmap-color': colorSchemes[forecastTime] || colorSchemes.current,
      'heatmap-weight': 1,
      'heatmap-intensity': 1,
      'heatmap-radius': 30,
      'heatmap-opacity': 0.7
    };
  };

  const visualizeTrafficData = (map, data, forecastTime) => {
    if (heatmapLayerRef.current) {
      // Update the heatmap source with data for the searched location
      map.getSource('traffic-data').setData({
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
      map.setPaintProperty('traffic-heatmap', 'heatmap-color', getHeatmapPaintProperties(forecastTime)['heatmap-color']);
    }

    // Remove previous marker if present
    if (markerRef.current) {
      markerRef.current.remove();
    }

    // Add a new marker
    const marker = new mapboxgl.Marker()
      .setLngLat([data.longitude, data.latitude])
      .addTo(map);

    markerRef.current = marker;

    // Show the marker when the user hovers over the heatmap
    map.on('mouseenter', 'traffic-heatmap', () => {
      if (markerRef.current) {
        markerRef.current.getElement().style.display = 'block';
      }
    });

    // Hide the marker when the user moves the mouse away from the heatmap
    map.on('mouseleave', 'traffic-heatmap', () => {
      if (markerRef.current) {
        markerRef.current.getElement().style.display = 'none';
      }
    });

    marker.getElement().addEventListener('click', () => {
      setTooltipContent(generateTooltipContent(data, forecastTime));
      setTooltipVisible(true);
    });
  };

  const generateTooltipContent = (data, forecastTime = 'current') => {
    if (!data) return '';
    if (forecastTime === 'current') {
      return `Congestion Level: ${data.congestion_level}\nCurrent Speed: ${data.current_speed}\nFree Flow Speed: ${data.free_flow_speed}\nIntensity: ${getCongestionIntensity(data.congestion_level)}`;
    } else {
      return `Forecast for ${forecastTime}:\nPredicted Congestion Level: ${data.predicted_congestion_level}\nPrediction Time: ${data.prediction_time}`;
    }
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
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${address}`);
    const data = await response.json();
    if (data.length > 0) {
      const { lat, lon } = data[0];
      const coordinates = [parseFloat(lon), parseFloat(lat)];

      if (markerRef.current) {
        markerRef.current.remove();
      }

      const newMarker = new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(mapRef.current);

      markerRef.current = newMarker;

      mapRef.current.flyTo({ center: coordinates, zoom: 15 });

      setSearchedLocation(coordinates);

      // Fetch current traffic data and prediction data when a location is searched
      fetchTrafficData(mapRef.current, coordinates);
    }
  };

  const getCongestionIntensity = (level) => {
    switch (level) {
      case 1:
        return 'Light';
      case 2:
        return 'Moderate';
      case 3:
        return 'Heavy';
      default:
        return 'Unknown';
    }
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
              setForecastTime(time);
              if (searchedLocation) {
                const data = time === 'current' ? currentTrafficData : predictionData[time];
                if (data && data.latitude) {
                  visualizeTrafficData(mapRef.current, data, time);
                  // Update heatmap colors based on selected forecast time
                  mapRef.current.setPaintProperty('traffic-heatmap', 'heatmap-color', getHeatmapPaintProperties(time)['heatmap-color']);
                  setTooltipContent(generateTooltipContent(data, time));
                  setTooltipVisible(false);
                  setTooltipVisible(true);
                }
              }
            }}
          >
            {time}
          </Button>
        ))}
      </div>
      <div id="map" ref={mapContainerRef} style={{ width: '100%', height: '100vh' }}></div>
      {tooltipVisible && (
        <Tooltip
          placement="top"
          isOpen={tooltipVisible}
          target={() => markerRef.current?.getElement()}
          toggle={() => setTooltipVisible(!tooltipVisible)}
        >
          {tooltipContent}
        </Tooltip>
      )}
    </div>
  );
};

export default Map;
