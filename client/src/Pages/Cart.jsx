import React from 'react'
import AddressCard from '../Components/AddressCard'
import TotalPriceCard from '../Components/TotalPriceCard'
import ProductDetailCard from '../Components/ProductDetailCard'
import { useNavigate } from 'react-router-dom'
import ScrollToTop from '../Components/ScrollToTop'
function Cart() {
  const navigate = useNavigate()
  return (
    <>
      <ScrollToTop />
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT CART ITEMS */}
          <div className="lg:col-span-2 space-y-4  bg-white  rounded-md p-4 shadow-sm">
            {/* ADDRESS CARD */}
            <AddressCard />

            {/* PRODUCT CARDS */}
            <ProductDetailCard />
            <ProductDetailCard />



            {/* PLACE ORDER BUTTON (SEPARATE DIV) */}
            <div className="flex justify-end mt-4">
              <button
                onClick={() => navigate("/CheckOut")}
                className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-10 rounded-md font-semibold cursor-pointer">
                PLACE ORDER
              </button>
            </div>

          </div>


          {/* RIGHT PRICE DETAILS */}
          <TotalPriceCard />
        </div>
      </div>
    </>
  )
}

export default Cart
