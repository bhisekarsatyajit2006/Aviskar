import Razorpay from 'razorpay';
import dotenv from 'dotenv';

dotenv.config();

const key_id = process.env.RAZORPAY_KEY_ID;
const key_secret = process.env.RAZORPAY_KEY_SECRET;

if (!key_id || !key_secret) {
  throw new Error('RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET must be set in .env');
}

export const razorpay = new Razorpay({ key_id, key_secret });

export { key_id, key_secret };
