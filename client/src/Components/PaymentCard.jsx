import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const PaymentCard = () => {
  const [activeSection, setActiveSection] = useState('upi');
  const [upiId, setUpiId] = useState('');
  const [showAllEmiOptions, setShowAllEmiOptions] = useState(false);

  const paymentMethods = [
    {
      id: 'upi',
      name: 'UPI',
      icon: 'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-gringotts/images/upi.svg',
      description: 'Pay by any UPI app',
      offers: [
        { text: 'Get upto ₹30 cashback' },
        { text: '4 offers available' }
      ],
      active: true
    },
    {
      id: 'card',
      name: 'Credit / Debit / ATM Card',
      icon: 'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-gringotts/images/card.svg',
      description: 'Add and secure cards as per RBI guidelines',
      offers: [
        { text: 'Get upto 5% cashback' },
        { text: '2 offers available' }
      ]
    },
    {
      id: 'emi',
      name: 'EMI',
      icon: 'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-gringotts/images/emi-header-08092023.svg',
      description: 'Credit Card EMI',
      offers: []
    },
    {
      id: 'cod',
      name: 'Cash on Delivery',
      icon: 'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-gringotts/images/cash-icon.svg',
      description: '',
      offers: []
    }
  ];

  const emiOptions = [
    { bank: 'HDFC', logo: 'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-gringotts/images/banks/HDFC.svg', emi: '₹123/m' },
    { bank: 'KOTAK', logo: 'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-gringotts/images/banks/KOTAK.svg', emi: '₹123/m' },
    { bank: 'ICICI', logo: 'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-gringotts/images/banks/ICICI.svg', emi: '₹128/m' },
    { bank: 'SBI', logo: 'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-gringotts/images/banks/SBI.svg', emi: '₹130/m' }
  ];

  return (

    <div className="divide-y divide-zinc-300">
      {paymentMethods.map((method) => (
        <div key={method.id} className="p-4">
          <button
            onClick={() => setActiveSection(activeSection === method.id ? null : method.id)}
            className="flex items-center justify-between w-full text-left cursor-pointer"
          >
            <div className="flex items-start space-x-4">
              <img src={method.icon} alt={method.name} className="w-6 h-6" />
              <div>
                <h3 className="font-semibold">{method.name}</h3>
                <div className="text-sm text-gray-600">
                  <p>{method.description}</p>
                  {method.offers.length > 0 && (
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 mt-1">
                      {method.offers.map((offer, idx) => (
                        <span key={idx} className="text-green-600 text-sm">
                          {offer.text}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            {activeSection === method.id ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>

          {/* Expanded Content */}
          {activeSection === method.id && (
            <div className="mt-4 animate-fadeIn">
              {method.id === 'upi' && (
                <div className="border-t border-zinc-300  pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-medium">Add new UPI ID</h4>
                    </div>
                    <button className="text-blue-600 text-sm font-medium cursor-pointer">
                      How to find?
                    </button>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 mb-4">
                    <div className="flex-1">
                      <label className="block text-sm text-gray-600 mb-1">UPI ID</label>
                      <input
                        type="text"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        placeholder="Enter your UPI ID"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500 outline-none"
                      />
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors self-end cursor-pointer">
                      Verify
                    </button>
                  </div>
                  <button className="w-full bg-gray-100 text-gray-400 py-3 rounded-lg font-medium cursor-not-allowed">
                    Pay ₹1,345
                  </button>
                </div>
              )}

              {method.id === 'card' && (
                <div className="border-t border-zinc-300 pt-4">
                  <div className="bg-yellow-50 p-3 rounded-lg mb-4">
                    <p className="text-sm">
                      <strong>Note:</strong> Please ensure your card can be used for online transactions.{' '}
                      <button className="text-blue-600 font-medium">Learn More</button>
                    </p>
                  </div>
                  <form id="cards">
                    {/* Card form would go here */}
                  </form>
                </div>
              )}

              {method.id === 'emi' && (
                <div className="border-t border-zinc-300 pt-4">
                  <div className="space-y-3">
                    {emiOptions.slice(0, showAllEmiOptions ? emiOptions.length : 2).map((option, index) => (
                      <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <div className="relative w-10 h-6">
                              <img src={option.logo} alt={option.bank} className="w-full h-full object-contain" />
                            </div>
                            <div>
                              <p className="font-medium">Credit Card EMI</p>
                              <p className="text-sm text-gray-600">
                                EMI <span className="font-medium">{option.emi}</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {/* Bank logos would stack here */}
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => setShowAllEmiOptions(!showAllEmiOptions)}
                    className="flex items-center justify-center w-full mt-4 text-blue-600 font-medium py-2"
                  >
                    {showAllEmiOptions ? 'Show Less' : 'All EMI Options'}

                  </button>
                </div>
              )}

              {method.id === 'cod' && (
                <div className="border-t border-zinc-300 pt-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-4">
                      Due to handling costs, a nominal fee of ₹10 will be charged for orders placed using this option.
                      Avoid this fee by paying online now.
                    </p>
                    <button className="w-full bg-zinc-600 text-gray-300 py-3 rounded-lg font-medium hover:bg-zinc-500 transition-colors cursor-pointer">
                      Place Order
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      ))}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-shimmer {
          animation: shimmer 2s linear infinite;
        }
      `}</style>
    </div>


  );
};

export default PaymentCard;