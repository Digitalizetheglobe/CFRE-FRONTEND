import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Assuming you are using react-router for navigation
import Header from '../Components/Header/header.jsx'
const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // To navigate after successful login

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://cfrecpune.com/admin/login', {
        email,
        password,
      });

      if (response.data.token) {
        // Save the token in localStorage or sessionStorage
        localStorage.setItem('token', response.data.token);
        // Navigate to a protected route, e.g., /dashboard
        navigate('/dashboard');
      }
    } catch (error) {
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <>
    <Header />
    <div
      className="flex justify-center items-center font-[sans-serif] h-full min-h-screen p-4"
      style={{
        backgroundImage: 'url(https://readymadeui.com/background-image.webp)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="max-w-md w-full mx-auto">
        <form
          className="bg-opacity-70 bg-white rounded-2xl p-6 shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)]"
          onSubmit={handleLogin}
        >
          <div className="mb-12">
            <h3 className="text-gray-800 text-3xl font-extrabold">Login</h3>
          </div>

          {errorMessage && <p className="text-red-500">{errorMessage}</p>}

          <div>
            <div className="relative flex items-center">
              <input
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                placeholder="Enter email"
              />
              {/* Email Icon */}
            </div>
          </div>

          <div className="mt-6">
            <div className="relative flex items-center">
              <input
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                placeholder="Enter password"
              />
              {/* Password Icon */}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 shrink-0 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                Remember me
              </label>
            </div>
            {/* <div>
              <a href="javascript:void(0);" className="text-blue-600 text-sm font-semibold hover:underline">
                Forgot Password?
              </a>
            </div> */}
          </div>

          <div className="mt-12">
            <button
              type="submit"
              className="w-full py-2.5 px-4 text-sm font-semibold tracking-wider rounded-full text-white bg-gray-800 hover:bg-[#222] focus:outline-none"
            >
              Submit
            </button>
            {/* <p className="text-gray-800 text-sm text-center mt-6">
              Don't have an account?{' '}
              <a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1">
                Register here
              </a>
            </p> */}
          </div>

          <hr className="my-6 border-gray-400" />

          <div className="space-x-8 flex justify-center">
            {/* Social Media Icons */}
          </div>
        </form>
      </div>
    </div></>
  );
};

export default AdminLogin;
