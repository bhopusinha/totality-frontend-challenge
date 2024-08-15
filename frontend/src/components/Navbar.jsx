import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../redux/userActions';

const Navbar = () => {
    const [showLogout, setShowLogout] = useState(false);
    const dispatch = useDispatch();

    const {user}=useSelector((state)=>state.user);

    const handleLogout = () => {
        localStorage.setItem('token',null);
        dispatch(loadUser());
    };

    const toggleLogoutMenu = () => {
        setShowLogout((prevShowLogout) => !prevShowLogout);
    };

    return (
        <nav className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <h1 className="text-xl font-bold">Property Rental App</h1>
                    </div>
                    <div className="ml-3 relative">
                        <div
                            className="cursor-pointer flex-col text-center justify-center items-center"
                            onClick={toggleLogoutMenu}
                        >
                            <img
                                className="h-10 w-10 rounded-full"
                                src={`https://totality-frontend-challenge-76zf.onrender.com/images/${user.user.image}`} 
                                alt="Avatar"
                            />
                            <p className="text-sm font-medium text-gray-300 hover:text-white">{user.user.name}</p>
                        </div>
                        {showLogout && (
                            <div
                                className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1"
                            >
                                <button
                                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
