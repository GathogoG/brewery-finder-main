import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import AboutUs from './About';
import Contact from './Contacts';
import './App.css';

function NavBar() {
  return (
    <Router>
      <div className='bg-pink'>
        <nav>
          <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
            <li style={{ marginRight: '10px' }}>
              <Link to="/">Home</Link>
            </li>
            <li style={{ marginRight: '10px' }}>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default NavBar;
