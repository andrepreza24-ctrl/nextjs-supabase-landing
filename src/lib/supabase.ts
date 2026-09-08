import { createClient } from '@supabase/supabase-js';

const FALLBACK_URL = 'https://cwjsxzpfgndmdwulkwte.supabase.co';
const FALLBACK_KEY = 'sb_publishable_KK0c9VjIoq6qeyaUT4rfIQ_y3YukrYi';

function getSupabaseUrl(): string {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (url && (url.startsWith('http://') || url.startsWith('https://'))) {
    return url;
  }
  return FALLBACK_URL;
}

function getSupabaseKey(): string {
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (key && key.trim().length > 0) {
    return key;
  }
  return FALLBACK_KEY;
}

export const supabase = createClient(getSupabaseUrl(), getSupabaseKey());