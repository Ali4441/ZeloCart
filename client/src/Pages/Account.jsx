// Account.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollToTop from '../Components/ScrollToTop';

const Account = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');

  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 890',
    joinDate: 'January 2025',
    avatar: 'image/Avtar.png',
    orders: [
      { id: '#ORD001', date: '2025-02-10', total: '$129.99', status: 'Delivered' },
      { id: '#ORD002', date: '2025-02-05', total: '$79.99', status: 'Shipped' },
      { id: '#ORD003', date: '2025-01-28', total: '$249.99', status: 'Processing' }
    ],
    addresses: [
      { type: 'Home', street: '123 Main St', city: 'New York', state: 'NY', zip: '10001' },
      { type: 'Office', street: '456 Business Ave', city: 'New York', state: 'NY', zip: '10002' }
    ]
  };

  const handleLogout = () => {
    // Add logout logic here
    navigate('/login');
  };

  return (
    <> <ScrollToTop />
      <div

        className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <ScrollToTop />
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-20 h-20 rounded-full border-4 border-indigo-500"
                />
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
                  <p className="text-gray-600">Member since {user.joinDate}</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="mt-4 md:mt-0 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px">
                {['profile', 'orders', 'addresses', 'settings'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-4 px-6 text-sm font-medium capitalize ${activeTab === tab
                      ? 'border-b-2 border-indigo-500 text-indigo-600'
                      : 'text-gray-500 hover:text-gray-700'
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-800">Profile Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-600">Full Name</label>
                      <p className="mt-1 text-lg text-gray-800">{user.name}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600">Email Address</label>
                      <p className="mt-1 text-lg text-gray-800">{user.email}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600">Phone Number</label>
                      <p className="mt-1 text-lg text-gray-800">{user.phone}</p>
                    </div>
                  </div>
                  <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
                    Edit Profile
                  </button>
                </div>
              )}

              {/* Orders Tab */}
              {activeTab === 'orders' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Order History</h2>
                  <div className="space-y-4">
                    {user.orders.map((order) => (
                      <div key={order.id} className="border rounded-lg p-4 hover:shadow-md transition">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-semibold text-gray-800">{order.id}</p>
                            <p className="text-sm text-gray-600">Date: {order.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-indigo-600">{order.total}</p>
                            <span className={`text-sm px-2 py-1 rounded ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                              order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                                'bg-yellow-100 text-yellow-800'
                              }`}>
                              {order.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Addresses Tab */}
              {activeTab === 'addresses' && (
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">Saved Addresses</h2>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                      Add New Address
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {user.addresses.map((address, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded mb-2">
                          {address.type}
                        </span>
                        <p className="text-gray-800">{address.street}</p>
                        <p className="text-gray-600">{address.city}, {address.state} {address.zip}</p>
                        <div className="mt-3 space-x-2">
                          <button className="text-indigo-600 hover:text-indigo-800">Edit</button>
                          <button className="text-red-600 hover:text-red-800">Delete</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-800">Account Settings</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium text-gray-800">Email Notifications</p>
                        <p className="text-sm text-gray-600">Receive updates about your orders</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium text-gray-800">SMS Notifications</p>
                        <p className="text-sm text-gray-600">Get text alerts for delivery updates</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                      </label>
                    </div>

                    <button className="w-full bg-red-50 text-red-600 px-4 py-3 rounded-lg hover:bg-red-100 transition">
                      Delete Account
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;