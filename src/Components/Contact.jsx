import React from "react";
import ContactForm from "./ContactForm"
import Footer from "./Footer"

const Contact = () => (
  <div className="container border-x-2 border-y-2">  
      <ul className="headings">
        <li className="active:first-line: login">Login</li> 
        <li className="active:first-line: register">Register</li> 

      </ul>
    <ContactForm /> 
    <Footer />
  </div>
);

export default Contact;
