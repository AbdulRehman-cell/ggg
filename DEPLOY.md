# Deployment Guide

### Prerequisites
1. A MongoDB URI (from MongoDB Atlas or similar).
2. A Render.com account.

### Step-by-Step
1. **Prepare Environment**: Copy `.env.example` to `.env` and fill in your `MONGO_URI`.
2. **Push to GitHub**: Push your code to a repository.
3. **Connect to Render**:
   - Go to [Render Dashboard](https://dashboard.render.com).
   - Click **New +** -> **Web Service**.
   - Connect your GitHub repo.
   - Set the `Root Directory` to blank (root).
   - Set `Build Command` to `npm install && npm run build`.
   - Set `Start Command` to `node server/index.js`.
4. **Environment Variables**: Add `MONGO_URI` and `NODE_ENV=production` in the "Environment" tab.
5. **Deploy**: Click **Create Web Service**. 

### Commands
```bash
# 1. Install dependencies
npm install
# 2. Test build locally
npm run build
# 3. Commit and push
git push origin main