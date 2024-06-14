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
    <div className="form-container flex flex-col gap-4">
  <form className="contact-form flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)} noValidate>
    <div className="form-group flex flex-col">
      <label htmlFor="fullname" className="text-gray-700 font-medium mb-1">Full Name</label>
      <input type='text' id="fullname" {...register("fullname", {
          required: "Fullname is required",
          placeholder: "something@example.com"
        })} className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-black" />
      <p className="error text-red-500 text-sm">{errors.fullname?.message}</p>
    </div>

    <div className="form-group flex flex-col">
      <label htmlFor="email" className="text-gray-700 font-medium mb-1">Email</label>
      <input type='email' id="email" {...register("email", {
          required: "email is required",
          placeholder: "something@example.com"
        })} className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-black" />
      <p className="error text-red-500 text-sm">{errors.email?.message}</p>
    </div>

    <div className="form-group flex flex-col">
      <label htmlFor="message" className="text-gray-700 font-medium mb-1">Message</label>
      <textarea rows={10} cols={25} id="message" {...register("message", {
          required: "Message is required",
          placeholder: "Say Something ..."
        })} className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-black resize-none"></textarea>
      <p className="error text-red-500 text-sm">{errors.message?.message}</p>
    </div>

    <div className="form-group flex justify-end">
      <button className="btn btn-primary bg-black text-white px-4 py-2 rounded-md focus:outline-none" type="submit">Submit</button>
    </div>
  </form>
  <DevTool control={control} />
</div>

  );
}

export default ContactForm;
