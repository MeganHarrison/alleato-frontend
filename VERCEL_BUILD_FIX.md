# Vercel Build Fix

## 🔧 **Problem Fixed**
The Next.js build was failing because of a problematic rewrite rule in `next.config.js`:
```
`destination` does not start with `/`, `http://`, or `https://` for route {"source":"/api/:path*","destination":"intelligencesystem-production.up.railway.app/api/:path*"}
```

## ✅ **Solution Applied**
1. **Removed the rewrite rules** from `next.config.js`
2. **Simplified the configuration** to only include essential settings
3. **The frontend components already use full URLs** with `NEXT_PUBLIC_API_URL`

## 📋 **Updated next.config.js**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
  },
};

module.exports = nextConfig;
```

## 🚀 **Next Steps**

### **1. Push to Frontend Repository**
You need to push this fix to your frontend repository:
```bash
# If you're using the alleato-frontend repository
git remote remove origin
git remote add origin https://github.com/MeganHarrison/alleato-frontend.git
git push -u origin main
```

### **2. Set Environment Variable in Vercel**
1. Go to Vercel Dashboard
2. Select your project: `alleato-frontend-agents`
3. Go to **Settings** → **Environment Variables**
4. Add:
   - **Name**: `NEXT_PUBLIC_API_URL`
   - **Value**: `https://intelligencesystem-production.up.railway.app`
   - **Environment**: Production (or All)
5. Click **Save**

### **3. Redeploy**
1. Go to **Deployments** tab
2. Click **"Redeploy"** on the latest deployment
3. The build should succeed now

## 🔧 **Why This Works**

- **No rewrites**: Removes the problematic rewrite rules
- **Direct API calls**: Components use full URLs with `NEXT_PUBLIC_API_URL`
- **Simplified config**: Only essential Next.js configuration
- **Environment variable**: Vercel will inject the backend URL at build time

## 📋 **Expected Result**
1. ✅ **Build succeeds** (no more rewrite errors)
2. ✅ **Frontend deploys** successfully to Vercel
3. ✅ **API calls work** using the environment variable
4. ✅ **Projects page loads** with data from Railway backend

Your frontend should build and deploy successfully now!