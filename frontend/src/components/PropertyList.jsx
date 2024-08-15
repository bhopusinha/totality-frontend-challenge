// src/components/PropertyList.js
import React from 'react';
import PropertyCard from './PropertyCard';

const PropertyList = ({ properties }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {properties.map(property => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyList;
