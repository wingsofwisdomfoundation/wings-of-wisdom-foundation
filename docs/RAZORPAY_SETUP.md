# Razorpay Production Integration Guide

## 🎯 Overview

This NGO website includes a **complete, production-ready Razorpay donation system** with:

- ✅ Backend API for secure order creation and payment verification
- ✅ HMAC SHA256 signature verification
- ✅ Fully typed React components (no `any`)
- ✅ Proper error handling and edge cases
- ✅ Duplicate payment prevention

---

## 🚀 Quick Start

### 1. Setup Backend

```bash
cd backend

# Install dependencies
npm install

# Create .env from template
copy .env.example .env
```

Edit `backend/.env` with your Razorpay credentials:
```env
RAZORPAY_KEY_ID=rzp_test_YOUR_KEY_ID
RAZORPAY_KEY_SECRET=YOUR_SECRET_KEY
PORT=5000
FRONTEND_URL=http://localhost:8080
```

Start the backend:
```bash
npm run dev
```

### 2. Start Frontend

```bash
# In the main project directory
npm run dev
```

### 3. Test Donation

1. Navigate to `/donate`
2. Fill in donor details
3. Select or enter amount
4. Click "Donate Now"

**Test Card:** `4111 1111 1111 1111` (any CVV, future expiry)

---

## 📁 Project Structure

```
NGO/
├── backend/                    # Express.js API Server
│   ├── src/
│   │   ├── config/env.ts       # Environment configuration
│   │   ├── controllers/        # Request handlers
│   │   ├── services/           # Business logic
│   │   │   ├── razorpayService.ts   # Razorpay SDK integration
│   │   │   └── donationService.ts   # Donation storage
│   │   ├── routes/             # API routes
│   │   ├── types/              # TypeScript interfaces
│   │   └── server.ts           # Express entry point
│   ├── .env.example
│   └── package.json
│
└── src/                        # React Frontend
    ├── types/razorpay.ts       # Razorpay type definitions
    ├── services/paymentService.ts  # API client + checkout
    ├── components/DonateForm.tsx   # Reusable form component
    └── pages/Donate.tsx        # Donation page
```

---

## 🔐 Security Features

| Feature | Implementation |
|---------|---------------|
| Secret key protection | Backend-only, via environment variables |
| Signature verification | HMAC SHA256 with `crypto.timingSafeEqual` |
| Amount validation | Server-side validation against order |
| Duplicate prevention | Tracks processed `payment_id`s |
| Input validation | Server-side sanitization |

---

## 🔌 API Endpoints

### POST `/payments/create-order`

Creates a Razorpay order and returns order details.

**Request:**
```json
{
  "amount": 500,
  "donor_name": "John Doe",
  "donor_email": "john@example.com"
}
```

**Response:**
```json
{
  "order_id": "order_xxxxx",
  "amount": 500,
  "currency": "INR",
  "key_id": "rzp_test_xxxxx"
}
```

### POST `/payments/verify`

Verifies payment signature and completes donation.

**Request:**
```json
{
  "razorpay_order_id": "order_xxxxx",
  "razorpay_payment_id": "pay_xxxxx",
  "razorpay_signature": "signature_hash",
  "amount": 500
}
```

**Response:**
```json
{
  "verified": true,
  "donation_id": "uuid-string",
  "message": "Payment verified successfully"
}
```

---

## 🧪 Testing

### Test Cards

| Card | Result |
|------|--------|
| `4111 1111 1111 1111` | Success |
| `4000 0000 0000 0002` | Failure |

### Edge Cases Handled

- Payment cancelled (modal dismissed)
- Payment failed
- Signature mismatch
- Duplicate verification request
- Network failure during verification

---

## 📦 Production Deployment

Before going live:

1. **Replace test credentials** with live Razorpay keys
2. **Add database integration** - Replace in-memory storage in `donationService.ts`
3. **Configure CORS** - Update `FRONTEND_URL` to production domain
4. **Enable HTTPS** - Required for live payments
5. **Add rate limiting** - Protect API endpoints
6. **Set up monitoring** - Log successful/failed payments

---

## 📞 Resources

- [Razorpay Dashboard](https://dashboard.razorpay.com/)
- [Razorpay Docs](https://razorpay.com/docs/)
- [Test Mode Guide](https://razorpay.com/docs/payments/test-mode/)
