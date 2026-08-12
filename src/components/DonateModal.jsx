import { useState, useEffect } from 'react';
import {
  FaTimes,
  FaHeart,
  FaShieldAlt,
  FaCheckCircle,
  FaSpinner,
  FaLock,
  FaPrint,
} from 'react-icons/fa';
import './DonateModal.css';

const presetAmounts = [250, 500, 1000, 2500, 5000];

const causes = [
  'General Donation',
  'Child Education & Schooling',
  'Women Empowerment & Skill Development',
  'Community Health & Healthcare Relief',
  'Rural Development & Infrastructure',
];

export default function DonateModal({ isOpen, onClose, initialAmount = 1000 }) {
  const [selectedAmount, setSelectedAmount] = useState(initialAmount);
  const [customAmount, setCustomAmount] = useState('');
  const [isCustom, setIsCustom] = useState(false);

  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [selectedCause, setSelectedCause] = useState(causes[0]);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [receiptData, setReceiptData] = useState(null);

  // Sync initial amount if passed
  useEffect(() => {
    if (initialAmount && !presetAmounts.includes(Number(initialAmount))) {
      setIsCustom(true);
      setCustomAmount(String(initialAmount));
    } else {
      setIsCustom(false);
      setSelectedAmount(initialAmount);
    }
  }, [initialAmount]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const finalAmount = isCustom ? parseFloat(customAmount) || 0 : selectedAmount;

  // Helper to load Razorpay script dynamically if needed
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleDonateSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!finalAmount || finalAmount < 1) {
      setErrorMsg('Please enter a valid donation amount (minimum ₹1).');
      return;
    }
    if (!donorName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!donorEmail.trim() || !/\S+@\S+\.\S+/.test(donorEmail)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!donorPhone.trim() || donorPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    setLoading(true);

    try {
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        throw new Error('Razorpay SDK failed to load. Please check your internet connection.');
      }

      // Step 1: Create order on backend
      const response = await fetch('/api/donate/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: finalAmount,
          currency: 'INR',
          name: donorName,
          email: donorEmail,
          phone: donorPhone,
          cause: selectedCause,
        }),
      });

      const orderData = await response.json();

      if (!response.ok || !orderData.success) {
        throw new Error(orderData.message || 'Error creating donation order.');
      }

      // Step 2: Open Razorpay Checkout Modal
      const options = {
        key: orderData.key_id,
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'AVISKAR FOUNDATION',
        description: `Donation for ${selectedCause}`,
        image: '/logo.png',
        order_id: orderData.order_id,
        handler: async function (razorpayResponse) {
          try {
            setLoading(true);
            // Step 3: Verify payment signature on backend
            const verifyRes = await fetch('/api/donate/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: razorpayResponse.razorpay_order_id,
                razorpay_payment_id: razorpayResponse.razorpay_payment_id,
                razorpay_signature: razorpayResponse.razorpay_signature,
                donorInfo: {
                  name: donorName,
                  email: donorEmail,
                  phone: donorPhone,
                  cause: selectedCause,
                  amount: finalAmount,
                },
              }),
            });

            const verifyData = await verifyRes.json();

            if (verifyRes.ok && verifyData.success) {
              setReceiptData({
                paymentId: razorpayResponse.razorpay_payment_id,
                orderId: razorpayResponse.razorpay_order_id,
                amount: finalAmount,
                name: donorName,
                email: donorEmail,
                phone: donorPhone,
                cause: selectedCause,
                date: new Date().toLocaleDateString('en-IN', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                }),
              });
            } else {
              setErrorMsg(verifyData.message || 'Payment verification failed.');
            }
          } catch (err) {
            setErrorMsg('Error verifying payment: ' + err.message);
          } finally {
            setLoading(false);
          }
        },
        prefill: {
          name: donorName,
          email: donorEmail,
          contact: donorPhone,
        },
        notes: {
          cause: selectedCause,
        },
        theme: {
          color: '#0E7A52',
        },
        // Explicitly enable all payment methods including UPI
        config: {
          display: {
            blocks: {
              banks: {
                name: 'Pay via UPI or Net Banking',
                instruments: [
                  { method: 'upi' },
                  { method: 'netbanking' },
                ],
              },
              cards: {
                name: 'Pay via Card',
                instruments: [
                  { method: 'card' },
                ],
              },
              wallets: {
                name: 'Pay via Wallet',
                instruments: [
                  { method: 'wallet' },
                ],
              },
            },
            sequence: ['block.banks', 'block.cards', 'block.wallets'],
            preferences: {
              show_default_blocks: true,
            },
          },
        },
        modal: {
          ondismiss: function () {
            setLoading(false);
          },
        },
      };

      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.on('payment.failed', function (response) {
        setErrorMsg(`Payment Failed: ${response.error.description || 'Transaction cancelled.'}`);
        setLoading(false);
      });

      razorpayInstance.open();
    } catch (err) {
      console.error(err);
      setErrorMsg(err.message || 'An error occurred while setting up donation payment.');
      setLoading(false);
    }
  };

  const handlePrintReceipt = () => {
    window.print();
  };

  const resetForm = () => {
    setReceiptData(null);
    setErrorMsg('');
    setLoading(false);
    onClose();
  };

  return (
    <div className="donate-modal-overlay" onClick={resetForm}>
      <div className="donate-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="donate-modal-close" onClick={resetForm} aria-label="Close modal">
          <FaTimes />
        </button>

        {receiptData ? (
          /* SUCCESS RECEIPT VIEW */
          <div className="donate-receipt-view">
            <div className="receipt-header">
              <div className="success-icon-badge">
                <FaCheckCircle />
              </div>
              <h3>Thank You for Your Donation!</h3>
              <p className="receipt-subtitle">
                Your support directly impacts lives through AVISKAR FOUNDATION programs.
              </p>
            </div>

            <div className="receipt-card" id="printable-receipt">
              <div className="receipt-logo">
                <img src="/logo.png" alt="AVISKAR FOUNDATION" />
                <span>AVISKAR FOUNDATION</span>
              </div>
              <div className="receipt-badge">Official Donation Receipt</div>

              <div className="receipt-amount-display">
                <span className="cur">₹</span>
                <span className="val">{receiptData.amount.toLocaleString('en-IN')}</span>
              </div>

              <div className="receipt-grid">
                <div className="receipt-row">
                  <span className="lbl">Payment ID:</span>
                  <span className="val code">{receiptData.paymentId}</span>
                </div>
                <div className="receipt-row">
                  <span className="lbl">Order ID:</span>
                  <span className="val code">{receiptData.orderId}</span>
                </div>
                <div className="receipt-row">
                  <span className="lbl">Donor Name:</span>
                  <span className="val">{receiptData.name}</span>
                </div>
                <div className="receipt-row">
                  <span className="lbl">Email:</span>
                  <span className="val">{receiptData.email}</span>
                </div>
                <div className="receipt-row">
                  <span className="lbl">Phone:</span>
                  <span className="val">{receiptData.phone}</span>
                </div>
                <div className="receipt-row">
                  <span className="lbl">Cause / Purpose:</span>
                  <span className="val">{receiptData.cause}</span>
                </div>
                <div className="receipt-row">
                  <span className="lbl">Date & Time:</span>
                  <span className="val">{receiptData.date}</span>
                </div>
                <div className="receipt-row">
                  <span className="lbl">Payment Status:</span>
                  <span className="val status-paid">✓ Verified Success</span>
                </div>
              </div>

              <div className="receipt-footer-text">
                <p>AVISKAR FOUNDATION is registered under Section 8. Thank you for making a difference.</p>
              </div>
            </div>

            <div className="receipt-actions">
              <button className="btn-print" onClick={handlePrintReceipt}>
                <FaPrint /> Print Receipt
              </button>
              <button className="btn-done" onClick={resetForm}>
                Done
              </button>
            </div>
          </div>
        ) : (
          /* DONATION FORM VIEW */
          <div className="donate-form-view">
            <div className="modal-header">
              <div className="modal-heart-icon">
                <FaHeart />
              </div>
              <h2>Make a Donation</h2>
              <p>Empower communities with your tax-deductible contribution.</p>
            </div>

            {errorMsg && <div className="donate-error-alert">{errorMsg}</div>}

            <form onSubmit={handleDonateSubmit} className="donate-form">
              {/* Preset Amounts */}
              <div className="form-group">
                <label className="input-label">Select Amount (INR)</label>
                <div className="amount-grid">
                  {presetAmounts.map((amt) => (
                    <button
                      type="button"
                      key={amt}
                      className={`amt-chip ${!isCustom && selectedAmount === amt ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedAmount(amt);
                        setIsCustom(false);
                      }}
                    >
                      ₹{amt.toLocaleString('en-IN')}
                    </button>
                  ))}
                  <button
                    type="button"
                    className={`amt-chip ${isCustom ? 'active' : ''}`}
                    onClick={() => setIsCustom(true)}
                  >
                    Custom
                  </button>
                </div>
              </div>

              {/* Custom Amount Input */}
              {isCustom && (
                <div className="form-group custom-amt-box">
                  <label className="input-label">Enter Custom Amount (₹)</label>
                  <div className="input-prefix-wrapper">
                    <span className="prefix">₹</span>
                    <input
                      type="number"
                      min="1"
                      placeholder="e.g. 1500"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="form-input custom-input"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Cause Selection */}
              <div className="form-group">
                <label className="input-label">Choose Cause / Initiative</label>
                <select
                  value={selectedCause}
                  onChange={(e) => setSelectedCause(e.target.value)}
                  className="form-input form-select"
                >
                  {causes.map((c, i) => (
                    <option key={i} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Donor Details */}
              <div className="form-group">
                <label className="input-label">Full Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Satyajit Bhise"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="input-label">Email Address *</label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="input-label">Mobile Number *</label>
                  <input
                    type="tel"
                    placeholder="10-digit phone number"
                    value={donorPhone}
                    onChange={(e) => setDonorPhone(e.target.value)}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              {/* Secure Payment Note */}
              <div className="security-notice">
                <FaLock className="lock-icon" />
                <span>
                  Secured by <strong>Razorpay</strong>. 256-bit SSL encrypted.
                </span>
                <FaShieldAlt className="shield-icon" />
              </div>

              {/* Submit Button */}
              <button type="submit" className="donate-submit-btn" disabled={loading}>
                {loading ? (
                  <>
                    <FaSpinner className="spinner" /> Processing Payment...
                  </>
                ) : (
                  <>
                    <FaHeart /> Donate ₹{finalAmount > 0 ? finalAmount.toLocaleString('en-IN') : '0'} Now
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
