// src/App.js

import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import ProductList from "./Components/ProductList/ProductList";
import Navbar from "./Components/Navbar/Navbar";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart([...cart, product]);
    toast.success("Product added to cart");
  };
  const handleDelete = (product) => {
    const newCart = cart.filter((item) => item !== product);
    setCart(newCart);
    toast.success("Product removed from cart");
  };
  return (
    <div className="App">
      <Navbar />
      <ProductList addToCart={addToCart} />
      <Cart cart={cart} handleDelete={handleDelete} />
      {/* for toast */}
      <Toaster
  position="top-right"
  reverseOrder={false}
/>
    </div>
  );
}

export default App;
