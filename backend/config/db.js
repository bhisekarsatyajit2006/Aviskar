import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI must be set in .env');
}

// Cache the connection across serverless invocations
let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;
  try {
    await mongoose.connect(MONGODB_URI);
    isConnected = true;
    console.log('✅  MongoDB connected → Cluster0');
  } catch (error) {
    console.error('❌  MongoDB connection error:', error.message);
    throw error;   // let the caller handle it (don't crash the process in serverless)
  }
};

export default connectDB;
