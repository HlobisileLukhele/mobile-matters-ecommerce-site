import React from 'react';
import "../App.css";
import { useForm } from 'react-hook-form';
import { DevTool } from "@hookform/devtools";


const ContactForm = () => {
  const form = useForm();
  const { register, control, handleSubmit } = form;

  const onSubmit = (data) => {
    console.log("form submitted");
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} noValodates className="contact-form">
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input type='text' id="fullname" {...register("username")} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type='email' id="email" {...register("email")} />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea rows={10} cols={35} id="message" {...register("message")} />
        </div>

        <div className="form-group">
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default ContactForm;
