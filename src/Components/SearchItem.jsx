import React from 'react';

const SearchItem = () => {
    return (
        <div>
        <h2>Search Item</h2>
      <input
        type="text ml-2"
        placeholder="Search Item "
        value={orderNumber}
        onChange={(e) => setOrderNumber(e.target.value)}
      />
      <button className="btn btn-secondary mr-2">Track</button>
        </div>
    )
}