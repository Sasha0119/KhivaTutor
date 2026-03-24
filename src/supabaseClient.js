import { createClient } from '@supabase/supabase-js' // Changed 'client' to 'js'

// Vite uses 'import.meta.env' to read your variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)