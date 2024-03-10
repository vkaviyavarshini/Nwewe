import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/action';
import { MdDelete } from 'react-icons/md';
import Navigation from './navigationBar';
import '../css/product.css';
import LeftSidebar from './leftsidebar';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.items);
  const navigate = useNavigate();

  // Calculate the total amount
  const totalAmount = products.reduce((total, product) => total + product.price, 0);

  const handlePayment = () => {
    if (totalAmount > 0) {
      history.push('/pay');
      navigate('/pay');
    } else {
      console.error('Total amount is zero. No items in the cart.');
    }
  };

  return (
    <div>
      <Navigation />
      <LeftSidebar />
      <h1 className='cartpage-title'>Shopping Cart</h1>
      <div className='clearfix'>
        {products.map((product) => (
          <div className='product-container' key={product.id}>
            <img src={product.imageUrl} alt={product.name} className='product-image' />
            <h3 className='product-name'>{product.name}</h3>
            <p className='product-price'>₹{product.price}</p>
            <button className='action-icons' onClick={() => dispatch(removeFromCart(product.id))}>
              <MdDelete />
            </button>
          </div>
        ))}
      </div>

      {/* Display total amount */}
      <div className='total-amount-container'>
        <p>Total Amount: ₹{totalAmount}</p>
      </div>

      {/* Add a button or link to navigate to the payment page */}
      <button className='payment-button' onClick={() => handlePayment(totalAmount)}>
        Proceed to Payment
      </button>
    </div>
  );
};

export default CartPage;
