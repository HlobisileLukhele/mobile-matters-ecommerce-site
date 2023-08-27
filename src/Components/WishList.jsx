import React, { useState } from 'react';

const Wishlist = () => {
  
  const [wishlist, setWishlist] = useState([]);

  const [cartItems, setCartItems] = useState([
    { id: 1, name: ' 2nd gen Airpods' },
    { id: 2, name: 'Airpods Pro'},
      // Add more products here
  ]);


  const addToWishlist = (cartItems) => {
    setWishlist([...wishlist, cartItems]);
  };

  return (
    <div className="wishlist-container">
      <h1 className="mb4 mt-4">Wishlist</h1>
      <div className="product-list">
        <h2 className="mb4 mt-4">Your Products</h2>
        <ul>
          {cartItems.map((cartItems) => (
            <li key={cartItems.id}>
              {cartItems.name}
              <button onClick={() => addToWishlist(cartItems)} className="mb4 mt-4">Add to Wishlist</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="wishlist">
        <h2 className="mb4 mt-4">Your Wishlist</h2>
        <ul>
          {wishlist.map((cartItems) => (
            <li key={cartItems.id}>{cartItems.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Wishlist;
