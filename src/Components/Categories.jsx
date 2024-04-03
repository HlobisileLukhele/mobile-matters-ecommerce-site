import React from 'react';
import { Link } from 'react-router-dom';


const Categories = () => {
    return (
<div className="container mt-4 mb-4">
<h2 className="categories text-center mb-4 mt-4 font-serif">CATEGORIES</h2>
<div class="row mt-4">
  <div class="col-6 col-sm-6 col-md-6 mt-4 mb-4">
  <div class="card-deck">
  <div class="card">
  <Link to="/Accessories"></Link>
    <img class="card-img-top" src="images/Products/Accessories-Banner.png" alt="Card image cap" /> 
  </div>
  </div>
  </div>
  <div class="col-6 col-sm-6 col-md-6 mt-4 mb-4">
  <div class="card-deck">
  <div class="card">
  <Link to="/Iphones"></Link>
    <img class="card-img-top" src="images/Products/iphones-banner.png" alt="Card image cap" />
  </div>
  </div>
  </div>
  <div class="col-6 col-sm-6 col-md-6">
  <div class="card-deck">
  <div class="card">
  <Link to="/Andriods"></Link>
    <img class="card-img-top" src="images/Products/Android-Banner.png" alt="Card image cap" />
  </div>
  </div>
  </div>
  <div class="col-6 col-sm-6 col-md-6">
  <div class="card-deck">
  <div class="card">
  <Link to="/Watches"></Link>
    <img class="card-img-top" src="images/Products/Watches-Banner.png" alt="Card image cap" />
   
  </div>
  </div>
  </div>
</div> 
    </div>
    );
} 

export default Categories;