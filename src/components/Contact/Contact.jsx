/*import React from 'react'

function Contact() {
    return (
        <div id='contact' className='dark:bg-gray-800 bg-cyan-50 p-5 dark:text-white items-center'>
            <h1 className='font-bold text-2xl text-center m-5 '>Contact</h1>
<form className='flex flex-col items-center'>
    <p className='m-3 text-xl'>I’m looking to enhance my skills and work on real-world projects. Contact me if you have any opportunity for me.</p>
    <div className='m-3 '>
<label className='ml-7  text-xl '>Name</label><br/>
<input className='dark:bg-gray-700 bg-gray-100  border-black-2 p-2 rounded-xl w-[80vw] ml-5 mr-5  mt-2' type='text' placeholder='Enter your name' required/>
    </div>

    <div className='m-3 '>
<label className='ml-7  text-xl '>Email</label><br/>
<input className='dark:bg-gray-700 bg-gray-100 border-black-2 p-2 rounded-xl w-[80vw] ml-5 mr-5  mt-2' placeholder='Enter your name'  type='email' required/>
    </div>

<div className='m-3 '>
<label className='ml-7  text-xl '>Subject</label><br/>
<input className='dark:bg-gray-700 bg-gray-100 border-black-2 p-2 rounded-xl w-[80vw] ml-5 mr-5  mt-2' type='text' placeholder='Enter your name' required/>
    </div>

    <div className='m-3 '>
<label className='ml-7  text-xl '>Message</label><br/>
<textarea className='dark:bg-gray-700 bg-gray-100 border-black-2 p-2 rounded-xl w-[80vw] ml-5 mr-5  mt-2 h-40' cols={100} placeholder='Enter your name' required/>
    </div>

    <button className='dark:bg-[#0a87a6] bg-gray-500 p-2 mr-[72%] border-black rounded-xl pl-3 pr-3 mt-3'>Send Message</button>
    </form>
        </div>
    )
}

export default Contact*/


import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4ev5asg", 
        "template_6vg1i0r", 
        form.current,
        "kMnbjydUyoGfcbINd" 
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div
      id="contact"
      className="dark:bg-gray-800 bg-cyan-50 p-5 dark:text-white flex flex-col items-center"
    >
      <h1 className="font-bold text-3xl text-center m-5">Contact</h1>

      <p className="m-3 text-xl text-center md:w-[60vw]">
        I’m looking to enhance my skills and work on real-world projects. Contact me if
        you have any opportunity for me.
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col items-center w-full md:w-[60vw]"
      >
        {/* Name */}
        <div className="m-3 w-full">
          <label className="ml-7 text-xl">Name</label>
          <input
            className="dark:bg-gray-700 bg-gray-100 border border-gray-400 p-2 rounded-xl w-[80vw] md:w-full ml-5 mt-2"
            type="text"
            name="from_name"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email */}
        <div className="m-3 w-full">
          <label className="ml-7 text-xl">Email</label>
          <input
            className="dark:bg-gray-700 bg-gray-100 border border-gray-400 p-2 rounded-xl w-[80vw] md:w-full ml-5 mt-2"
            type="email"
            name="from_email"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Subject */}
        <div className="m-3 w-full">
          <label className="ml-7 text-xl">Subject</label>
          <input
            className="dark:bg-gray-700 bg-gray-100 border border-gray-400 p-2 rounded-xl w-[80vw] md:w-full ml-5 mt-2"
            type="text"
            name="subject"
            placeholder="Enter subject"
            required
          />
        </div>

        {/* Message */}
        <div className="m-3 w-full">
          <label className="ml-7 text-xl">Message</label>
          <textarea
            className="dark:bg-gray-700 bg-gray-100 border border-gray-400 p-2 rounded-xl w-[80vw] md:w-full ml-5 mt-2 h-40"
            name="message"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="dark:bg-[#0a87a6] bg-gray-500 p-2 border border-black rounded-xl pl-5 pr-5 mt-4 text-white font-medium hover:bg-gray-600 dark:hover:bg-[#09708a] transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
