// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import CheckoutPage from './pages/ChekoutPage';
import RegisterPage from './pages/RegisterPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './redux/userActions';

function App() {

  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(loadUser());
  }, [])

  return (
    <Router>
      <div className="container mx-auto p-6">
        <Routes>

          {
            success ? <><Route exact path="/" element={<HomePage />} />
              <Route exact path="/booking" element={<BookingPage />} />
              <Route exact path="/checkout" element={<CheckoutPage />} /></> :
              <><Route exact path="/register" element={<RegisterPage />} />
                <Route exact path="/" element={<Login />} /></>
          }
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
