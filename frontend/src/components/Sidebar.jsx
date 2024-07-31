import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <button type="button" className="close" onClick={toggleSidebar}>&times;</button>
        <h4>Directions</h4>
      </div>
      <div className="sidebar-content">
        {/* Directions content will be populated here */}
        <div id="directions"></div>
      </div>
    </div>
  );
};

export default Sidebar;
