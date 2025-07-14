import { createClient } from '@supabase/supabase-js'
import { Database } from '@/types/supabase'

// TEMPORARY HARDCODED VALUES FOR TESTING
// TODO: Remove this file and use environment variables in production
const supabaseUrl = 'https://vcvwwuctacglcqxqoyne.supabase.co'
const supabaseAnonKey = 'YOUR_ANON_KEY_HERE' // You need to get this from your Supabase dashboard

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
  },
})

export default supabase