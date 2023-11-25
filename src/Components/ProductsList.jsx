import React from "react";
import ProductsData from "./ProductsData.js";

export default  function ProductsList () {
    const Products = ProductsData;
    return (
       <div>
       {ProductsData.map((product) =>(
        <div key={product.id}>
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} />
        <span>Price: ${product.price}</span>
        </div>
       ))}
       </div>
    );  
}
