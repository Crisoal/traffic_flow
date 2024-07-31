import React, { useState, useEffect, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaDirections } from 'react-icons/fa';

const Map = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen(prevState => !prevState);
  }, []);

  useEffect(() => {
    if (window.mapboxgl && window.MapboxDirections) {
      const mapboxgl = window.mapboxgl;
      const MapboxDirections = window.MapboxDirections;

      mapboxgl.accessToken = 'pk.eyJ1IjoiY3Jpc29hbCIsImEiOiJjbHlqc2JiejIwczRuMmxzYXh6dDJtNmdtIn0.hIDGbhmIMaF3Bu0J-6qvVg'; // Replace with your actual access token

      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [3.3792, 6.5244], // Coordinates for Lagos, Nigeria
        zoom: 12,
        pitch: 60, // Adds 3D effect
        bearing: -17.6, // Adds rotation for better 3D view
      });

      map.addControl(new mapboxgl.NavigationControl()); // Add zoom and rotate controls

      const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
      });

      directions.on('route', () => {
        toggleSidebar(); // Toggle sidebar when a route is found
      });

      // Assuming you have a div with id='directions' in your Sidebar component
      const directionsUI = directions.onAdd(map);
      document.getElementById('directions').innerHTML = ''; // Clear existing content
      document.getElementById('directions').appendChild(directionsUI);

      return () => map.remove();
    } else {
      console.error('mapboxgl or MapboxDirections is not defined');
    }
  }, [toggleSidebar]);

  return (
    <div>
      <div id="map" style={{ width: '100%', height: '100vh' }} />
      <div className="directions-icon" onClick={toggleSidebar}>
        <FaDirections size={30} />
      </div>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default Map;
