import React from 'react'
import { Link } from 'react-router-dom'
const Rodmap = () => {
  return (
    <nav className=" mt-6 px-6 w-fit">
      <ol className="flex items-center gap-2 text-sm text-zinc-400">

        <li className="hover:text-zinc-600 cursor-pointer">
          <Link to="/account" className="text-zinc-400 hover:text-zinc-600">Account</Link>
        </li>

        <span>/</span>

        <li className="hover:text-zinc-600 cursor-pointer">
          <Link to="/account" className="text-zinc-400 hover:text-zinc-600"> My Account</Link>

        </li>

        <span>/</span>

        <li className="hover:text-zinc-600 cursor-pointer">
          <Link to="/account" className="text-zinc-400 hover:text-zinc-600">Product</Link>

        </li>

        <span>/</span>

        <li className="hover:text-zinc-600 cursor-pointer">
          <Link to="/account" className="text-zinc-400 hover:text-zinc-600">View Cart</Link>

        </li>

        <span>/</span>

        <li className="text-zinc-900 font-medium">
          <Link to="/account" className="text-zinc-400 hover:text-zinc-600">CheckOut</Link>

        </li>

      </ol>
    </nav>

  )
}

export default Rodmap
