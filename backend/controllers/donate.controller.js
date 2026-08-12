import crypto from 'crypto';
import { razorpay, key_id, key_secret } from '../config/razorpay.js';

// GET /api/donate/key — return public Razorpay Key ID
export const getKey = (req, res) => {
  res.json({ key_id });
};

// POST /api/donate/create-order — create a Razorpay order
export const createOrder = async (req, res) => {
  try {
    const { amount, currency = 'INR', name, email, phone, cause } = req.body;

    const parsedAmount = parseFloat(amount);
    if (!parsedAmount || isNaN(parsedAmount) || parsedAmount <= 0) {
      return res.status(400).json({
        success: false,
        message: 'Invalid donation amount. Must be greater than 0.',
      });
    }

    // Razorpay uses paise (1 INR = 100 paise)
    const amountInPaise = Math.round(parsedAmount * 100);

    const options = {
      amount: amountInPaise,
      currency,
      receipt: `rcpt_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
      notes: {
        donor_name: name || 'Anonymous',
        donor_email: email || '',
        donor_phone: phone || '',
        cause: cause || 'General Donation',
        organization: 'AVISKAR FOUNDATION',
      },
    };

    const order = await razorpay.orders.create(options);

    return res.status(200).json({
      success: true,
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
      key_id,
    });
  } catch (error) {
    console.error('[createOrder] Error:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Failed to create donation order. Please try again.',
    });
  }
};

// POST /api/donate/verify-payment — verify Razorpay HMAC signature
export const verifyPayment = (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, donorInfo } = req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: 'Missing required payment verification parameters.',
      });
    }

    const body = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expectedSignature = crypto
      .createHmac('sha256', key_secret)
      .update(body)
      .digest('hex');

    if (expectedSignature !== razorpay_signature) {
      console.warn('[verifyPayment] Signature mismatch for order:', razorpay_order_id);
      return res.status(400).json({
        success: false,
        message: 'Payment verification failed. Invalid signature.',
      });
    }

    console.log('[verifyPayment] ✅ Payment verified:', {
      payment_id: razorpay_payment_id,
      order_id: razorpay_order_id,
      donorInfo,
    });

    return res.status(200).json({
      success: true,
      message: 'Payment verified successfully!',
      payment_id: razorpay_payment_id,
      order_id: razorpay_order_id,
    });
  } catch (error) {
    console.error('[verifyPayment] Error:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Internal server error during payment verification.',
    });
  }
};
