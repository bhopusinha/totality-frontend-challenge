import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, updateCartQuantity } from '../redux/cartActions';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateCartQuantity(id, quantity));
    }
  };

  const calculateTotal = () => {
    return cart.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="border p-4 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {cart.items.length === 0 ? (
          <div>
            <p className="mb-4">Your cart is empty.</p>
            <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded inline-block">
              Go to Home
            </Link>
          </div>
        ) : (
          <div>
            {cart.items.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-2">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-lg mr-4" />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p>${item.price} / night</p>
                </div>
                <div className="flex items-center">
                  <button
                    className="bg-gray-300 px-2 py-1 rounded"
                    onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    className="bg-gray-300 px-2 py-1 rounded"
                    onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="ml-4 text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <p className="text-xl font-bold mt-4">Total: ${calculateTotal()}</p>
            <Link to="/checkout" className="bg-blue-500 text-white px-4 py-2 rounded mt-4 inline-block">
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
