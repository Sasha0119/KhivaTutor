import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://luxudxcynqwiyhizbiwh.supabase.co'
const supabaseAnonKey = 'sb_publishable_g-TaZwNChnm6Twud7w_PeQ_q0mFnpGz'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)