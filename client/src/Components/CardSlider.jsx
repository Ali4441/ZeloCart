import { useRef, useEffect, useState } from "react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import ProductCard from "./ProductCard"; // import your ProductCard component

const Cards = [
  {
    id: 1,
    title: "IPS LCD Gaming Monitor",
    image: "./image/imgCamra.png",
    price: 400,
    oldPrice: 500,
    discount: 59,
    rating: 5,
    reviews: 99,
  },
  {
    id: 2,
    title: "RGB Mechanical Keyboard",
    image: "./image/keyboard.png",
    price: 150,
    oldPrice: 200,
    discount: 25,
    rating: 4,
    reviews: 120,
  },
  {
    id: 3,
    title: "IPS LCD Gaming Monitor",
    image: "./image/laptop.png",
    price: 200,
    oldPrice: 500,
    discount: 79,
    rating: 5,
    reviews: 91,
  },
  {
    id: 4,
    title: "IPS LCD Gaming Monitor",
    image: "./image/gamingRmote.png",
    price: 800,
    oldPrice: 700,
    discount: 200,
    rating: 5,
    reviews: 98,
  },

  {
    id: 1,
    title: "IPS LCD Gaming Monitor",
    image: "./image/imgCamra.png",
    price: 400,
    oldPrice: 500,
    discount: 59,
    rating: 5,
    reviews: 99,
  },
  {
    id: 2,
    title: "RGB Mechanical Keyboard",
    image: "./image/keyboard.png",
    price: 150,
    oldPrice: 200,
    discount: 25,
    rating: 4,
    reviews: 120,
  },
  {
    id: 3,
    title: "IPS LCD Gaming Monitor",
    image: "./image/laptop.png",
    price: 200,
    oldPrice: 500,
    discount: 79,
    rating: 5,
    reviews: 91,
  },
  {
    id: 4,
    title: "IPS LCD Gaming Monitor",
    image: "./image/gamingRmote.png",
    price: 800,
    oldPrice: 700,
    discount: 200,
    rating: 5,
    reviews: 98,
  },

];
const CardSlider = () => {
  const scrollRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  // Calculate dynamic card width for 4.5 cards visible
  useEffect(() => {
    const updateWidth = () => {
      if (!scrollRef.current) return;

      const containerWidth = scrollRef.current.offsetWidth;
      const screenWidth = window.innerWidth;

      let cardsPerView = 4; // default large

      if (screenWidth < 640) {
        cardsPerView = 1;       // mobile
      } else if (screenWidth < 768) {
        cardsPerView = 2;       // small
      } else if (screenWidth < 1024) {
        cardsPerView = 4;       // medium
      } else {
        cardsPerView = 4;       // large
      }

      setCardWidth(containerWidth / cardsPerView);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);


  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -cardWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative max-w-6xl mx-auto px-4 my-10">

      {/* Arrow Buttons */}
      <div className="absolute -top-14 right-4 flex gap-3">
        <button
          onClick={scrollLeft}
          className="w-9 h-9 rounded-full border border-zinc-200 
      bg-white shadow-sm text-zinc-700 
      flex items-center justify-center 
      hover:bg-blue-500 hover:text-white 
      transition duration-300"
        >
          <IoArrowBack />
        </button>

        <button
          onClick={scrollRight}
          className="w-9 h-9 rounded-full border border-zinc-200 
      bg-white shadow-sm text-zinc-700 
      flex items-center justify-center 
      hover:bg-blue-500 hover:text-white 
      transition duration-300"
        >
          <IoArrowForward />
        </button>
      </div>

      {/* Cards Container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {Cards.map((item, index) => (
          <div
            key={index}
            className="
        shrink-0
        w-full
        sm:w-1/2
        md:w-1/3
        lg:w-1/4
        "
          >
            <ProductCard product={item} />
          </div>
        ))}
      </div>
    </div>

  );
};

export default CardSlider;
