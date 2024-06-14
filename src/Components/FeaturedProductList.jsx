import React from "react";
import FeaturedProductsData from "./FeaturedproductsData";
import product  from /images/products;


export default function FeatureProductsList() {
  const Products = FeaturedProductsData;

  return (
    <div className="container-fluid mb-6 mt-5 items-center">
    <h5 className="mb-4 mt-3 flex "> Best Seller Products</h5>
      <div className="row">
        {Products.map((product) => (
          <div key={product.id} className="col-6 col-sm-6 col-sm-6 col-md-2 d-flex mb-4">
            <div className="card product-card bg-gray-400">
              <img
                src={product.image}
                alt={product.name}
                className="image-fluid card-img-top max-h-10 max-w-sm sm:max-sm: object-cover"
              />
              <div className="card-body">
                <p className="card-title">{product.name}</p>
                <p className="card-text text-black">Price: R{product.price}</p>
                <button className="btn btn-secondary">Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
