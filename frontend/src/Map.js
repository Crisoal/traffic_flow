import React, { useState, useEffect, useCallback, useRef } from 'react';
import mapboxgl from 'mapbox-gl'; // Import mapboxgl
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaDirections } from 'react-icons/fa';
import PlacesAutocomplete from 'react-places-autocomplete';
import 'mapbox-gl/dist/mapbox-gl.css';
import './styles/map.css'; // Make sure this path is correct

const Map = () => {
  const [directionsVisible, setDirectionsVisible] = useState(false);
  const [startLocation, setStartLocation] = useState('');
  const [searchedLocation, setSearchedLocation] = useState(null);
  const mapContainerRef = useRef(null);
  const directionsControlRef = useRef(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  const toggleDirections = useCallback(() => {
    setDirectionsVisible(prevState => !prevState);
  }, []);

  useEffect(() => {
    if (window.mapboxgl && window.MapboxDirections) {
      const mapboxgl = window.mapboxgl;
      const MapboxDirections = window.MapboxDirections;

      mapboxgl.accessToken = 'pk.eyJ1IjoiY3Jpc29hbCIsImEiOiJjbHlqc2JiejIwczRuMmxzYXh6dDJtNmdtIn0.hIDGbhmIMaF3Bu0J-6qvVg'; // Replace with your actual access token

      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [3.3792, 6.5244], // Coordinates for Lagos, Nigeria
        zoom: 12,
        pitch: 60, // Adds 3D effect
        bearing: -17.6, // Adds rotation for better 3D view
      });

      map.on('load', () => {
        mapRef.current = map;

        map.addControl(new mapboxgl.NavigationControl()); // Add zoom and rotate controls

        const directions = new MapboxDirections({
          accessToken: mapboxgl.accessToken
        });

        directionsControlRef.current = directions;

        // Clean up directions on component unmount
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
              searchOptions={{ countrycodes: 'ng' }}
            >
              {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                  <input
                    {...getInputProps({
                      placeholder: 'Search for a road or area in Lagos',
                      className: 'location-search-input',
                    })}
                  />
                  <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {suggestions.map(suggestion => {
                      const className = suggestion.active
                        ? 'suggestion-item--active'
                        : 'suggestion-item';
                      const style = suggestion.active
                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                      return (
                        <div
                          {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                          })}
                        >
                          <span>{suggestion.description}</span>
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
      <div id="map" ref={mapContainerRef} style={{ width: '100%', height: '100vh' }}></div>
    </div>
  );
};

export default Map;