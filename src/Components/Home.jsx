import React from "react";
import Footer from './Footer'
import FeaturedProductsList from './FeaturedProductList'

const Home = () => (
  <div className="Container-fluid mb-4">
  <div>
    <h1 className="title is-1 text-center mt-6 mb-6">Your One Stop Tech Store</h1>
    <img src="images/apple.png" className="img-fluid landing-page-img mb-4 align-items-center" alt="apple iphones front"/>
  </div>
  <FeaturedProductsList />
  <Footer />
  </div>
);
export default Home;