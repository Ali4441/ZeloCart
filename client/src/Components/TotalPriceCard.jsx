import React from 'react'
import Button from './Button'
const TotalPriceCard = () => {

  const priceBreakdown = {
    mrp: 3299,
    fees: 7,
    discount: 1961,
    total: 1345
  };

  return (

    <div className="lg:w-fit">
      <div className="sticky top-6">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h2 className="font-semibold text-lg mb-4">Price Details</h2>

          <div className="space-y-3">
            <div className="flex justify-between">
              <div className="flex items-center space-x-2">
                <span>MRP (incl. of all taxes)</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <span>₹{priceBreakdown.mrp}</span>
            </div>

            <div className="flex justify-between">
              <div className="flex items-center space-x-2">
                <span>Fees</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <span>₹{priceBreakdown.fees}</span>
            </div>

            <div className="pl-4">
              <div className="flex justify-between text-gray-600">
                <span>Platform Fee</span>
                <span>₹{priceBreakdown.fees}</span>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex items-center space-x-2">
                <span>Discounts</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <span className="text-green-600">-₹{priceBreakdown.discount}</span>
            </div>

            <div className="pl-4">
              <div className="flex justify-between text-gray-600">
                <span>MRP Discount</span>
                <span className="text-green-600">-₹1,890</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Coupons for you</span>
                <span className="text-green-600">-₹71</span>
              </div>
            </div>

            <div className="border-t border-zinc-300 pt-3 mt-3">
              <div className="flex justify-between">
                <span className="text-blue-600 font-medium">Total Amount</span>
                <span className="text-blue-600 font-bold text-lg">₹{priceBreakdown.total}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Offers Banner */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="flex items-center mb-1">
                <span className="bg-linear-to-r from-green-700 via-green-400 to-green-700 bg-size-[200%] animate-shimmer bg-clip-text text-transparent font-semibold">
                  5% Cashback
                </span>
              </div>
              <p className="text-sm text-gray-600">Claim now with payment offers</p>
            </div>
            <div className="flex -space-x-3">
              <div className="relative w-10 h-10 bg-white rounded-full border-2 border-green-50 flex items-center justify-center">
                <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-gringotts/images/green-offer-tag.svg"
                  alt="Offer" className="w-6 h-6" />
              </div>
              <div className="relative w-10 h-10 bg-white rounded-full border-2 border-green-50 flex items-center justify-center">
                <img src="https://static-assets-web.flixcart.com/apex-static/images/payments/upi/paytm-logo.svg"
                  alt="Paytm" className="w-6 h-6" />
              </div>
              <div className="relative w-10 h-10 bg-green-100 rounded-full border-2 border-green-50 flex items-center justify-center">
                <span className="text-xs font-semibold">+3</span>
              </div>
            </div>
          </div>
        </div>

        {/* Happy Customers */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-center space-x-3">
            <span className="font-bold text-zinc-500">35 Crore happy customers and counting!</span>
            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-gringotts/images/smiley.svg"
              alt="Smiley" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default TotalPriceCard
