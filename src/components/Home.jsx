// Home.jsx
import React from 'react';
import BreweryPage from '../BreweryPage';
import './App.css'

function Home() {
    return (
        <div className='home-container'>
            <h2 className='title'>THE BREWERIES</h2>
            <p className='subtitle'>Having Unique Beer Experiences</p>
            {/* Render BreweryPage */}
      <BreweryPage />
            {/* Additional content can be added here */}
        </div>
    );
}

export default Home;
