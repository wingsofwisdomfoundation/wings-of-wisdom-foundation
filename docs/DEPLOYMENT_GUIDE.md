# Digital Ocean Deployment Guide - Wings of Wisdom Foundation

**Complete step-by-step guide to deploy your website to Digital Ocean App Platform**

**Total Cost:** $5/month ($0 frontend + $5 backend)

---

## 📋 **What You Need Before Starting:**

- [x] Digital Ocean account login
- [x] GitHub repository: https://github.com/wingsofwisdomfoundation/wings-of-wisdom-foundation
- [x] Razorpay Key ID (starts with `rzp_`)
- [x] Razorpay Secret Key

---

## 🚀 **STEP 1: Login to Digital Ocean**

1. Go to: **https://cloud.digitalocean.com**
2. Login with client's credentials
3. You should see the Digital Ocean dashboard

---

## 🔗 **STEP 2: Connect GitHub to Digital Ocean**

### **2.1 Create New App**

1. Click the **"Create"** button (top right, green button)
2. Select **"Apps"** from the dropdown

### **2.2 Choose Source**

1. You'll see "Create App" page
2. Under **"Service Provider"**, select **"GitHub"**
3. Click **"Manage Access"** or **"Authorize GitHub"**

### **2.3 Authorize GitHub**

1. A GitHub popup will appear
2. Login to GitHub if needed (use client credentials)
3. GitHub will ask to authorize Digital Ocean
4. Click **"Authorize DigitalOcean"**
5. Select: **"All repositories"** OR **"Only select repositories"**
   - If "Only select": Choose `wings-of-wisdom-foundation`
6. Click **"Install & Authorize"**

### **2.4 Select Repository**

1. Back on Digital Ocean
2. Under **"Repository"**, select: `wingsofwisdomfoundation/wings-of-wisdom-foundation`
3. Under **"Branch"**, select: `main`
4. Leave **"Source Directory"** as `/` (root)
5. Check **"Autodeploy"** (recommended - auto-deploys on git push)
6. Click **"Next"**

---

## ⚙️ **STEP 3: Configure Apps (IMPORTANT!)**

Digital Ocean will auto-detect your apps. You should see **2 components**:

### **Component 1: Frontend (Static Site)**

**Digital Ocean should detect:**
- **Name:** `wings-of-wisdom-foundation` (you can rename to `frontend`)
- **Type:** `Static Site`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

**What to do:**
1. Click **"Edit"** next to this component
2. **Resource Size:** Select **"Basic ($0/mo)** ✅ FREE
3. **Build Command:** Confirm it's `npm run build`
4. **Output Directory:** Confirm it's `dist`
5. Click **"Save"**

---

### **Component 2: Backend (Web Service)**

**Digital Ocean might detect:**
- **Name:** `backend` or similar
- **Type:** `Web Service`

**If NOT detected, add manually:**

1. Click **"+ Add Component"**
2. Select **"Web Service"**
3. Configure as follows:

**BACKEND CONFIGURATION:**

| Setting | Value |
|---------|-------|
| **Name** | `backend` |
| **Source Directory** | `backend` |
| **Build Command** | `npm install && npm run build` |
| **Run Command** | `npm start` |
| **Port** | `5000` |
| **Resource Size** | **Basic - $5/mo** |

**Environment Plan:**
- Basic ($5/month)
- 512 MB RAM / 1 vCPU

**Steps:**
1. Click **"Edit Plan"**
2. Select **"Basic ($5/month)**
3. Click **"Back"**

---

## 🔐 **STEP 4: Add Environment Variables**

### **4.1 Frontend Environment Variables**

1. Click on **"Frontend"** component
2. Scroll to **"Environment Variables"**
3. Click **"Edit"** or **"Add Variable"**
4. Add:

```
Key: VITE_API_URL
Value: ${backend.PUBLIC_URL}
Type: Plain text
```

**Note:** Use the special variable `${backend.PUBLIC_URL}` - Digital Ocean will auto-fill this with the backend URL!

### **4.2 Backend Environment Variables**

1. Click on **"Backend"** component
2. Scroll to **"Environment Variables"**
3. Click **"Edit"** or **"Add Variable"**
4. Add these **5 variables:**

```
Key: RAZORPAY_KEY_ID
Value: [PASTE YOUR RAZORPAY KEY ID HERE]
Type: Secret (recommended)

Key: RAZORPAY_KEY_SECRET
Value: [PASTE YOUR RAZORPAY SECRET HERE]
Type: Secret (recommended)

Key: PORT
Value: 5000
Type: Plain text

Key: NODE_ENV
Value: production
Type: Plain text

Key: FRONTEND_URL
Value: ${frontend.PUBLIC_URL}
Type: Plain text
```

**Important:**
- Mark Razorpay keys as **"Secret"** for security
- Use `${frontend.PUBLIC_URL}` for FRONTEND_URL - auto-fills!

---

## 📝 **STEP 5: Review & Deploy**

### **5.1 Review Configuration**

You should see:

**App Name:** `wings-of-wisdom-foundation`

**Components:**
1. ✅ **frontend** (Static Site) - $0/month
2. ✅ **backend** (Web Service) - $5/month

**Total:** $5/month

**Region:** Choose closest to India:
- **Singapore** (recommended for India)
- OR **Bangalore** (if available)

### **5.2 Create Resources**

1. Review everything looks correct
2. Click **"Create Resources"** (bottom right, blue button)

---

## ⏳ **STEP 6: Wait for Deployment**

### **What happens now:**

1. **Building** (5-10 minutes)
   - Digital Ocean downloads code from GitHub
   - Installs dependencies
   - Builds both apps

2. **Deploying** (1-2 minutes)
   - Deploys to servers
   - Sets up URLs
   - Configures routing

**You'll see:**
- 🔵 Blue dots = Building
- 🟢 Green checkmarks = Success
- 🔴 Red X = Error (check logs)

**Progress:**
- Frontend building...
- Backend building...
- Deploying...
- **Success!** ✅

---

## 🎉 **STEP 7: Get Your URLs**

### **After deployment completes:**

1. Go to your app dashboard
2. You'll see **2 URLs:**

**Frontend URL:**
```
https://frontend-xxxxx.ondigitalocean.app
```

**Backend URL:**
```
https://backend-xxxxx.ondigitalocean.app
```

**Important:** Copy both URLs!

---

## ✅ **STEP 8: Test Your Website**

### **8.1 Test Frontend**

1. Open frontend URL in browser
2. **Check:**
   - ✅ Home page loads
   - ✅ All pages accessible
   - ✅ Images load
   - ✅ No console errors

### **8.2 Test Backend**

1. Open backend URL + `/health`
   - Example: `https://backend-xxxxx.ondigitalocean.app/health`
2. **Should see:**
   ```json
   {"status":"ok","timestamp":"2026-01-24T..."}
   ```

### **8.3 Test Payment Integration**

1. Go to **Donate page** on frontend
2. Try to make a test donation
3. **Check:**
   - ✅ Razorpay form opens
   - ✅ Can select amount
   - ✅ Form submits
   - ✅ Payment modal appears

**Use Razorpay test card:**
```
Card Number: 4111 1111 1111 1111
CVV: 123
Expiry: Any future date
```

---

## 🌐 **STEP 9: Connect Custom Domain**

### **9.1 Add Domain to Digital Ocean**

1. In app dashboard, go to **"Settings"**
2. Scroll to **"Domains"**
3. Click **"Add Domain"**
4. Enter: `wingsofwisdomfoundation.org`
5. Choose component: **"frontend"**
6. Click **"Add Domain"**

### **9.2 Get DNS Records**

Digital Ocean will show you DNS records to add:

**Example:**
```
Type: A
Name: @
Value: 143.198.xxx.xxx

Type: CNAME
Name: www
Value: frontend-xxxxx.ondigitalocean.app
```

### **9.3 Update DNS on BigRock**

1. Login to BigRock
2. Go to Domain Management
3. Click on `wingsofwisdomfoundation.org`
4. Find **"DNS Management"** or **"Manage DNS"**
5. **Add/Update records:**
   - Delete old A record
   - Add new A record (from Digital Ocean)
   - Add CNAME for www (from Digital Ocean)
6. Save changes

**DNS Propagation:** Takes 24-48 hours

---

## 📊 **STEP 10: Monitor Deployment**

### **Check Deployment Status**

1. Go to app dashboard
2. Click **"Activity"**
3. See all deployments

### **View Logs**

1. Click on **"Runtime Logs"**
2. Select component (frontend or backend)
3. View real-time logs

### **Check Metrics**

1. Click **"Insights"**
2. See traffic, response times, errors

---

## 🎯 **Post-Deployment Checklist**

After deployment:

- [ ] Frontend loads at Digital Ocean URL
- [ ] Backend health check works
- [ ] All pages accessible
- [ ] Donation form works
- [ ] Razorpay integration works
- [ ] Images load correctly
- [ ] No console errors
- [ ] Mobile responsive works
- [ ] Contact form works
- [ ] Domain DNS updated (if applicable)

---

## 🚨 **Troubleshooting**

### **Build Failed?**

**Check:**
1. Click on failed component
2. Click **"View Logs"**
3. Read error message
4. Common issues:
   - Missing dependencies → Rebuild
   - Wrong build command → Edit & redeploy
   - Environment variables missing → Add them

### **Backend Not Working?**

**Check:**
1. Environment variables are set correctly
2. PORT is 5000
3. Backend logs for errors
4. Razorpay keys are correct

### **Frontend Not Connecting to Backend?**

**Check:**
1. `VITE_API_URL` is set to `${backend.PUBLIC_URL}`
2. CORS is enabled on backend (already done)
3. Both apps deployed successfully

### **Payment Not Working?**

**Check:**
1. Razorpay keys are correct (not swapped)
2. Using test mode keys for testing
3. Backend `/health` endpoint works
4. Check browser console for errors

---

## 💰 **Billing Information**

### **Monthly Cost Breakdown:**

| Component | Cost |
|-----------|------|
| Frontend (Static Site) | $0/month |
| Backend (Web Service) | $5/month |
| **Total** | **$5/month** |

**Billed:** Monthly
**Payment:** Credit/Debit card on account

### **Free Credits:**

If account has **$200 credit** (new accounts):
- 40 months FREE hosting!
- $200 / $5 = 40 months

---

## 🔄 **Future Updates**

### **How to Update Code:**

1. Make changes locally
2. Push to GitHub:
   ```bash
   git add .
   git commit -m "Update description"
   git push origin main
   ```
3. **Auto-deploys!** (if enabled)
4. Wait 5-10 minutes
5. Changes go live

No need to touch Digital Ocean!

---

## 📞 **Support**

**Digital Ocean Support:**
- Email: support@digitalocean.com
- Docs: https://docs.digitalocean.com/products/app-platform/
- Community: https://www.digitalocean.com/community

**Razorpay Support:**
- Email: support@razorpay.com
- Docs: https://razorpay.com/docs/

---

## ✅ **Summary**

**What you deployed:**
- ✅ React frontend (static site)
- ✅ Node.js backend (payment server)
- ✅ Razorpay integration
- ✅ Auto-deployments from GitHub
- ✅ SSL certificates (HTTPS)
- ✅ Production-ready setup

**Cost:** $5/month

**Status:** LIVE! 🎉

---

**Congratulations! Your website is now live on Digital Ocean!** 🚀
