import { Router } from 'express';
import { getKey, createOrder, verifyPayment } from '../controllers/donate.controller.js';

const router = Router();

// GET  /api/donate/key            → return public Razorpay key
router.get('/key', getKey);

// POST /api/donate/create-order   → create a Razorpay order
router.post('/create-order', createOrder);

// POST /api/donate/verify-payment → verify payment signature
router.post('/verify-payment', verifyPayment);

export default router;
