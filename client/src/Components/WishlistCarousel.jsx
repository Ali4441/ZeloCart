import WishlistCarousel from "./WishlistCarousel";

const dummyProduct = [
  { id: 1, title: "IPS LCD Monitor", image: "./image/imgCamra.png", price: 400, oldPrice: 500, discount: 59, rating: 5, reviews: 99 },
  { id: 2, title: "RGB Keyboard", image: "./image/keyboard.png", price: 150, oldPrice: 200, discount: 25, rating: 4, reviews: 120 },
  { id: 3, title: "Gaming Laptop", image: "./image/laptop.png", price: 200, oldPrice: 500, discount: 79, rating: 5, reviews: 91 },
  { id: 4, title: "Gaming Remote", image: "./image/gamingRmote.png", price: 800, oldPrice: 700, discount: 200, rating: 5, reviews: 98 },
  { id: 5, title: "Headset", image: "./image/headset.png", price: 100, oldPrice: 150, discount: 33, rating: 4, reviews: 60 },
];

const WishlistSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-xl font-semibold mb-4">Wishlist ({dummyProduct.length})</h2>
      <WishlistCarousel products={dummyProduct} />
    </div>
  );
};

export default WishlistSection;
