import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
const SearviceCard = () => {
  return (
    <div className="w-72 p-6 rounded-xl bg-zinc-100 flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-md transition">

      {/* Icon */}
      <div className="w-16 h-16 rounded-full bg-zinc-300 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center">
          <TbTruckDelivery className="w-7 h-7 text-white" />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-lg font-semibold text-zinc-900">
        Free & Fast Delivery
      </h1>

      {/* Description */}
      <p className="text-sm text-zinc-600">
        Free delivery for all orders over
        <span className="font-semibold text-zinc-900"> $140</span>
      </p>

    </div>

  )
}

export default SearviceCard
