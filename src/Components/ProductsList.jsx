import React from "react";
import ProductsData from "./ProductsData.js";

export default  function ProductsList () {
    const Products = ProductsData;
    return (
        <div className="container mb-6 mt-5 items-center">
        <div className="row">
          {ProductsData.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-6 col-sm-2 mb-4">
              <div className="card product-card">
                <img src={product.image} alt={product.name} className="card-img-top max-h-10 max-w-sm" />
                <div className="card-body">
                  <p className="card-title">{product.name}</p>
                  <p className="card-text text-black">Price: R{product.price}</p>
                  <button className="btn btn-secondary p-1 items-center">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );  
}
