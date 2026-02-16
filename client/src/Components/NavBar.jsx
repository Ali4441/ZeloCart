import React from 'react'
import TopHeader from './TopHeader'
import { FiSearch } from "react-icons/fi";
import SearchBar from './SearchBar';
import Header from './Header';
const NavBar = () => {
  return (
    <>
      <TopHeader />

      <nav className="w-full h-20 bg-white sticky top-0 z-50  items-center shadow-md">



        {/* Top Row */}
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Header />
          <SearchBar />
        </div>

        {/*Mobile Search Bar  */}
        <div className="md:hidden px-4 pb-3">
          <div className="flex items-center bg-zinc-100 px-3 rounded-md">
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-10 bg-transparent outline-none"
            />
            <FiSearch />
          </div>
        </div>

      </nav>


    </>
  )
}


export default NavBar
