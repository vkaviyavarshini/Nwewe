//import React from 'react';
import '../css/contact.css';
import Navigation from './navigationBar';
import LeftSidebar from './leftsidebar';
// import RightSidebar from './rightsidebar';
import  { useState } from 'react';
import { Link } from 'react-router-dom';


function Contact(){
const [fullName, setFullName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [comment, setComment] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Phone', phone);
    console.log('Comment:', comment);
  };

  return (
    <div>
        <Navigation/>
        <LeftSidebar/>
        {/* <RightSidebar/> */}
        <br/>
        <br/>
        <br/>
        <br/>
        <div className='contact-container'>
        <h2 className='title'>Contact Us</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="fullName"
            placeholder="FullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Phone Number"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group-comment">
          <input
            type="text"
            id="comment"
            placeholder="Leave Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>
        <button type="submit" className='but'>
          <Link to="/">Submit</Link>
          </button>
      </form>
      </div>
    </div>
  );
}

export default Contact;
