# How to Get Your Supabase Keys

## Quick Steps:

1. **Go to your Supabase Dashboard**
   - Visit: https://app.supabase.com/project/vcvwwuctacglcqxqoyne

2. **Navigate to Settings → API**
   - In the left sidebar, click "Settings"
   - Then click "API"

3. **Find your keys:**
   - **Project URL**: `https://vcvwwuctacglcqxqoyne.supabase.co` (you already have this)
   - **Anon (public) key**: This is what you need - it's a long string starting with `eyJ...`

4. **Copy the Anon Key**
   - Click the copy button next to "anon public"
   - This key is safe to use in frontend applications

5. **Update your .env.local file**
   Replace `your_supabase_anon_key_here` with the actual key:
   ```
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...your-actual-key-here...
   ```

## Alternative: Direct Database Connection

If you prefer, you can also connect directly to the database. Your connection string format would be:
```
postgresql://postgres:[YOUR-DB-PASSWORD]@db.vcvwwuctacglcqxqoyne.supabase.co:5432/postgres
```

The database password can be found in:
- Supabase Dashboard → Settings → Database → Database Password

## Important Notes:

- The **anon key** is safe to expose in frontend code
- The **service key** should NEVER be exposed in frontend code
- The **database password** should NEVER be exposed in frontend code

## Testing the Connection

Once you have the anon key, you can test it by running:
```bash
npm run dev
```

Then visit http://localhost:3000/projects to see if it loads data from Supabase.