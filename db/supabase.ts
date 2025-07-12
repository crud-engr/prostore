import { SUPABASE_KEY, SUPABASE_URL } from '@/lib/constants';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
export default supabase;
