import React from 'react'
import FourStar from "../assets/icone/FourStar.svg";
import deliveryIcon from "../assets/icone/icon-delivery.svg";
import ReturnIcon from "../assets/icone/Icon-return.svg";
import { useState } from "react";
import { Heart, Scroll } from "lucide-react";
import { useNavigate } from "react-router-dom";
import RibbonTag from '../Components/RibbonTag';
import CardSlider from '../Components/CardSlider';
import ScrollToTop from '../Components/ScrollToTop';



const colors = [
  { id: 1, value: "bg-blue-200" },
  { id: 2, value: "bg-red-400" },
];


const sizes = ["XS", "S", "M", "L", "XL"];
const imgGRF = ["./image/mainIMG.png", "./image/imgGR2.png", "./image/imgGR3.png", "./image/imgGR4.png"]
const ProductDetailPage = () => {

  const navigate = useNavigate();
  const [rotate, setRotate] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState("M");
  const [qty, setQty] = useState(2);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <ScrollToTop />
      {/* Hero Panel */}
      <div className="min-h-screen flex flex-col items-center gap-3 py-24  px-4">
        <div className=" max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">

          {/* LEFT : IMAGE GALLERY */}
          <div className="flex gap-6">

            {/* Thumbnails */}
            <div className="flex flex-col gap-4">
              {imgGRF.map((item, index) => (
                <div
                  onClick={() => setActiveIndex(index)}
                  key={index}
                  className="w-24 h-24 bg-zinc-200 rounded-lg flex items-center justify-center border cursor-pointer hover:ring-2 hover:ring-zinc-300 transition"
                >
                  <img
                    src={item}
                    alt={`thumb-${index}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 bg-zinc-200 rounded-xl flex items-center justify-center p-6 shadow-sm">
              <img
                src={imgGRF[activeIndex]}
                alt="moduleName"
                className="w-full max-w-md object-contain"
              />
            </div>
          </div>

          {/* RIGHT : PRODUCT DETAILS */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-6">

            {/* Product Info */}
            <div className="border border-zinc-300 rounded-lg p-4 flex flex-col gap-4">
              <p className="font-semibold text-xl">Havic HV G-92 Gamepad</p>

              <div className="flex items-center gap-3 text-sm">
                <img src={FourStar} alt="FourStar" />
                <span className="text-zinc-600">(150 Reviews)</span>
                <div className="w-px h-4 bg-zinc-400"></div>
                <span className="text-green-600 font-medium">In Stock</span>
              </div>

              <p className="text-2xl font-semibold">$192.00</p>

              <p className="text-zinc-600 text-sm leading-relaxed">
                PlayStation 5 Controller Skin High quality vinyl with air
                channel adhesive for easy bubble free install & mess
                free removal pressure sensitive.
              </p>
            </div>

            {/* Colors */}
            <div className="flex items-center gap-4">
              <span className="text-lg font-medium">Colours:</span>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color)}
                    className={`w-6 h-6 rounded-full cursor-pointer ${color.value}
              ${selectedColor.id === color.id ? "ring-2 ring-black" : ""}`}
                  />
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-lg font-medium">Size:</span>
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-md text-sm cursor-pointer
            ${selectedSize === size
                      ? "bg-red-600 text-white border-red-600"
                      : "border-gray-400"}`}
                >
                  {size}
                </button>
              ))}
            </div>

            {/* Quantity + Buy */}
            <div className="flex items-center gap-4">
              <div className="flex border border-zinc-500 rounded-md overflow-hidden">
                <button
                  onClick={() => qty > 1 && setQty(qty - 1)}
                  className="px-4 py-2 text-xl"
                >
                  −
                </button>
                <span className="px-6 py-2 font-medium">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="px-4 py-2 bg-red-600 text-white text-xl"
                >
                  +
                </button>
              </div>

              <button className="flex-1 bg-red-600 text-white p-3 rounded-md font-medium hover:bg-red-700 transition">
                Buy Now
              </button>

              <button className="border border-zinc-500 p-3 rounded-md">
                <Heart className="w-5 h-5" />
              </button>
            </div>

            {/* Delivery & Return */}
            <div className="border border-zinc-300 rounded-lg overflow-hidden">
              <div className="flex items-start gap-4 p-4">
                <img src={deliveryIcon} alt="deliveryIcon" />
                <div>
                  <p className="font-medium">Free Delivery</p>
                  <p className="text-sm underline text-zinc-600">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>

              <div className="h-px bg-zinc-300" />

              <div className="flex items-start gap-4 p-4">
                <img
                  src={ReturnIcon}
                  alt="return"
                  onClick={() => {
                    setRotate((p) => !p);
                    setTimeout(() => navigate("/return"), 300);
                  }}
                  className={`cursor-pointer transition-transform duration-300 ${rotate ? "rotate-180" : ""
                    }`}
                />
                <div>
                  <p className="font-medium">Return Delivery</p>
                  <p className="text-sm underline text-zinc-600">
                    Free 30 Days Delivery Returns. Details
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="w-full max-w-6xl  h-auto flex items-center justify-start">
          <RibbonTag title="Realated Items" />
        </div>


        <CardSlider />

      </div>

    </>

  )
}

export default ProductDetailPage
