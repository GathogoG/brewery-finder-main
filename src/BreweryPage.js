import brewerys from './db.json'
import './App.css';
import {  Input  } from "@chakra-ui/react";
import React, { useState } from "react";
import FilterComponent from './FilteredComponent';


function BreweryPage() {
     const [search, setSearch] = useState(""); // Initialize state for search input value
     const [filter, setFilter] = useState("");


     function handleSearch (event) {
      setSearch(event.target.value)
    };

    const breweries = brewerys.filter(brewery =>
      brewery.name.toLowerCase().includes(search.toLowerCase()) &&
      (filter === "" || brewery.state === filter)
    );
  

    return (
<>
<div  className={'text-center'}>
  <Input
    placeholder="Search for a brewery" // Search input placeholder text
     onChange={handleSearch} // Handle input change to update search state
  />
  <i className="bi bi-search"></i>
</div>

<FilterComponent items={brewerys} setFilter={setFilter}/>
      <div className="card-container">
        {breweries.map((brewery) => (
          <div className="card" key={brewery.id}>
            <div className="card-body">
              <h5 className="card-title">{brewery.name}</h5>
              <h6 className="card-subtitle">{brewery.brewery_type}</h6>
              <p className="card-text">
              {brewery.address_1},{brewery.address_2},{brewery.address_3}<br />
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
      </>
    );
  }
  
  export default BreweryPage;