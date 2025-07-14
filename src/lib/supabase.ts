import { createClient } from '@supabase/supabase-js'
import { Database } from '@/types/supabase'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://vcvwwuctacglcqxqoyne.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Only create client if we have both URL and key
let supabase: ReturnType<typeof createClient<Database>> | null = null

if (supabaseUrl && supabaseAnonKey && supabaseAnonKey !== 'your_supabase_anon_key_here') {
  supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
    },
  })
} else {
  console.warn('Supabase credentials not configured. Please set NEXT_PUBLIC_SUPABASE_ANON_KEY in your environment variables.')
}

export { supabase }
export default supabase