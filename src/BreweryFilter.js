// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const BreweryFilter = () => {
//   const [breweries, setBreweries] = useState([]);
//   const [selectedState, setSelectedState] = useState('');
//   const [states, setStates] = useState([]);

//   useEffect(() => {
//     axios.get('https://api.openbrewerydb.org/breweries').then(response => {
//       const statesSet = new Set(response.data.map(brewery => brewery.state));
//       setStates(Array.from(statesSet));
//     });
//   }, []);

//   const handleChange = event => {
//     setSelectedState(event.target.value);
//     fetchBreweries(event.target.value);
//   };

//   const fetchBreweries = state => {
//     axios.get(`https://api.openbrewerydb.org/breweries?by_state=${state}`).then(response => {
//       setBreweries(response.data);
//     });
//   };

  return (
    <div>
      <h1>Breweries by State</h1>
      <label htmlFor="states">Select a State:</label>
      <select id="states" value={selectedState} onChange={handleChange}>
        <option value="">Select...</option>
        {states.map((state, index) => (
          <option key={index} value={state}>
            {state}
          </option>
        ))}
      </select>
      <div className="">
        {breweries.map((brewery) => (
          <div className="card bg-slate-500" key={brewery.id}>
            <div className="card-body">
              <h5 className="card-title">{brewery.name}</h5>
              <h6 className="card-subtitle">{brewery.brewery_type}</h6>
              <p className="card-text">
                {brewery.address}<br />
                {brewery.city}, {brewery.state}, {brewery.postal_code}<br />
                Country: {brewery.country}<br />
                Latitude: {brewery.latitude}, Longitude: {brewery.longitude}
              </p>
              <a href={`tel:${brewery.phone}`} className="card-link">{brewery.phone}</a>
              <a href={brewery.website_url} className="card-link" target="_blank" rel="noopener noreferrer">{brewery.website_url}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );


// export default BreweryFilter;