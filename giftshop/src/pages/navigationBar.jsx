//import React from 'react';
import {  Link } from 'react-router-dom';
import '../css/navigation.css'; 
import logo from '../assets/giftoholic.png'
import cart from '../assets/cart.png'
import profile from '../assets/profile.png'
import logout from '../assets/logout.png'

const logoStyle = {
  width: '150px',
  height: '40px',
};

const iconStyle = {
  width :'35px',
  height:'35px',
  marginLeft:'8px',
  marginRight:'8px',
}

const removeToken = () => {
  localStorage.removeItem('token');
}

const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className='ele1'>
        <Link to="/home" >
          <img className='navLogoStyle' src={logo} alt="Logo" style={logoStyle}/>
        </Link>
        <li></li><li></li><li></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link> </li>
        {/* <li><Link to="/contact">Contact</Link></li> */}
        <li><Link to="/guide">Guide</Link> </li>
        
        {/* <li><Link to="/user">User Profile</Link></li>
        <li><Link to="/">Logout</Link> </li> */}
        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
        
        <Link to ='/user'>
          <img className='iconStyle' src={profile} alt="User Profile" style={iconStyle}/>
        </Link>
        <Link to ='/cart'>
          <img className='iconStyle' src={cart} alt="Cart" style={iconStyle}/>
        </Link>
        <Link to ='/'>
          <img className='iconStyle' src={logout} alt="Logout" onClick={() => removeToken()}style={iconStyle}/>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
