import Razorpay from 'razorpay';
import dotenv from 'dotenv';

dotenv.config();

const key_id = process.env.RAZORPAY_KEY_ID || 'rzp_test_TOkFXZuR1rLLZT';
const key_secret = process.env.RAZORPAY_KEY_SECRET || 'xP9Xe75UErjLkb3w0NLdFW4g';

export const razorpay = new Razorpay({ key_id, key_secret });

export { key_id, key_secret };
