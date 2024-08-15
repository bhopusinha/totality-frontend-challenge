// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropertyList from '../components/PropertyList';
import FilterControls from '../components/FilterControls';
import { sampleProperties } from '../assets/data';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';



const HomePage = () => {
  const [filteredProperties, setFilteredProperties] = useState(sampleProperties);
  const [showFilters, setShowFilters] = useState(false);

  const { success } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!success) {
      navigate('/');
    }
  }, [success])

  const handleFilter = (filters) => {
    const filtered = sampleProperties.filter((property) => {
      return (
        property.price >= filters.priceRange[0] &&
        property.price <= filters.priceRange[1] &&
        (filters.location ? property.location.toLowerCase().includes(filters.location.toLowerCase()) : true) &&
        (filters.bedrooms ? property.bedrooms >= filters.bedrooms : true) &&
        (filters.amenities.length > 0 ? filters.amenities.every(amenity => property.amenities.includes(amenity)) : true)
      );
    });
    setFilteredProperties(filtered);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold mb-6">Property Listings</h1>
          <div className="mt-4">
            <button
              onClick={toggleFilters}
              className="bg-blue-500 text-white px-4 py-2 rounded mr-4"
            >
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
            <Link to="/booking" className="bg-green-500 text-white px-4 py-2 rounded">
              View Cart
            </Link>
          </div>
        </div>
        <div className={showFilters ? 'block' : 'hidden'}>
          <FilterControls onFilter={handleFilter} />
        </div>
        <PropertyList properties={filteredProperties} />
      </div>
    </>
  );
};

export default HomePage;
