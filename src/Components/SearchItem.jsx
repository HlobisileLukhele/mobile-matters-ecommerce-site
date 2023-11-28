import React from 'react';

const SearchItem = () => {
    return (
        <div className='container mt-5 mb-4'>
      <input
        type="text ml-2"
        placeholder="SearchItem "
        className='mr-2 ml-2'
      />
      <button className="btn btn-secondary ">Search</button>
        </div>
    )
}

export default SearchItem;