import React from 'react'
import { NavLink } from 'react-router-dom';
const AboutHero = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 m-5">

      {/* LEFT CONTENT */}
      <div className="max-w-2xl space-y-6">
        <p className="text-zinc-400">Welcome <span className="text-zinc-400 font-semibold">Ali</span> </p> {/*{user ? user.name : `to are website`} */}

        <h1 className="text-4xl md:text-5xl font-bold">Our Story</h1>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p className="text-zinc-800  font-medium ">Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported
            by wide range of tailored marketing, data and service solutions,
            Exclusive has 10,500 sallers and 300 brands and serves 3
            millioons customers across the region.
          </p>

          <p className="text-zinc-800 font-medium ">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>

        </div>

        <div className="w-fit flex gap-4 pt-4">
          <NavLink to="/contact">
            <button
              className="bg-zinc-300 hover:bg-zinc-200 px-6 py-3 rounded-lg font-semibold">
              Connect Now
            </button>
          </NavLink>

        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="mt-12 md:mt-0">
        <img
          src="/image/about.png"
          alt="Why Choose Us Illustration"
          className=" rounded-md"
        />
      </div>
    </div>
  )
}

export default AboutHero
