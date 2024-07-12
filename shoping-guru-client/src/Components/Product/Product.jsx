// src/components/Product.js

const Product = ({ product ,addToCart }) => {
    return (
        <div className="p-4 border rounded-lg shadow">
            <h2 className="text-xl font-semibold">{product?.name}</h2>
            <p>{product?.description}</p>
          <div className="flex justify-between items-center mt-2">
          <p className="text-lg font-bold text-yellow-400">${product?.price}</p>
            <button onClick={()=>addToCart(product)} className="bg-blue-500 text-white px-2 py-1 rounded">Add to Cart</button>
          </div>

        </div>
    );
};

export default Product;
