import React, { useState } from 'react';

const TrackOrder = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [orderStatus, setOrderStatus] = useState('');

  const trackOrder = () => {
    setTimeout(() => {
      // Replace these with actual data from your API response
      setOrderStatus('Shipped');
    }, 2000);
  };

  return (
    <div className="track-order-container">
      <h2 className="track-order mb-4 mt-4">Track Your Order</h2>
      <form className="form-imput">
      <input
        type="text ml-2"
        placeholder="   Enter Order Number"
        value={orderNumber}
        onChange={(e) => setOrderNumber(e.target.value)}
        className="Search-item"
      />
      <button onClick={trackOrder} className="btn btn-secondary ">Track</button>
      {orderStatus && <p className="mt-4 ">Your order status: {orderStatus}</p>}
      </form>
    </div>
  );
};

export default TrackOrder;
