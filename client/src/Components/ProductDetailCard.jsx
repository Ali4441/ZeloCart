import React from "react";
import Quantity from "./Quantity";

const ProductDetailCard = () => {

  return (
    <div className="w-full bg-zinc-100 rounded-md p-4 mt-4">

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">

        {/* PRODUCT IMAGE */}
        <div className="w-full lg:w-48 flex justify-center">
          {/* <img
            src={product?.image}
            alt={product.title}
            className="w-40 sm:w-48 object-contain"
          /> */}
          <img src="image/imgCamra.png" alt="image" />
        </div>

        {/* PRODUCT DETAILS */}
        <div className="flex-1">

          {/* Top Section */}
          <div className="flex flex-col lg:flex-row lg:justify-between gap-4">

            <div>
              <h2 className="font-medium text-base sm:text-lg">
                {/* {product.title} */}
                imgCamra
              </h2>

              <p className="text-sm text-zinc-500 mt-1">
                {/* Size: {product.size}, {product.color} */}
                Size:56,78
              </p>

              <p className="text-sm text-zinc-500 mt-1">
                {/* Seller: {product.seller} */}
                Seller
                <span className="ml-2 text-blue-600 font-medium">
                  ✓ Assured
                </span>
              </p>

              {/* PRICE */}
              <div className="flex flex-wrap items-center gap-3 mt-2">
                <span className="text-zinc-400 line-through">
                  {/* ₹{product.originalPrice}
                */}
                  890
                </span>
                <span className="text-lg sm:text-xl font-semibold">
                  {/* ₹{product.price} */}
                  780
                </span>
                <span className="text-green-600 font-medium">
                  {/* {product.discount}% Off */}
                  87 %of
                </span>
              </div>

              <p className="text-sm mt-1">
                {/* Or Pay ₹{product.price - 70} + <span className="font-medium">70</span> */}
              </p>
            </div>

            {/* DELIVERY */}
            <div className="text-sm text-zinc-700">
              {/* Delivery by <span className="font-medium">{product.deliveryDate}</span> */}
            </div>

          </div>

          {/* QUANTITY + ACTIONS */}
          <div className="flex flex-wrap items-center gap-3 mt-5">

            <Quantity />

            <button className="h-10 px-4 bg-zinc-200 rounded-sm font-medium text-xs hover:text-blue-600 transition">
              SAVE FOR LATER
            </button>

            <button className="h-10 px-4 bg-zinc-200 rounded-sm font-medium text-xs hover:bg-zinc-300 text-red-600 transition">
              REMOVE
            </button>

          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-zinc-200 mt-6"></div>

    </div>
  );
};

export default ProductDetailCard;
