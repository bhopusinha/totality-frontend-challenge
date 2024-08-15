import React, { useEffect, useState } from 'react';
import Profile from '../assets/upload_area.png';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser, userRegister } from '../redux/userActions';
import LoaderPage from './LoaderPage';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');

  const { user, loading, error,token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate=useNavigate();

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if(user){
      dispatch(loadUser());
      navigate("/");
    }
  }, [error,user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('image', avatar);

    dispatch(userRegister(formData));
  };

  return (
    loading ? <LoaderPage /> :
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm" encType='multipart/form-data' onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
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
          <div className="mb-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <p className="mb-2">Upload image</p>
            <label htmlFor="image" className="cursor-pointer">
              <img className="w-32 h-32 object-cover rounded-full border-2 border-gray-300" src={avatar ? URL.createObjectURL(avatar) : Profile} alt="Add" />
            </label>
            <input
              type="file"
              id="image"
              onChange={(e) => setAvatar(e.target.files[0])}
              className="hidden"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/" className="text-blue-500 hover:text-blue-700">Login</Link>
            </p>
          </div>
        </form>
      </div>
  );
};

export default RegisterPage;
