import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";

const category = [
  {
    name: "Womans Fashion",
    sub: ["Dresses", "Shoes", "Bags"],
  },
  {
    name: "Mens Fashion",
    sub: ["Shirts", "Watches", "Shoes"],
  },
  {
    name: "Electronics",
    sub: ["Mobiles", "Laptops", "Cameras"],
  },
  {
    name: "Home & Lifestyle",
    sub: ["Furniture", "Decor"],
  },
  {
    name: "Medicine",
    sub: [],
  },
  {
    name: "Sports & Outdoor",
    sub: ["Cricket", "Gym"],
  },
  {
    name: "Babys & Toys",
    sub: ["Toys", "Clothes"],
  },
  {
    name: "Groceries & Pets",
    sub: ["Groceries", "Pet Food"],
  },
  {
    name: "Health & Beauty",
    sub: ["Skincare", "Makeup"],
  },
];


const CategoryMenu = () => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="max-w-6xl mx-auto  py-5 border-r border-zinc-300">
      <div className="relative w-60">

        <ul className="space-y-1 text-sm text-gray-800">
          {category.map((item, index) => (
            <li key={index} className="relative">

              {/* Parent Category */}
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center px-3 py-2
                           hover:bg-gray-100 rounded-md font-medium"
              >
                {item.name}

                {item.sub.length > 0 && (
                  <IoIosArrowForward className="text-xs" />
                )}
              </button>

              {/* Sub Category Overlay Card */}
              {openIndex === index && item.sub.length > 0 && (
                <div
                  className="absolute top-0 left-full ml-3 w-64
                             bg-zinc-200/95 border border-zinc-300 rounded-lg shadow-xl p-4 z-50"
                >
                  <h4 className="font-semibold mb-3 text-blue-400">
                    {item.name}
                  </h4>

                  <div className="grid grid-cols-1 gap-2">
                    {item.sub.map((sub, i) => (
                      <div
                        key={i}
                        className="px-3 py-2 rounded-md border border-zinc-300 
                                   hover:bg-gray-100 cursor-pointer transition"
                      >
                        {sub}
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default CategoryMenu;
