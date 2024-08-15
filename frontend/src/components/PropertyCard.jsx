// src/components/PropertyCard.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, updateCartQuantity } from '../redux/cartActions';

const PropertyCard = ({ property }) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const itemInCart = cart.items.find(item => item.id === property.id);
  
  const handleAddToCart = () => {
    dispatch(addToCart(property));
  };

  const handleIncrease = () => {
    dispatch(updateCartQuantity(property.id, itemInCart.quantity + 1));
  };

  const handleDecrease = () => {
    if (itemInCart.quantity > 1) {
      dispatch(updateCartQuantity(property.id, itemInCart.quantity - 1));
    } else {
      dispatch(removeFromCart(property.id));
    }
  };

  return (
    <div className="border rounded-lg p-4 shadow-lg">
      <img src={property.image} alt={property.title} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{property.title}</h2>
        <p className="text-gray-700">{property.description}</p>
        <p className="text-lg font-semibold">${property.price} / night</p>
        {itemInCart ? (
          <div className="flex items-center mt-2">
            <button
              className="bg-gray-300 text-black px-4 py-2 rounded"
              onClick={handleDecrease}
            >
              -
            </button>
            <span className="mx-2">{itemInCart.quantity}</span>
            <button
              className="bg-gray-300 text-black px-4 py-2 rounded"
              onClick={handleIncrease}
            >
              +
            </button>
          </div>
        ) : (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
            onClick={handleAddToCart}
          >
            Book Now
          </button>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
