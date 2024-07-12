// src/components/Cart.js

const Cart = ({ cart ,handleDelete}) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-4">
          {cart.map((product, index) => (
            <div key={index} className="p-4 border rounded-lg shadow mb-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p>{product.description}</p>
              <div className="mt-2 flex justify-between items-center">
                <p className="text-lg font-bold">${product.price}</p>
                <button onClick={()=>handleDelete(product)} className="bg-red-500 text-white px-2 py-1 rounded">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
