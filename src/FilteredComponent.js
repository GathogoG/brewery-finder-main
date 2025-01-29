import React from 'react';

const FilterComponent = ({ items, setFilter }) => {
  const handleFilterChange = (event) => {
    const filterValue = event.target.value;
    setFilter(filterValue);
  };

  return (
    <div>
      <label className='text-white' htmlFor="filter">Filter by State:</label>
      <select id="filter" onChange={handleFilterChange}>
      <option value="">Select...</option>
      {items.map((item) => (
          <option key={item.id} value={item.state}>
            {item.state}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterComponent;