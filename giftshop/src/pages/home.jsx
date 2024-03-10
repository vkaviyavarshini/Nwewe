//import React from 'react';
import Navigation from './navigationBar'; 
import LeftSidebar from './leftsidebar';
//import Footer from './footer';
import { Link } from 'react-router-dom';  


const imageUrl = 'https://res.cloudinary.com/dg2jouca2/image/upload/v1708586870/homepage_caaktr.png';


const Home = () => {
  return (
    <div>
      
      <Navigation/>
      <LeftSidebar/>  
      {/* <RightSidebar/> */} 
      <Link to="/gifts">
      <div className="image-container">
        <img className='imgc' src={imageUrl} alt="Gift Shop"  />
      </div>
      </Link>
      <br/>
      <hr/>
    </div>
  );
};

export default Home;
