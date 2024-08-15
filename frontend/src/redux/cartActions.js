// src/redux/actions/cartActions.js
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from './actionTypes.js';

export const addToCart = (property) => {
  // console.log(property);
  return {
    type: ADD_TO_CART,
    payload: property,
  };
};

export const removeFromCart = (propertyId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: propertyId,
  };
};

export const updateCartQuantity = (propertyId, quantity) => {
  return {
    type: UPDATE_CART_QUANTITY,
    payload: { propertyId, quantity },
  };
};
