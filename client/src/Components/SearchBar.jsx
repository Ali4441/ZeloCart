import { FiSearch } from "react-icons/fi";
import { FaRegHeart, FaRegUser, FaUser } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { useState } from "react";
import AccountMenuCard from "./accountMenuCard";
import { NavLink } from "react-router-dom";



const SearchBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="hidden md:flex items-center gap-6">

      {/* Search */}
      <div className="flex items-center bg-zinc-100 px-3 rounded-md">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="w-40 lg:w-60 h-10 bg-transparent outline-none"
        />

        <FiSearch className="cursor-pointer" />

      </div>

      {/* Icons */}
      <div
        className="flex items-center gap-5">
        <NavLink to="/Wishlist">
          <FaRegHeart className="cursor-pointer" />
        </NavLink>

        <NavLink to="/Cart">
          <GrCart className="cursor-pointer" />
        </NavLink>



        <div className="relative">

          {/* User Icon Button */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white"
          >
            <div className="group cursor-pointer">
              <FaRegUser className="group-hover:hidden" />
              <FaUser className="hidden group-hover:block" />
            </div>
          </button>

          {showMenu && (
            <div className="absolute right-0 mt-3 z-50">
              <AccountMenuCard />
            </div>
          )}

        </div>
      </div>

    </div>
  );
};

export default SearchBar;
