import React from "react";

const NewArrivalSection = ({
  bigImage,
  womenImage,
  speakerImage,
  perfumeImage,
}) => {
  return (
    <section className="bg-gray-100 py-16 px-6 rounded-md cursor-pointer">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-red-500 font-medium text-sm">
            <div className="w-2 h-6 bg-red-500 rounded-sm"></div>
            Featured
          </div>
          <h2 className="text-3xl font-semibold mt-2">New Arrival</h2>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT BIG CARD */}
          <div className="lg:col-span-2 relative h-[550px] rounded-xl overflow-hidden group">
            <img
              src={bigImage}
              alt="PlayStation"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl font-semibold mb-2">
                PlayStation 5
              </h3>
              <p className="text-sm opacity-80 max-w-sm">
                Black and White version of the PS5 coming out on sale.
              </p>
              <button className="mt-4 underline">Shop Now</button>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6 h-[550px]">

            {/* Women Collection (Top Half) */}
            <div className="relative flex-1 rounded-xl overflow-hidden group">
              <img
                src={womenImage}
                alt="Women Collection"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/50"></div>

              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-lg font-semibold">
                  Women’s Collections
                </h3>
                <p className="text-sm opacity-80 max-w-xs">
                  Featured woman collections that give you another vibe.
                </p>
                <button className="mt-2 underline text-sm">
                  Shop Now
                </button>
              </div>
            </div>

            {/* Bottom Two Cards (Half Height) */}
            <div className="grid grid-cols-2 gap-6 flex-1">

              <div className="relative rounded-xl overflow-hidden group">
                <img
                  src={speakerImage}
                  alt="Speakers"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-md font-semibold">Speakers</h3>
                  <button className="text-sm underline">
                    Shop Now
                  </button>
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden group">
                <img
                  src={perfumeImage}
                  alt="Perfume"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-md font-semibold">Perfume</h3>
                  <button className="text-sm underline">
                    Shop Now
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default NewArrivalSection;
