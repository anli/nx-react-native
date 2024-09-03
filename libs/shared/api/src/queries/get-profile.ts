import { Database, supabase } from '@shared/lib';
import { SupabaseClient } from '@supabase/supabase-js';

export const getProfile = (
  userId: string,
  client: SupabaseClient<Database> = supabase
) =>
  client
    .from('profiles')
    .select(
      `
    username,
    fullName: full_name,
    avatarUrl: avatar_url
  `
    )
    .eq('id', userId)
    .throwOnError()
    .single();
