import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; // Import Link from React Router
import LoaderPage from './LoaderPage';
import { toast } from 'react-toastify';
import { loadUser, loginRequest } from '../redux/userActions';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const { user, loading, error } = useSelector((state) => state.user);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginRequest(email, password));
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
        if (user) {
            dispatch(loadUser());
        }
    }, [error,user]);

    return (
        loading ? <LoaderPage /> :
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Login
                        </button>
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-gray-600">
                            Don't have an account?{' '}
                            <Link to="/register" className="text-blue-500 hover:text-blue-700">
                                Register here
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
    );
};

export default Login;
