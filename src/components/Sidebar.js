import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="sidebar" style={{ position: 'fixed', top: '0', left: '0', width: '200px', background: '#333', color: '#fff' }}>
    <ul style={{ listStyle: 'none', padding: '10px' }}>
      <li>
        <Link to="/events" style={{ color: '#fff' }}>Events</Link>
      </li>
      <li>
        <Link to="/members" style={{ color: '#fff' }}>Members</Link>
      </li>
      <li>
        <Link to="/magazine" style={{ color: '#fff' }}>Magazines</Link>
      </li>
      <li>
        <Link to="/contact" style={{ color: '#fff' }}>Contact Us</Link>
      </li>
    </ul>
  </div>
);

export default Sidebar;