import { useState } from "react";
import WishlistCard from "../Components/WishlistCard";
import RibbonTag from "../Components/RibbonTag";
import Footer from '../Components/Footer'
import ScrollToTop from "../Components/ScrollToTop";
const products = [
  {
    id: 1,
    title: "Gucci duffle bag",
    image: "/image/bag.png",
    price: 960,
    oldPrice: 1160,
    discount: 35,
    rating: 5,
    reviews: 65,
  },
  {
    id: 2,
    title: "RGB liquid CPU Cooler",
    image: "/image/chair.png",
    price: 1960,
    oldPrice: 1160,
    discount: 35,
    rating: 5,
    reviews: 65,
  },
  {
    id: 3,
    title: "GP11 Shooter USB Gamepad",
    image: "/image/gamingRmote.png",
    price: 550,
    oldPrice: 1160,
    discount: 35,
    rating: 5,
    reviews: 65,
  },
  {
    id: 4,
    title: "Quilted Satin Jacket",
    image: "/image/redJaket.png",
    price: 750,
    oldPrice: 1160,
    discount: 35,
    rating: 5,
    reviews: 65,
  },
  {
    id: 5,
    title: "ASUS FHD Gaming Laptop",
    image: "/image/laptop.png",
    price: 960,
    oldPrice: 1160,
    discount: 15,
    rating: 5,
    reviews: 65,
  },
  {
    id: 6,
    title: "IPS LCD Gaming Monitor",
    image: "/image/JBL_BOOMBOX.png",
    price: 1160,
    discount: 35,
    rating: 5,
    reviews: 65,
  },
  {
    id: 7,
    title: "HAVIT HV-G92 Gamepad",
    image: "/image/playstation_large.png",
    price: 560,
    discount: 35,
    rating: 5,
    reviews: 65,
  },
  {
    id: 8,
    title: "AK-900 Wired Keyboard",
    image: "/image/keyboard.png",
    price: 200,
    discount: 35,
    rating: 5,
    reviews: 65,
  },
  {
    id: 9,
    title: "IPS LCD Gaming Monitor",
    image: "/image/JBL_BOOMBOX.png",
    price: 1160,
    discount: 35,
    rating: 5,
    reviews: 65,
  },
  {
    id: 10,
    title: "HAVIT HV-G92 Gamepad",
    image: "/image/playstation_large.png",
    price: 560,
    rating: 5,
    discount: 35,
    reviews: 65,
  },
  {
    id: 11,
    title: "AK-900 Wired Keyboard",
    image: "/image/keyboard.png",
    price: 200,
    discount: 35,
    rating: 5,
    reviews: 65,
  },
];


const Home = () => {
  const [wishlist, setWishlist] = useState([1, 2, 3, 4,]); // demo
  const [showAll, setShowAll] = useState(false);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <>
      <ScrollToTop />
      <div className=" max-w-6xl mx-auto px-4 space-y-8 md:space-y-8 my-10">
        {/* 🔹 Wishlist Section */}
        <h2 className="text-xl font-semibold mb-4">Wishlist ({wishlist.length})</h2>

        <div className="grid grid-cols-4 gap-6 mb-15">
          {products
            .filter((p) => wishlist.includes(p.id))
            .map((product) => (
              <WishlistCard
                key={product.id}
                product={product}
                isWishlist
                toggleWishlist={toggleWishlist}
              />
            ))}
        </div>

        {/* 🔹 Just For You */}
        <div className="flex justify-between items-center my-5">
          <RibbonTag title="Just For You" />
          <button onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "See All"}
          </button>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {products
            .filter((p) => !wishlist.includes(p.id))
            .slice(0, showAll ? products.length : 4)
            .map((product) => (
              <WishlistCard
                key={product.id}
                product={product}
                toggleWishlist={toggleWishlist}
              />
            ))}
        </div>
      </div>

    </>
  );
};

export default Home;
