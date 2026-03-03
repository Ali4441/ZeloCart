import axios from "axios";
import { useEffect, useState } from "react";

function Sample() {   // ✅ Capital S
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

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="border p-4 rounded shadow">
            <img
              src={product.image}
              alt={product.title}
              className="h-40 w-full object-cover mb-3"
            />
            <h3 className="font-semibold">{product.title}</h3>
            <p className="text-gray-600">₹ {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sample;