import { useState } from "react";

// const Cart = ({ image, title, price }) => {
const Cart = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    alert(`${quantity} x ${item.title} added to cart!`);
  };

  const increment = () => setQuantity((prev) => prev + 1);

  const decrement = () => setQuantity((prev) => prev > 1 ? (prev - 1) : 1);

  return (
    <div className="w-64 border border-gray-200 rounded-lg shadow-md p-4 bg-white text-center flex flex-col justify-between">
      {/* Image wrapper */}
      <div className="w-full h-48 mb-4 flex items-center justify-center bg-gray-100 rounded-md overflow-hidden p-4">
        <img
          src={item.image}
          alt={item.title}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h2>

      {/* Price */}
      <p className="text-xl font-bold text-gray-900 mb-4">${item.price}</p>

      {/* Quantity controls */}
      <div className="flex items-center justify-center mb-4">
        <button
          onClick={decrement}
          className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-700 rounded-l hover:bg-gray-300 transition"
        >
          −
        </button>
        <span className="w-12 text-center font-medium">{quantity}</span>
        <button
          onClick={increment}
          className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-700 rounded-r hover:bg-gray-300 transition"
        >
          +
        </button>
      </div>

      {/* Add to Cart button */}
      <button
        onClick={handleAddToCart}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Cart;
