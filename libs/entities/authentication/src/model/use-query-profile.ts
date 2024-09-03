import { getProfile } from '@shared/api';
import { useQuery } from '@supabase-cache-helpers/postgrest-react-query';

export const useQueryProfile = (userId = '') =>
  useQuery(getProfile(userId), { enabled: !!userId });
