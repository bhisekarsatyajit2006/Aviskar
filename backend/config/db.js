import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI must be set in .env');
}

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅  MongoDB connected → Cluster0');
  } catch (error) {
    console.error('❌  MongoDB connection error:', error.message);
    process.exit(1);
  }
};

export default connectDB;
