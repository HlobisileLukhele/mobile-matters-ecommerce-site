import React from "react";
import ContactForm from './ContactForm';

const Services = () => (
  <div className="container-fluid items-center text-align-center">
    <h2 className="mt-5 mb-4 web">Web Developement Services</h2>
    <img src="images/Landing page.png" alt="landing pages of different screen sizes" className="img-fluid  mt-4 mb-2  landing-page items-center"/>
    <div className="row align-items-center sm:align-items-center mr-1 ml-1">
      <h3 className="mb-4 mt-4 plans">Explore plans</h3>

      <div className="col-sm col-md-4 mb-4 mt-4">
      <div className="card-services card  md:mb-4  sm:mb-4 items-center ml-2 mr-3" style={{ width:"24em"}} >
      <h5 className="card-title title">Standard</h5>
              <p className="card-text ">Once-off</p>
              <p className="card-title price text-white">R2999</p>
      <div className="card-body ml-1 mr-1 items-center"  style={{ width:"24em" }} >
        <ul className="lists mb-4 mt-2">
          <li className="list">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Website design and Development</span>
          </li>
          <li className="list">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Responsive and Mobile Friendly</span>
          </li>
          <li className="list">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>SEO optimized</span>
          </li>

          <li className="list">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Free .co.za domain</span>
          </li>
        </ul>
        <button type="button" className="action">Get Package</button>
            </div>
      </div>
      </div>

      <div class="col-sm col-md-4 sm:align-items-center mr-1 ml-1">
      <div className="card-services card md:mb-4   sm:mb-4 items-center ml-2 mr-3 " style={{ width:"24em"}} >
      <h5 className="card-title title">E-COMMERCE</h5>
              <p className="card-text ">Once-off</p>
              <p className="card-title price text-white">R3999</p>
      <div className="card-body ml-1 mr-1 items-center"  style={{ width:"24em" }} >
        <ul className="lists">
          <li className="list">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Website design and Development</span>
          </li>
          <li className="list">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Responsive and Mobile Friendly</span>
          </li>
          <li className="list">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>SEO optimized</span>
          </li>

          <li className="list">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Free .co.za domain</span>
          </li>
        </ul>
        <button type="button" className="action">Get Package</button>
            </div>
        
      </div>
      </div>
  
     
    
      <div className="col-sm col-md-4 mb-4 mt-4">
      <div className="card-services card  md:mb-4  sm:mb-4 items-center ml-2 mr-3" style={{ width:"24em"}} >
      <h5 className="card-title title">Standard</h5>
              <p className="card-text ">Once-off</p>
              <p className="card-title price text-white">R2999</p>
      <div className="card-body ml-1 mr-1 items-center"  style={{ width:"24em" }} >
        <ul className="lists mb-4 mt-2">
          <li className="list">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Website design and Development</span>
          </li>
          <li className="list">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Responsive and Mobile Friendly</span>
          </li>
          <li className="list">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>SEO optimized</span>
          </li>

          <li className="list">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Free .co.za domain</span>
          </li>
        </ul>
        <button type="button" className="action">Get Package</button>
            </div>
      </div>
      </div>

</div>
<h3 className="mt-4 text-align-center">Get In Touch</h3>
   <ContactForm />
</div>
);

export default Services;