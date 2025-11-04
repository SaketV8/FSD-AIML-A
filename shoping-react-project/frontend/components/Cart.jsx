// const Cart = ({ image, title, price }) => {

//   const handleAddToCart = () => {
//     alert(`${title} added to cart!`)
//   }

//   return (
//     <div className="w-64 border border-gray-200 rounded-lg shadow-md p-4 bg-white text-center flex flex-col justify-between">
//       {/* Image wrapper with consistent height */}
//       <div className="w-full h-48 mb-4 flex items-center justify-center bg-gray-100 rounded-md overflow-hidden">
//         <img
//           src={image}
//           alt={title}
//           className="max-h-full max-w-full object-contain"
//         />
//       </div>

//       {/* Title */}
//       <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 h-12">
//         {title}
//       </h2>

//       {/* Price */}
//       <p className="text-xl font-bold text-gray-900 mb-4">${price}</p>

//       {/* Button at bottom */}
//       <button
//         onClick={handleAddToCart}
//         className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
//       >
//         Add to Cart
//       </button>
//     </div>

//   )
// }

// export default Cart


const Cart = ({ image, title, price }) => {
  const handleAddToCart = () => {
    alert(`${title} added to cart!`);
  };

  return (
    <div className="w-64 border border-gray-200 rounded-lg shadow-md p-4 bg-white text-center flex flex-col justify-between">
      {/* Image wrapper with consistent height and internal padding */}
      <div className="w-full h-48 mb-4 flex items-center justify-center bg-gray-100 rounded-md overflow-hidden p-4">
        <img
          src={image}
          alt={title}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Title (allow full display without clipping) */}
      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        {title}
      </h2>

      {/* Price */}
      <p className="text-xl font-bold text-gray-900 mb-4">${price}</p>

      {/* Button at bottom */}
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
