import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://cwjsxzpfgndmdwulkwte.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_KK0c9VjIoq6qeyaUT4rfIQ_y3YukrYi';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);