import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { HiHome, HiUser, HiPhone, HiUserAdd, HiSearch } from "react-icons/hi";
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
      <div className="md:hidden z-30 ">
        <button
          onClick={() => setOpen(!open)}
          className="text-3xl text-[#0c1b2a] cursor-pointer"
        >
          {open ? <HiX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* 🔹 Mobile Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-10 md:hidden"
        ></div>
      )}


      {/* 🔹 Mobile Slide Menu */}
      <div
        className={`fixed top-0 ${open ? "right-0" : "-right-64"
          } w-64 h-screen bg-zinc-200/50 backdrop-blur-md shadow-lg z-20 transition-all duration-500 md:hidden pt-3`}
      >
        <div className="flex flex-col mt-20 px-6">

          {/* 🔍 Search Bar */}
          <div className="relative mb-8">
            <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-lg" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white/70 
        focus:outline-none focus:ring-2 focus:ring-blue-400
        transition-all duration-300 text-sm"
            />
          </div>

          {/* 🔹 Menu Links */}
          <ul className="flex flex-col gap-2 text-[#0c1b2a] font-medium">
            {[
              { path: "/", name: "Home", icon: <HiHome /> },
              { path: "/contact", name: "Contact", icon: <HiPhone /> },
              { path: "/about", name: "About", icon: <HiUser /> },
              { path: "/signup", name: "Signup", icon: <HiUserAdd /> },
            ].map((item, i) => (
              <li key={i}>
                <NavLink
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300
              ${isActive
                      ? "bg-blue-100 text-blue-600 font-semibold"
                      : "hover:bg-zinc-100 hover:text-blue-600"
                    }`
                  }
                >
                  <span className="text-xl">{item.icon}</span>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

        </div>
      </div>

    </div>

  );
};

export default Header;

