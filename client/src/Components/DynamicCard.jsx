import { useRef, useState } from "react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import WishlistCard from "./WishlistCard";

const DynamicCard = ({ products }) => {
  const scrollRef = useRef(null);
  const [viewAll, setViewAll] = useState(false);

  // Scroll Left
  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  // Scroll Right
  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  // Decide kitne products show honge
  const visibleProducts = viewAll ? products : products.slice(0, 6);

  return (
    <div className="relative w-full">

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Products</h2>

        <button
          onClick={() => setViewAll(!viewAll)}
          className="text-blue-600 text-sm font-medium hover:underline"
        >
          {viewAll ? "Show Less" : "View All"}
        </button>
      </div>

      {/* Scroll Buttons only when NOT ViewAll */}
      {!viewAll && (
        <>
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
          >
            <IoArrowBack />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
          >
            <IoArrowForward />
          </button>
        </>
      )}

      {/* Card Container */}
      <div
        ref={scrollRef}
        className={
          viewAll
            ? "flex flex-wrap gap-4"
            : "flex gap-4 overflow-x-auto scroll-smooth"
        }
      >
        {visibleProducts.map((product) => (
          <WishlistCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default DynamicCard;
