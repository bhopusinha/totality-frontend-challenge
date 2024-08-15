// src/pages/BookingPage.js
import React from 'react';
import Cart from '../components/Cart';
import Navbar from '../components/Navbar';

const BookingPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Your Booking</h1>
        <Cart />
      </div>
    </>
  );
};

export default BookingPage;
