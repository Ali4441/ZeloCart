import { Heart, Eye } from "lucide-react";
import Button2 from "./Button2";



const ProductCard = ({ product }) => {


  return (
    <>
      <div className="group min-w-60 bg-white rounded-lg p-4 shadow-sm border border-zinc-200 hover:shadow-md transition">

        {/* Image + Button Wrapper */}
        <div className="relative bg-zinc-100 rounded-tr-md rounded-l-md overflow-hidden h-44">

          {/* Discount */}
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded z-10">
            -{product.discount}%
          </span>

          {/* Icons */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
            <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow transition-all duration-300 hover:bg-red-50 hover:scale-110">
              <Heart size={16} className="text-zinc-500 hover:text-red-500 transition-colors" />
            </button>

            <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-zinc-400 hover:text-indigo-600 cursor-pointer shadow">
              <Eye size={16} />
            </button>
          </div>

          {/* Image */}
          <div className="h-full flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="
          h-32 object-contain
          transition-all duration-500 ease-out
          group-hover:scale-90
          group-hover:-translate-y-6
        "
            />
          </div>

          {/* Hover Button (ABSOLUTE OVERLAY) */}
          <div
            className="
        absolute bottom-0 left-0 w-full
        translate-y-full opacity-0
        group-hover:translate-y-0
        group-hover:opacity-100
        transition-all duration-500 ease-out
      "
          >
            <Button2 />
          </div>

        </div>

        {/* Title */}
        <h3 className="mt-4 text-sm font-medium text-zinc-900 line-clamp-2">
          {product.title}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-red-500 font-semibold">${product.price}</span>
          <span className="text-zinc-400 line-through text-sm">${product.oldPrice}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2">
          <div className="flex text-yellow-400 text-sm">
            {"★".repeat(product.rating)}
          </div>
          <span className="text-xs text-zinc-500">
            ({product.reviews})
          </span>
        </div>

      </div>


    </>

  );
};

export default ProductCard;
