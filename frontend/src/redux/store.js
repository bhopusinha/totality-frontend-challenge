// src/redux/store.js
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk'; // Middleware for handling async actions
import { combineReducers } from 'redux';

import cartReducer from './cartReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer
});

const middelware=[thunk]

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middelware))
);

export default store;
