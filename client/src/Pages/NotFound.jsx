// NotFound.jsx - Simple & Clean
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollToTop from '../Components/ScrollToTop';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
          <h1 className="text-8xl font-bold text-indigo-600 mb-4">404</h1>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Page Not Found
          </h2>

          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for.
          </p>

          <div className="space-y-3">
            <button
              onClick={() => navigate('/')}
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 transition duration-300"
            >
              Go to Homepage
            </button>

            <button
              onClick={() => navigate(-1)}
              className="w-full bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-300 transition duration-300"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;