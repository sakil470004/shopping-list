// src/components/ProductList.js
import { useEffect, useState } from "react";
import AddProduct from "../AddProduct/AddProduct";
import Product from "../Product/Product";
import toast from "react-hot-toast";

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("shopping.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const addProduct = (product) => {
    setProducts([...products, product]);
    toast.success("Product added successfully");
  };

  return (
    <div className="container mx-auto p-4 grid grid-cols-3 gap-5">
      <div className="col-span-2">
        <h1 className="text-2xl font-bold mb-4">Product List</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((product, index) => (
            <Product key={index} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
      <div className="py-20 h-full w-full bg-gray-50 px-4 rounded-lg">
        <AddProduct addProduct={addProduct} />
      </div>
    </div>
  );
};

export default ProductList;
