import { createClient } from '@supabase/supabase-js'

// DB = qbAtRwIlVLAkK45C

const SUPABASE_URL = 'https://ofvslekaxlshtppeaxrl.supabase.co'
const SUPABASE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9mdnNsZWtheGxzaHRwcGVheHJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1Nzk1NTksImV4cCI6MjA1ODE1NTU1OX0.uuEGgIja5y8LLOdOCkr8ERV05Z0Oh1xoghbkaJvaeuc'

const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY)
export default supabase