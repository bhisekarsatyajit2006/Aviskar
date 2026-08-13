import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import donateRoutes from './routes/donate.routes.js';
import connectDB from './config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ─────────────────────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── Health Check ───────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'AVISKAR Foundation API is running',
    timestamp: new Date().toISOString(),
  });
});

// ── Routes ─────────────────────────────────────────────────────
app.use('/api/donate', donateRoutes);

// ── 404 Fallback ───────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route not found: ${req.originalUrl}` });
});

// ── Connect DB, then Start Server ──────────────────────────────
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀  AVISKAR Foundation server → http://localhost:${PORT}`);
    console.log(`✅  Razorpay Key: ${process.env.RAZORPAY_KEY_ID}`);
  });
});
