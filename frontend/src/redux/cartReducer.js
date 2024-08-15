// src/redux/reducers/cartReducer.js
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from './actionTypes.js';

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Check if the item already exists in the cart
      console.log(state.items);
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.propertyId ? { ...item, quantity: action.payload.quantity } : item
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
