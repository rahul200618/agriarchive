
import { createClient } from '@supabase/supabase-js';

// Direct Supabase URL - bypasses the agri-backend-plux proxy which causes CORS errors on production
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ufonvdazjkvxtvjeqcuw.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmb252ZGF6amt2eHR2amVxY3V3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk1MzAwODYsImV4cCI6MjA5NTEwNjA4Nn0.CFm84fONzXu2v1EaxI4VC4tp_dfdjBFOladdPZHAEak';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
