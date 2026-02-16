import React from 'react'

const CartMainSection = () => {
  return (
    <div className="hidden sm:block max-w-5xl mx-auto mt-6 px-6 py-4 bg-white rounded-lg shadow-sm border-b border-zinc-200">
      <div className="grid grid-cols-4 text-sm font-medium text-zinc-700">
        <div>Product</div>
        <div className="text-center">Price</div>
        <div className="text-center">Quantity</div>
        <div className="text-right">Subtotal</div>
      </div>
    </div>
  );
}
export default CartMainSection
