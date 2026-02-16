import React, { useState } from 'react'

const Quantity = () => {


  const [qty, setQty] = useState(1);
  return (
    <div className="flex items-center border border-zinc-300 rounded-md w-22 h-13 bg-white">

      <div className="flex-1 text-center text-sm font-medium">
        {String(qty).padStart(2, "0")}
      </div>

      <div className="flex flex-col border-l border-zinc-200">
        <button
          onClick={() => setQty(qty + 1)}
          className="h-3 px-2 hover:bg-zinc-100 text-xs"
        >
          ▲
        </button>
        <button
          onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
          className="h-5 px-2 hover:bg-zinc-100 text-xs"
        >
          ▼
        </button>
      </div>

    </div>
  )
}

export default Quantity
