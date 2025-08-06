// import React, { useState } from 'react';
// import "./Contact.css";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data:", formData);
//     setFormData({ name: '', email: '', message: '' });
//   };

//   return (
//     <div className="contact-container">
//       <h2 className="contact-title">Contact Us</h2>
//       <div className="main">
//         <div className="contact-left">
//           <div className="get">
//             <h3>Get in Touch</h3>
//           </div>
//           <p>
//             Have a question, comment, or feedback for us? We'd love to hear from you. 
//             Please fill out the form below, and we'll get back to you as soon as possible.
//           </p>
//         </div>
//         <div className="contact-right">
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="name">Your Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Enter your name"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email Address</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="message">Message</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows="4"
//                 placeholder="Your message here"
//                 required
//               ></textarea>
//             </div>
//             <button type="submit" className="submit-btn">
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


// components/ContactUs.js
import React from 'react';
import './Contact.css'; // adjust the path if needed

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-inner">
        <h1 className="contact-title">Contact Us</h1>
        <div className="contact-grid">
          <div className="contact-info">
            <h2 className="contact-subtitle">Get in Touch</h2>
            <p className="contact-description">
              Have a question, comment, or feedback for us? We'd love to hear
              from you. Please fill out the form below, and we'll get back to
              you as soon as possible.
            </p>
          </div>
          <div className="contact-form-container">
            <div className="form-box">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <div className="form-submit">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
