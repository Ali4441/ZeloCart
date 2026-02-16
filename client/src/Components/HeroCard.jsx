import React from 'react'
import { AiOutlineApple } from "react-icons/ai";
import { IoIosArrowRoundForward } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import CategoryMenu from './CategoryMenu ';


const HeroCard = () => {
  return (
    <div className=" max-w-6xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-8">

      {/* 🔹 Hero Section */}
      <div className="flex-1 bg-black text-white rounded-xl p-6 sm:p-10 flex flex-col lg:flex-row justify-between items-center order-1 lg:order-2">

        {/* 📷 Image (Top on mobile) */}
        <div className="mb-6 lg:mb-0 order-1 lg:order-2">
          <img
            src="./image/heroImg.png"
            alt="iPhone 14"
            className="w-full max-w-xs mx-auto lg:max-w-sm object-contain"
          />
        </div>

        {/* 📝 Content */}
        <div className="flex flex-col gap-6 order-2 lg:order-1 text-center lg:text-left">

          <div className="flex items-center justify-center lg:justify-start gap-2 text-sm opacity-90">
            <AiOutlineApple className="text-3xl" />
            <span>iPhone 14 Series</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Up to 10% <br /> off Voucher
          </h1>

          <div className="flex items-center justify-center lg:justify-start gap-2 cursor-pointer group w-fit mx-auto lg:mx-0">
            <span className="text-sm font-medium group-hover:underline">
              Shop Now
            </span>
            <IoIosArrowRoundForward className="text-2xl group-hover:translate-x-1 transition" />
          </div>

        </div>
      </div>

      {/* 🔹 Category Menu */}
      <div className="order-2 lg:order-1">
        <CategoryMenu />
      </div>

    </div>

  );
};

export default HeroCard    