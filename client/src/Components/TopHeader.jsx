import React from 'react'
import LanguageSelect from "./LanguageSelect";
import { Link } from "react-router-dom";
const TopHeader = () => {
  return (
    <header className="w-full h-10 bg-black flex items-center px-4">
      <div className="flex-1 flex justify-center text-white text-sm">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF{" "}
          <span className="font-bold">50%</span>
          <Link
            to="/shop"
            className="underline underline-offset-4 font-medium text-white hover:text-blue-400 p-2"
          >
            Shop Now
          </Link>
        </p>
      </div>

      {/* Language selector */}
      <div className="header-language ml-4">
        <LanguageSelect />
      </div>
    </header>
  )
}

export default TopHeader
