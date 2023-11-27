import React from "react";
import ProductsData from "./ProductsData.js";

export default  function ProductsList () {
    const Products = ProductsData;
    return (
        <div className="container mb-6 mt-5 items-center">
        <div className="row">
          {ProductsData.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-6 col-sm-6 mb-4">
              <div className="card bg-gray-500">
                <img src={product.image} alt={product.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Price: R{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );  
}
