import React from 'react';
import './Earthquake.css';

function EarthquakeFilter({ filters, setFilters }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="EQFilterContainer">
      <label className="FilterLabel">Min Magnitude:</label>
      <input
        type="number"
        name="minMagnitude"
        value={filters.minMagnitude}
        onChange={handleChange}
        className="FilterInput"
      />
      <label className="FilterLabel">Max Magnitude:</label>
      <input
        type="number"
        name="maxMagnitude"
        value={filters.maxMagnitude}
        onChange={handleChange}
        className="FilterInput"
      />
    </div>
  );
}

export default EarthquakeFilter;
