import sampleData from './sample-data';
import { SUPERBASE_SERVICE_ROLE_KEY, SUPABASE_URL } from '@/lib/constants';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  SUPABASE_URL as string,
  SUPERBASE_SERVICE_ROLE_KEY as string
);

async function seedData(): Promise<void> {
  await supabase.from('_users').delete();

  const { error } = await supabase.from('_users').insert(sampleData.users);
  if (error) {
    console.error(error);
    return;
  }

  console.log('Data seeded successfully');
}

void seedData();
