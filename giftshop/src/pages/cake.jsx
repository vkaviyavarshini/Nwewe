//import React from 'react';
import { FaShoppingCart} from 'react-icons/fa';
import Navigation from './navigationBar';
import '../css/product.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { addToCart } from '../redux/action';
import { useDispatch } from 'react-redux';
import LeftSidebar from './leftsidebar';
// import { Link } from 'react-router-dom';  

const Cakes = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [products] = useState([
    { id: 1, name: 'Theme Cakes', price: '4000', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708700253/cake7_msyh9q.jpg' },
    { id: 2, name: 'Flavour Cakes', price: '400', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708700021/cake1_kudmiu.jpg' },
    { id: 3, name: 'Cup Cakes', price: '1920', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708701386/cupcake1_inzg70.jpg' },
    { id: 4, name: 'Eggless Cakes', price: '763', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708700025/cake3_ihdr9g.jpg' },
    { id: 5, name: 'Brownies', price: '923', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708700026/cake6_qxfl78.jpg' },
    { id: 6, name: 'Donuts', price: '1231', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708701387/donuts_btytr6.jpg' },
    { id: 7, name: 'Theme Cakes', price: '1321', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708700025/cake5_npf5az.jpg' },
    { id: 8, name: 'Brownies', price: '5664', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708701392/brownies_ttuury.jpg' },
    { id: 9, name: 'Flavour Cakes', price: '6654', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708700021/cake_fgfuvh.jpg' },
    { id: 10, name: 'Eggless Cakes', price: '4523', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708700021/cake2_alrury.jpg' },
    
    
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

export default Cakes;
