import React from 'react'
import { X } from "lucide-react";
import Quantity from './Quantity';

const CartSection = () => {


  return (
    <div
      className="max-w-5xl mx-auto mt-5 min-h-[80px] flex items-center justify-between gap-6 px-6 border border-zinc-200 rounded-lg bg-white shadow-sm">


      {/* Product */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src="/image/disk.png"
            alt="LCD Monitor"
            className="w-12 h-12 object-contain"
          />
          <button className="absolute -top-2 -left-2 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600">
            <X size={12} strokeWidth={2.5} />
          </button>
        </div>

        <span className="text-sm font-medium text-zinc-900">
          LCD Monitor
        </span>
      </div>

      {/* Price */}
      <div className="text-sm font-medium text-zinc-700">
        $500
      </div>

      {/* Quantity */}
      <Quantity />

      {/* Subtotal */}
      <div className="text-sm font-semibold text-zinc-900">
        $500
      </div>

    </div>




  )
}

export default CartSection
