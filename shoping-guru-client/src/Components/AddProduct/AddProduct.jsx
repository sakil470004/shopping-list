// src/components/AddProduct.js
import React, { useState } from 'react';

const AddProduct = ({ addProduct }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/products/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, description, price }),
        })
            .then(response => response.json())
            .then(data => {
                addProduct(data);
                setName('');
                setDescription('');
                setPrice('');
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
            <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-5">Add Product</button>
        </form>
    );
};

export default AddProduct;
