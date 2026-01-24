# Wings of Wisdom Foundation - Official Website

> Empowering communities through education, health, and sustainable development

## 🌟 About

Official website for **Wings of Wisdom Foundation®**, a registered NGO dedicated to transforming lives across India through community empowerment, education, women's rights, and sustainable development programs.

**Live Website:** https://www.wingsofwisdomfoundation.org

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Frontend Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The frontend will run at `http://localhost:8080`

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file (see .env.example)
cp .env.example .env

# Add your Razorpay credentials to .env

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The backend will run at `http://localhost:5000`

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library
- **Framer Motion** - Animations
- **React Router** - Routing

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **TypeScript** - Type safety
- **Razorpay SDK** - Payment integration

---

## 📁 Project Structure

```
wings-of-wisdom-foundation/
├── src/                    # Frontend source code
│   ├── components/         # React components
│   ├── pages/             # Page components
│   ├── services/          # API services
│   └── types/             # TypeScript types
├── backend/               # Backend server
│   ├── src/
│   │   ├── config/        # Configuration
│   │   ├── controllers/   # Request handlers
│   │   ├── routes/        # API routes
│   │   └── services/      # Business logic
│   └── .env.example       # Environment template
├── public/                # Static assets
└── package.json          # Frontend dependencies
```

---

## 🔐 Environment Variables

### Backend (.env)

```env
# Razorpay Configuration
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret_key

# Server Configuration
PORT=5000
NODE_ENV=production
FRONTEND_URL=https://your-frontend-url
```

### Frontend (Digital Ocean App Platform)

```env
VITE_API_URL=https://your-backend-url
```

---

## 🚢 Deployment

### Digital Ocean App Platform (Recommended)

**Frontend (Static Site):**
- Build Command: `npm run build`
- Output Directory: `dist`
- Environment: `VITE_API_URL`

**Backend (Web Service):**
- Build Command: `cd backend && npm install && npm run build`
- Run Command: `cd backend && npm start`
- Port: `5000`
- Environment Variables: All backend .env variables

**Total Cost:** $5/month ($0 frontend + $5 backend)

---

## 💳 Payment Integration

This project uses **Razorpay** for secure donation processing.

### Setup Razorpay:
1. Create account at https://razorpay.com
2. Get API keys from Dashboard → Settings → API Keys
3. Add keys to backend `.env` file
4. Test in sandbox mode first
5. Switch to live mode for production

---

## 🎨 Key Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark mode support
- ✅ Secure payment processing with Razorpay
- ✅ Dynamic image galleries
- ✅ Contact form
- ✅ SEO optimized
- ✅ Fast loading (Vite + lazy loading)
- ✅ Accessible (WCAG compliant)

---

## 📄 Pages

- **Home** - Hero, programs, impact stats
- **About** - Who We Are, Vision & Mission, Team
- **Programs** - Thematic areas, active campaigns
- **Impact** - Statistics, success stories
- **Donate** - Razorpay integration, bank transfer, UPI
- **Gallery** - Photo galleries by category
- **Contact** - Contact form and details
- **Partners** - Partner organizations

---

## 🤝 Contributing

This is a private project for Wings of Wisdom Foundation. For any updates or changes, please contact the development team.

---

## 📞 Support

**Wings of Wisdom Foundation**  
Email: contact@wingsofwisdomfoundation.org  
Website: https://www.wingsofwisdomfoundation.org

---

## 📝 License

© 2024 Wings of Wisdom Foundation. All rights reserved.

This project is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

---

## 🙏 Acknowledgments

Built with ❤️ for Wings of Wisdom Foundation - Making a difference in communities across India.
