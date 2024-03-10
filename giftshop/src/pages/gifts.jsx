//import React from 'react';
import { FaShoppingCart} from 'react-icons/fa';
import Navigation from './navigationBar';
import '../css/product.css';
import { useState } from 'react';
import { addToCart } from '../redux/action';
import { useDispatch } from 'react-redux';
import LeftSidebar from './leftsidebar';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';  

const Gifts = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [products] = useState([
    { id: 1, name: 'Happy Birthday Neon Light Sign', price: 4200, imageUrl: 'https://www.giftsholic.in/cdn/shop/files/GH-162_400x_crop_center.jpg?v=1690197965' },
    { id: 2, name: 'Natural Wood Photo Frame Circle', price: 800, imageUrl: 'https://www.giftsholic.in/cdn/shop/files/GH-129-1_400x_crop_center.jpg?v=1693578501' },
    { id: 3, name: 'Happy Anniversary Neon Light Sign', price: 5000, imageUrl: 'https://www.giftsholic.in/cdn/shop/files/GH-163_400x_crop_center.jpg?v=1690198636' },
    { id: 4, name: 'Spotify Plaque With Multi LED Stand', price: 1700, imageUrl: 'https://www.giftsholic.in/cdn/shop/products/GH-112-1_150x150.jpg?v=1636654294' },
    { id: 5, name: 'Warm - Moon Light Lamp With Photo & Text', price: 1199, imageUrl: 'https://www.giftsholic.in/cdn/shop/products/GH-117-2_250x_crop_center.jpg?v=1644346960' },
    { id: 6, name: 'LED Light Cinematic Box Multiple Stacks', price: 1200, imageUrl: 'https://www.giftsholic.in/cdn/shop/products/LED-Light-Cinematic-Box-With-96-Changeable-Letters_150x150.jpg?v=1635503782' },
    { id: 7, name: 'Wooden Wall Clock With Square Photo', price: 1400, imageUrl: 'https://www.giftsholic.in/cdn/shop/products/GH-110-1_250x_crop_center.jpg?v=1636396809' },
    { id: 8, name: '3D Acrylic LED Happy Birthday Lamp', price: 1500, imageUrl: 'https://www.giftsholic.in/cdn/shop/products/GH-103-1_150x150.jpg?v=1635789396' },
    { id: 9, name: 'Quirky Power Mugs - Set of 2 Mugs', price: 700, imageUrl: 'https://imgcdn.floweraura.com/boss-vs-real-boss-couple-mug-9827957gf-A_0.jpg?tr=w-304,dpr-1.5,q-70' },
    { id: 10, name: 'Rose N Black Oud Aroma Diffuser Set', price: 600, imageUrl: 'https://imgcdn.floweraura.com/rose-n-black-oud-aroma-diffuser-set-9797867gf-A_0.jpg?tr=w-304,dpr-1.5,q-70' },
    
    
  ]);

  const handleAddToCart = (productId) => {
    dispatch(addToCart(products[productId-1]))
    navigate('/cart');
  };
  
  return (
    <div>
      <Navigation />
      <LeftSidebar/>


      <br/><br/><br/><br/>
      <h1 className='page-title'>Gifts</h1>

      <div className="clearfix">
        <br/><br/>
        {products.map((product) => (
          <div className="product-container" key={product.id}>
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>              
            <p className='product-price'>₹{product.price}</p>
            <button className="action-icons">
              <FaShoppingCart onClick={() => handleAddToCart(product.id)} className="icon" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gifts;
