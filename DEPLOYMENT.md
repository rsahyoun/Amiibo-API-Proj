# Deployment Guide - Amiibo API Project

## Quick Deploy to Render (Free & Easy)

### Step 1: Push Latest Changes to GitHub
Make sure all your changes are committed and pushed:
```bash
git add .
git commit -m "Add view engine config and prepare for deployment"
git push origin main
```

### Step 2: Deploy to Render

1. **Go to Render**: https://render.com
   - Sign up for a free account (you can use your GitHub account)

2. **Create a New Web Service**:
   - Click "New +" button
   - Select "Web Service"
   - Connect your GitHub account if prompted
   - Select your repository: `Amiibo-API-Proj`

3. **Configure Your Service**:
   - **Name**: `amiibo-api` (or any name you like)
   - **Region**: Choose closest to you
   - **Branch**: `main` (or your default branch)
   - **Root Directory**: Leave blank (or `.` if needed)
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start` ⚠️ **Make sure this is exactly `npm start` (not `npm index.js` or anything else)**
   - **Plan**: Select "Free" plan

4. **Deploy**:
   - Click "Create Web Service"
   - Render will automatically build and deploy your app
   - Wait 2-3 minutes for the build to complete

5. **Your App is Live!**:
   - Render will give you a URL like: `https://amiibo-api.onrender.com`
   - Your app will be accessible to anyone with this URL!

### Important Notes:
- **Free tier limitations**: 
  - Apps spin down after 15 minutes of inactivity
  - First request after spin-down may take 30-60 seconds
  - 750 hours/month free (enough for most projects)

- **Your app uses**: `process.env.PORT` which Render automatically sets ✅

---

## Alternative: Railway (Also Free)

1. Go to https://railway.app
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Railway auto-detects Node.js and deploys automatically!
6. You'll get a URL like: `https://your-app.up.railway.app`

---

## Testing Your Deployment

After deployment, test these URLs:
- `https://your-app.onrender.com/` - Home page
- `https://your-app.onrender.com/amiibo?name=Bowser+Jr.` - Search
- `https://your-app.onrender.com/info` - Info page

---

## Troubleshooting

If deployment fails:
1. Check build logs in Render dashboard
2. Make sure `package.json` has all dependencies
3. Verify `npm start` works locally
4. Check that all files are pushed to GitHub

