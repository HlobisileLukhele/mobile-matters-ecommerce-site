import React from "react";
import ProductsData from "./ProductsData";

export default  function ProductsList () {
    const Products = ProductsData;
    return (
        <div className="container-fluid mb-6 mt-5 items-center">
        <div className="row">
          {ProductsData.map((product) => (
            <div key={product.categoryId} className="col-6 col-lg-3 col-sm-6 col-md-2 mb-4">
              <div className="card product-card">
                <img src={product.image} alt={product.name} className="image-fluid card-img-top max-h-10 max-w-sm  sm:max-sm: object-cover" />
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
