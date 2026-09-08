import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const validUrl = (url && url.startsWith('http')) 
  ? url 
  : 'https://cwjsxzpfgndmdwulkwte.supabase.co';

const validKey = (key && key.length > 5) 
  ? key 
  : 'sb_publishable_KK0c9VjIoq6qeyaUT4rfIQ_y3YukrYi';

export const supabase = createClient(validUrl, validKey);