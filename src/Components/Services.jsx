import React from "react";
import ContactForm from './ContactForm';

const Services = () => (
  <div className="container-fluid items-center text-align-center">
    <h2 className="mt-5 mb-4 web">Web Developement Services</h2>
    <img src="images/Landing page.png" alt="landing pages of different screen sizes" className="img-fluid  mt-4 mb-2  landing-page items-center"/>
    <div className="row align-items-center sm:align-items-center mr-1 ml-1">
      <h3 className="mb-4 mt-4 plans">Explore plans</h3>

</div>
<h3 className="mt-4 text-align-center">Get In Touch</h3>
   <ContactForm />
</div>
);

export default Services;