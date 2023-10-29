import React from "react";
import ProductsData from "./ProductsData";


function ProductsList () {
    
    return (
        <div>
            {data.products.map(product => (
                <div key={product.id}>
                <h6>{product.name}</h6>
                <img src={product.image} alt ={product.name} />
                <p>{product.description}</p>
                <p>Price : ${product.price}</p>    
                </div>
            ))}
        </div>
    );
}

export default ProductsList;
