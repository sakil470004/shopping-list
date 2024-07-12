// src/components/ProductList.js
import { useEffect, useState } from "react";
import axios from "axios";
import AddProduct from "../AddProduct/AddProduct";
import Product from "../Product/Product";
import toast from "react-hot-toast";

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  // for handle api call
  useEffect(() => {
    axios
      .get("http://52.63.104.102:8000/")
      .then((res) => {
        const data = res.data;
        // console.log(data);
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // for search
  useEffect(() => {
    const newProduct = products.filter((product) => {
      if (search === "") {
        return product;
      } else if (product.name.toLowerCase().includes(search.toLowerCase())) {
        return product;
      }
    });
    setSearchResult(newProduct);
  }, [search]);

  const addProduct = (product) => {
    setProducts([...products, product]);
    toast.success("Product added successfully");
  };

  return (
    <div className="container mx-auto p-4 grid grid-cols-3 gap-5">
      <div className="col-span-2">
        <div>
          <h1 className="text-2xl font-bold mb-4">Product List</h1>
          {/* search input */}
          <div className="relative shadow-md rounded mb-4 my-4 px-4">
            <input
              type="text"
              placeholder="Search product"
              className="border p-2 mb-2 w-full"
              onChange={(e) => setSearch(e.target.value)}
            />
            {/* cross button for search clear*/}
            <button
              onClick={() => setSearch("")}
              className="bg-red-500 text-white px-2  rounded absolute right-4 top-0 mt-2 mr-2"
            >
              Clear
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* if search==="" show ganeral product if not show search product */}
          {search===""?  products.map((product, index) => (
            <Product key={index} product={product} addToCart={addToCart} />
          )):
          searchResult.map((product, index) => (
            <Product key={index} product={product} addToCart={addToCart} />
          ))
          }
        </div>
      </div>
      <div className="py-20 h-full w-full bg-gray-50 px-4 rounded-lg">
        <AddProduct addProduct={addProduct} />
      </div>
    </div>
  );
};

export default ProductList;
