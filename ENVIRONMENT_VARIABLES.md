# Environment Variables Required for Vercel Deployment

## Required Variables

### 1. API Connection (Choose ONE approach)

#### Option A: Direct API Connection (Currently using)
```
NEXT_PUBLIC_API_URL=https://intelligencesystem-production.up.railway.app
```

#### Option B: Supabase Connection (Future)
```
NEXT_PUBLIC_SUPABASE_URL=https://vcvwwuctacglcqxqoyne.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_ANON_KEY_FROM_SUPABASE_DASHBOARD
```

## Setting Environment Variables in Vercel

1. Go to your Vercel Dashboard
2. Select your project: `alleato-frontend-agents`
3. Go to **Settings** → **Environment Variables**
4. Add each variable:
   - **Name**: Variable name (e.g., `NEXT_PUBLIC_API_URL`)
   - **Value**: Variable value (e.g., `https://intelligencesystem-production.up.railway.app`)
   - **Environment**: Production (or All)
5. Click **Save**
6. **Important**: Redeploy your application after adding/changing variables

## Current Status

- ✅ `NEXT_PUBLIC_API_URL` - Should be set to Railway API URL
- ❌ `NEXT_PUBLIC_SUPABASE_URL` - Not needed if using API directly
- ❌ `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Not needed if using API directly

## Temporary Hardcoded Test

The projects page currently has a hardcoded API URL for testing:
```javascript
const apiUrl = 'https://intelligencesystem-production.up.railway.app';
```

This should be replaced with:
```javascript
const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
```

## Files Updated

1. `/src/app/projects/page.tsx` - Temporarily hardcoded API URL
2. `/src/stores/chat-store.ts` - Fixed to use environment variable
3. `/src/app/dashboard/page 2.tsx` - Fixed to use environment variable

## Backup Files Created

- `/src/app/projects/page-supabase-backup.tsx` - Original Supabase version
- `/src/app/projects/page-api-test.tsx` - Test version with hardcoded API
- `/src/lib/supabase-test.ts` - Test Supabase config (needs anon key)

## Next Steps

1. Ensure `NEXT_PUBLIC_API_URL` is set in Vercel
2. Redeploy the application
3. Test the projects page
4. Once working, update the hardcoded URL to use the environment variable