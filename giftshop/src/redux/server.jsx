/* eslint-disable no-undef */
const express = require('express');
const bodyParser = require('body-parser');
// eslint-disable-next-line react-refresh/only-export-components, no-undef
const Razorpay = require('razorpay');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

const razorpay = new Razorpay({
  key_id: 'YOUR_RAZORPAY_KEY_ID', // Replace with your actual key ID
  key_secret: 'YOUR_RAZORPAY_KEY_SECRET', // Replace with your actual key secret
});

app.post('/api/create-order', async (req, res) => {
  const { amount, currency } = req.body;

  const options = {
    amount: amount * 100, // Razorpay expects the amount in paise
    currency,
    receipt: 'order_receipt_id_1',
    payment_capture: 1, // Auto capture payment
  };

  try {
    const response = await razorpay.orders.create(options);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
