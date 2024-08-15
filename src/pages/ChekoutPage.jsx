// src/pages/CheckoutPage.js
import React from 'react';
import CheckoutForm from '../components/CheckoutForm';

const CheckoutPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <CheckoutForm />
    </div>
  );
};

export default CheckoutPage;
