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

// ── Ensure DB is connected on every request (cached after first connect) ──
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    console.error('DB connection failed:', err.message);
    res.status(503).json({ success: false, message: 'Database unavailable. Please try again.' });
  }
});

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

// ── Local dev: start the server (Vercel handles this in production) ─
if (process.env.VERCEL !== '1') {
  app.listen(PORT, () => {
    console.log(`🚀  AVISKAR Foundation server → http://localhost:${PORT}`);
    console.log(`✅  Razorpay Key: ${process.env.RAZORPAY_KEY_ID}`);
  });
}

// ── Export for Vercel serverless ───────────────────────────────
export default app;
