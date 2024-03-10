import  { useState } from 'react';
import Razorpay from 'razorpay';

const PaymentPage = () => {
  const [paymentData, setPaymentData] = useState({
    key: 'YOUR_RAZORPAY_API_KEY', // Replace with your actual API key
    amount: 100, // Replace with the actual amount to be paid
    currency: 'INR', // Replace with your preferred currency code
    name: 'Your Company Name',
    description: 'Product Purchase',
    order_id: '', // Set dynamically after creating the order on the server
    handler: async (response) => {
      // Handle the successful payment response
      console.log(response);
    },
  });

  const initializePayment = async () => {
    const response = await fetch('/api/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: paymentData.amount, currency: paymentData.currency }),
    });

    const data = await response.json();

    // Set the order_id dynamically
    setPaymentData({ ...paymentData, order_id: data.id });

    const razorpay = new Razorpay({
      key: paymentData.key,
      amount: paymentData.amount,
      currency: paymentData.currency,
      name: paymentData.name,
      description: paymentData.description,
      order_id: data.id,
      handler: paymentData.handler,
    });

    razorpay.open();
  };

  return (
    <div>
      <h1>Payment Page</h1>
      <button onClick={initializePayment}>Proceed to Pay</button>
    </div>
  );
};

export default PaymentPage;
