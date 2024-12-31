import React from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => (
  <footer className="text-center py-4">
    <h2>Contact Us</h2>
    <p>Chairperson: [Number]</p>
    <p>GS: [Number]</p>
    <p>College Address: XYZ College, Mumbai</p>
    <div>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={30} />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} style={{ marginLeft: '10px' }} />
      </a>
      <a href="mailto:example@gmail.com" target="_blank" rel="noopener noreferrer">
        <FaEnvelope size={30} style={{ marginLeft: '10px' }} />
      </a>
    </div>
  </footer>
);

export default Contact;