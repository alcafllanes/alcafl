import { createClient } from '@supabase/supabase-js';

// falls back to placeholder values so the build does not crash if env vars
// are not set yet, the form will just fail at runtime with a normal error
// instead of taking down the whole site
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
