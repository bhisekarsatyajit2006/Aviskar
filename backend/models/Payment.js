import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema(
  {
    paymentId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    orderId: {
      type: String,
      required: true,
      trim: true,
    },
    amount: {
      type: Number,  // stored in INR
      required: true,
    },
    currency: {
      type: String,
      default: 'INR',
    },
    donorName: {
      type: String,
      trim: true,
    },
    donorEmail: {
      type: String,
      trim: true,
      lowercase: true,
    },
    donorPhone: {
      type: String,
      trim: true,
    },
    cause: {
      type: String,
      default: 'General Donation',
    },
    status: {
      type: String,
      enum: ['verified', 'failed'],
      default: 'verified',
    },
  },
  {
    timestamps: true,   // adds createdAt & updatedAt
    collection: 'payments',
  }
);

const Payment = mongoose.model('Payment', paymentSchema);

export default Payment;
