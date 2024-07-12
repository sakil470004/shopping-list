// src/components/AddProduct.js
import React, { useState } from "react";
import axios from "axios";

const AddProduct = ({ addProduct }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://52.63.104.102:8000/", {
        name: name,
        description: description,
        price: price,
      })
      .then((res) => {
        // console.log(res.data);
        addProduct(res.data);
        setName("");
        setDescription("");
        setPrice("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 ">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
        className="border p-2 mb-2 w-full "
        required
      />
      <textarea
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="border p-2 mb-2 w-full"
        required
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        className="border p-2 mb-2 w-full"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-5">
        Add Product
      </button>
    </form>
  );
};

export default AddProduct;
