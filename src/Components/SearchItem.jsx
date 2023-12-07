import React from 'react';

const SearchItem = () => {
    return (
        <div className='container mt-5 mb-4'>
              <h2 className="track-order mb-4 mt-4">Search Item</h2>
        <form className="items-centered text-center form-input">
        <input
        type="text ml-2"
        placeholder="   enter item here"
        className=' Search-item mr-4 ml-4 mt-4'
      />
      <button className="btn btn-secondary  search-btn">Search</button>
        </form>
     
        </div>
    )
}

export default SearchItem;