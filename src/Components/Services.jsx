import React from "react";
import ContactForm from './ContactForm';


const Services = () => (
  <div class="container-fluid">
    <h2 className="mt-4 web">Web Developement Services</h2>
    <img src="images/Landing page.png" alt="landing pages of different screen sizes" className="img-fluid landing-page "/>
    <div class="row align-items-center">
      <h3 className="mb-4 mt-4 plans">Explore plans</h3>
      <div class="col-sm me-0 mr-0  mb-4 mt-4 align-items-center">
        <div className="card bg-dark" style={{width:"25rem" }}>
            <div className="card-body">
              <h5 className="card-title title">Standard</h5>
              <p className="card-text">Once-off</p>
              <h3 className="card-title price">R2999</h3>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Website design and Development</li>
              <li className="list-group-item">Responsive and Mobile Friendly</li>
              <li className="list-group-item">SEO optimized</li>
              <li className="list-group-item">Free .co.za domain</li>
            </ul>
          </div>
      </div>
  
      <div class="col-sm me-0 mr-0  mb-4 mt-4">
        <div className="card bg-dark" style={{ width: "25em" }}>
            <div className="card-body">
              <h5 className="card-title title">E-COMMERCE</h5>
              <p className="card-text">Once-off</p>
              <h3 className="card-title price">R3999</h3>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Online payment</li>
              <li className="list-group-item">E-COMMERCE Features</li>
              <li className="list-group-item">Responsive and Mobile Friendly</li>
              <li className="list-group-item">SEO optimized</li>
            </ul>
          </div>
      </div>
    
      <div class="col-sm me-0 mr-0 mb-4 mt-4">
        <div className="card bg-dark" style={{width: "25rem"}}>
            <div className="card-body">
              <h5 className="card-title title">Standard</h5>
              <p className="card-text">Once-off</p>
              <h3 className="card-title price">R2999</h3>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Website design and Development</li>
              <li className="list-group-item">Responsive and Mobile Friendly</li>
              <li className="list-group-item">SEO optimized</li>
              <li className="list-group-item">Free .co.za domain</li>
            </ul>
          </div>
  </div>
</div>
<h3 className="mt-4 text-align-center">Get In Touch</h3>
   <ContactForm />
</div>
);

export default Services;