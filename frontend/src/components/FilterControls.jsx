// src/components/FilterControls.js
import React, { useState } from 'react';

const FilterControls = ({ onFilter }) => {
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [location, setLocation] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [amenities, setAmenities] = useState([]);

  const handleApplyFilters = () => {
    onFilter({ priceRange, location, bedrooms, amenities });
  };

  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Filter Properties</h2>
      
      <div className="mb-4">
        <label className="block text-gray-700">Price Range:</label>
        <input
          type="number"
          value={priceRange[0]}
          onChange={(e) => setPriceRange([parseInt(e.target.value, 10), priceRange[1]])}
          className="w-full p-2 border rounded mb-2"
          placeholder="Min Price"
        />
        <input
          type="number"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value, 10)])}
          className="w-full p-2 border rounded"
          placeholder="Max Price"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Location:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Number of Bedrooms:</label>
        <input
          type="number"
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Amenities:</label>
        <select
          multiple
          value={amenities}
          onChange={(e) => setAmenities([...e.target.selectedOptions].map(option => option.value))}
          className="w-full p-2 border rounded"
        >
          <option value="wifi">WiFi</option>
          <option value="parking">Parking</option>
          <option value="pool">Pool</option>
          <option value="beach">Beach</option>
          <option value="garden">Garden</option>
        </select>
      </div>

      <button
        onClick={handleApplyFilters}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterControls;
