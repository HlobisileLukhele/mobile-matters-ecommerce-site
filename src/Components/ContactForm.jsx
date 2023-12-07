import React from 'react';
import "../App.css";
import { useForm } from 'react-hook-form';
import { DevTool } from "@hookform/devtools";

const ContactForm = () => {
  const form = useForm();
  const { register, control, handleSubmit,formState} = form;
  const {errors} = formState;

  const onSubmit = (data) => {
    console.log("form submitted");
  }

  return (
    <div className="form-container">
      <form className="contact-form"  onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input type='text' id="fullname" {...register("fullname",{
            required: "Fullname is required",
            placeholder: "something@example.com"
          })} />
          <p className="error">{errors.fullname?.message}</p>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type='email' id="email" {...register("email", {
            required: "email is required",
            placeholder: "something@example.com"
          })} />
          <p className="error">{errors.email?.message}</p>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea rows={10} cols={25} id="message" {...register("message", {
            required: "Message is required",
            placeholder: "Say Something ..."

          })} />
          <p className="error">{errors.message?.message}</p>
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
