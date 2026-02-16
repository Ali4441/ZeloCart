import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full flex items-center justify-between">

      {/* 🔹 Left - Logo */}
      <NavLink to="/" className="flex items-center justify-center flex-row gap-2 cursor-pointer">
        <span className=" pb-2 text-4xl font-bold text-[#333333] bg-white 
           [text-shadow:2px_2px_0px_#FFFFFF,5px_4px_0px_rgba(0,0,0,0.15)]">Z</span>
        <span className=" text-md font-normal text-[#0c1b2a] bg-white 
           [text-shadow:2px_2px_0px_#FFFFFF,5px_4px_0px_rgba(0,0,0,0.15)] hover:text-blue-600"
        >
          ZeloCart
        </span>
      </NavLink>

      {/* 🔹 Center - Desktop Menu */}
      <ul className="hidden md:flex absolute left-2/3 -translate-x-1/2 items-center gap-8 font-medium">
        {["/", "/contact", "/about", "/signup"].map((path, i) => (
          <li key={i}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "hover:text-blue-600 transition"
              }
            >
              {path === "/" ? "Home" : path.replace("/", "")}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* 🔹 Right - Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl"
        >
          {open ? <HiX /> : <HiOutlineMenu />}
        </button>
      </div>

    </div>

  );
};

export default Header;
