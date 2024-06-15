import React, { useState } from "react";
import { FaMobileAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMailOutline } from 'react-icons/md';
import { IoCallSharp } from 'react-icons/io5';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://parents-follow-u.onrender.com/followup/contactus/contact", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSuccess('Form submitted successfully!');
      setError('');
      setFormData({ fullName: '', email: '', subject: "", message: '' });
    } catch (err) {
      setError('Error submitting form. Please try again later.');
      setSuccess('');
    }
  };

  return (
    <div id="contact" className="flex flex-col items-center justify-evenly bg-gray-100 pt-40 pb-11">
      <div className="text-center mb-8 md:mb-12 flex flex-row items-center justify-center">
        <span className="block w-10 h-2 bg-teal-900 mx-4"></span>
        <h1 className="text-teal-900 font-bold font-serif text-[40px]">
          CONTACT
        </h1>
        <span className="block w-10 h-2 bg-teal-900 mx-4"></span>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-10">
        <div className="flex flex-col space-y-6 px-4">
          <h1 className="text-black text-xl pl-6">Get In Touch</h1>
          <p className="text-black pl-6 ">
            Your feedback is crucial to us, and we're eager to hear
            from you. Together, let's make a difference in your child's
            educational journey.
          </p>
        </div>
        <div className="px-4">
          <img
            src="./photos/contact.png"
            alt="Contact"
            className="rounded-lg shadow-md mx-auto sm:w-full md:w-full lg:w-full"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 px-4 pl-4">
          <input
            type="text"
            name="fullName"
            placeholder="Your name"
            value={formData.fullName}
            onChange={handleChange}
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-teal-600"
          />
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-teal-600"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-teal-600"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-teal-600"
            rows="4"
          />
          <button className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-600" type="submit" onClick={handleSubmit}>
            Send message
          </button>
        </div>
      </div>

      {/* Display success message if available */}
      {success && (
        <div className="text-green-500 p-4 mt-4">
          {success}
        </div>
      )}

      {/* Display error message if available */}
      {error && (
        <div className="text-red-500 p-4 mt-4">
          {error}
        </div>
      )}
    </div>
  );
};

export default Contact;
