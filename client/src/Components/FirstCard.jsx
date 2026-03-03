import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import WishlistCard from "./WishlistCard";
import RibbonTag from "./RibbonTag";
import Button from "./Button";



const FirstCard = ({ TodayTag }) => {

  const navigate = useNavigate()
  const scrollRef = useRef(null);
  const [viewAll, setViewAll] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:1000/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Calculate dynamic card width (4.5 cards visible)
  useEffect(() => {
    const updateWidth = () => {
      if (!scrollRef.current || viewAll) return;

      const containerWidth = scrollRef.current.offsetWidth;
      setCardWidth(containerWidth / 4.5);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, [viewAll]);

  const scrollLeft = () => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: -cardWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: cardWidth,
      behavior: "smooth",
    });
  };
  const visibleProducts = viewAll
    ? products
    : products.slice(0, 6);




  return (
    <>
      <div className="relative max-w-6xl mx-auto px-4 space-y-8 md:space-y-8 my-10">



        {/* Header */}
        <div className="flex justify-between items-center mb-4">

          {/* Left Side */}
          <div className="flex flex-col gap-2">
            <RibbonTag title="Our Products" textColor="text-red-400" />
            <span className="text-2xl font-bold">
              {TodayTag}
            </span>
          </div>

          {/* Right Side Scroll Buttons */}
          {!viewAll && (
            <div className="flex gap-3 -top-1 right-0">
              <button
                onClick={scrollLeft}
                className="w-9 h-9 rounded-full border border-zinc-200 bg-white shadow-sm text-zinc-700 flex items-center justify-center hover:bg-blue-500 hover:text-white transition duration-300"
              >
                <IoArrowBack />
              </button>

              <button
                onClick={scrollRight}
                className="w-9 h-9 rounded-full border border-zinc-200 bg-white shadow-sm text-zinc-700  flex items-center justify-center hover:bg-blue-500 hover:text-white transition duration-300"
              >
                <IoArrowForward />
              </button>
            </div>
          )}

        </div>




        {/* Card Container */}
        <div

          ref={scrollRef}
          className={
            viewAll
              ? "grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 "
              : "flex gap-6 overflow-x-auto scroll-smooth no-scrollbar "
          }
        >
          {visibleProducts.map((product) => (
            <div
              key={product._id}
              onClick={() => navigate(`/ProductDetailPage/${product._id}`)}
              className={
                !viewAll
                  ? "shrink-0 min-w-full sm:min-w-[50%] md:min-w-[25%]"
                  : ""
              }
            >
              <WishlistCard product={product} />
            </div>
          ))}
        </div>




      </div>
      <div className=" max-w-full mx-auto px-4 space-y-8 md:space-y-8 mt-10 flex items-center justify-center flex-col">
        <Button
          onClick={() => setViewAll(!viewAll)}
          title={viewAll ? "Show Less" : "View All"}
          width="w-60 h-14 bg-[#e20000]"
        />
      </div>

    </>
  )
}

export default FirstCard
