import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: ' 2nd gen Airpods', price: 10.99 },
    { id: 2, name: 'Airpods Pro', price: 19.99 },
    // Add more products here
  ]);
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };



  return (
    <div className="cart-container">
      <h1 className="cart mb-4 mt-4">Your Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p>Total: ${calculateTotal().toFixed(2)}</p>
    </div>
  );
};

export default Cart;
