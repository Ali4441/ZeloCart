// SignUp.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ScrollToTop from '../Components/ScrollToTop';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'You must accept the terms';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // Add signup logic here
      console.log('Signup data:', formData);
      navigate('/account');
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
        <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">

          {/* Left Side - Illustration with Person and Empty Cart */}
          <div className="lg:w-1/2 bg-linear-to-br from-indigo-600 to-purple-600 p-8 lg:p-12 flex flex-col items-center justify-center text-white">
            {/* Person with Empty Cart Illustration */}
            <div className="relative mb-8">
              {/* Person SVG */}
              <svg
                className="w-48 h-48 lg:w-64 lg:h-64 text-white/90"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Person Circle */}
                <circle cx="100" cy="70" r="40" fill="white" fillOpacity="0.9" />

                {/* Body */}
                <path
                  d="M60 140 L140 140 L130 180 L70 180 L60 140"
                  fill="white"
                  fillOpacity="0.9"
                />

                {/* Arms */}
                <path
                  d="M40 100 L160 100"
                  stroke="white"
                  strokeWidth="15"
                  strokeLinecap="round"
                  strokeOpacity="0.9"
                />

                {/* Shopping Cart - Empty */}
                <g transform="translate(120, 60)">
                  {/* Cart Body */}
                  <rect x="0" y="20" width="50" height="35" rx="5" fill="white" fillOpacity="0.9" />
                  {/* Cart Handle */}
                  <path
                    d="M10 15 L15 5 L35 5 L40 15"
                    stroke="white"
                    strokeWidth="4"
                    fill="none"
                    strokeOpacity="0.9"
                  />
                  {/* Cart Wheels */}
                  <circle cx="15" cy="55" r="8" fill="white" fillOpacity="0.9" />
                  <circle cx="35" cy="55" r="8" fill="white" fillOpacity="0.9" />
                  {/* Empty Cart Symbol */}
                  <text x="25" y="40" textAnchor="middle" fill="#667eea" fontSize="12" fontWeight="bold">0</text>
                </g>

                {/* Question Mark - Indicating Empty/New User */}
                <circle cx="150" cy="40" r="15" fill="#FFD700" fillOpacity="0.9" />
                <text x="150" y="48" textAnchor="middle" fill="#667eea" fontSize="16" fontWeight="bold">?</text>
              </svg>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
            </div>

            {/* Welcome Message */}
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">New Here?</h2>
              <p className="text-lg lg:text-xl mb-6 text-white/90">
                Your cart is waiting! Sign up to start shopping.
              </p>

              {/* Empty Cart Stats */}
              <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                <div className="flex items-center justify-center gap-4">
                  <div>
                    <span className="block text-2xl font-bold">0</span>
                    <span className="text-sm text-white/80">Items in Cart</span>
                  </div>
                  <div className="w-px h-10 bg-white/30"></div>
                  <div>
                    <span className="block text-2xl font-bold">₹0</span>
                    <span className="text-sm text-white/80">Total Value</span>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="mt-8 text-sm text-white/80 italic">
                "Join 10,000+ happy shoppers who found their style with us!"
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-10 left-10 w-4 h-4 bg-white/30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-6 h-6 bg-white/20 rounded-full animate-ping"></div>
          </div>

          {/* Right Side - SignUp Form */}
          <div className="lg:w-1/2 p-8 lg:p-12">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
              <p className="text-gray-600 mt-2">Join us and start your shopping journey!</p>
            </div>

            {/* Signup Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.name
                    ? 'border-red-500 focus:ring-red-200'
                    : 'border-gray-300 focus:ring-indigo-200'
                    }`}
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.email
                    ? 'border-red-500 focus:ring-red-200'
                    : 'border-gray-300 focus:ring-indigo-200'
                    }`}
                  placeholder="Enter your email"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.password
                    ? 'border-red-500 focus:ring-red-200'
                    : 'border-gray-300 focus:ring-indigo-200'
                    }`}
                  placeholder="Create a password"
                />
                {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
              </div>

              {/* Confirm Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.confirmPassword
                    ? 'border-red-500 focus:ring-red-200'
                    : 'border-gray-300 focus:ring-indigo-200'
                    }`}
                  placeholder="Confirm your password"
                />
                {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  className="mt-1 mr-3"
                />
                <label className="text-sm text-gray-600">
                  I accept the{' '}
                  <Link to="/terms" className="text-indigo-600 hover:text-indigo-800">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-indigo-600 hover:text-indigo-800">
                    Privacy Policy
                  </Link>
                </label>
              </div>
              {errors.acceptTerms && <p className="text-sm text-red-500">{errors.acceptTerms}</p>}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-linear-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition duration-300 shadow-lg"
              >
                Sign Up & Start Shopping
              </button>

              {/* Login Link */}
              <p className="text-center text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-indigo-600 hover:text-indigo-800 font-semibold">
                  Login
                </Link>
              </p>
            </form>

            {/* Social Signup */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or sign up with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {['Google', 'Facebook', 'Apple'].map((provider) => (
                  <button
                    key={provider}
                    className="w-full py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center justify-center gap-2"
                  >
                    {provider === 'Google' && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3.5C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z" />
                        <path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078-3.134 0-5.945-2.059-6.974-4.938L1.073 18.35C3.019 22.28 7.273 24 12 24c2.933 0 5.735-.98 7.834-2.764l-3.794-3.223Z" />
                        <path fill="#4A90E2" d="M19.834 21.236c2.195-2.048 3.62-5.096 3.62-9.236 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21.236Z" />
                        <path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.542 11.542 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z" />
                      </svg>
                    )}
                    {provider === 'Facebook' && (
                      <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    )}
                    {provider === 'Apple' && (
                      <svg className="w-5 h-5" fill="black" viewBox="0 0 24 24">
                        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.69 3.56-1.702z" />
                      </svg>
                    )}
                    <span>{provider}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Cart Reminder */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Your empty cart is waiting to be filled!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;