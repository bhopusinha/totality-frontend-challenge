// src/components/CheckoutForm.js
import React from 'react';

const CheckoutForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <div className="mb-4">
        <label className="block mb-1">Name</label>
        <input type="text" className="w-full border rounded p-2" required />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Email</label>
        <input type="email" className="w-full border rounded p-2" required />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Credit Card</label>
        <input type="text" className="w-full border rounded p-2" required />
      </div>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Pay Now</button>
    </form>
  );
};

export default CheckoutForm;
