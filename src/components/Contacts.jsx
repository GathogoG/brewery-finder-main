import React, { useState } from 'react';
import './App.css'; // Import the CSS file

const Contact = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted email:', email);
    setEmail('');
  };

  return (
    <>
      <div className='contact-container'>
        <h2 className='contact-title'>Contact Us to make any orders or inquiries</h2>
        <p className='contact-info'>PHONE NUMBER: +25674893930</p>
        <p className='contact-info'>EMAIL: Breweries@gmail.com</p>
        <p className='contact-info'>Please submit your email address:</p>
        <form className='contact-form' onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
