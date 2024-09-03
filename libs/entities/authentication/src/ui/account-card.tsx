import { getProfile } from '@shared/api';
import { useQuery } from '@supabase-cache-helpers/postgrest-react-query';
import { Card, CardProps, IconButton } from 'react-native-paper';

import { useSession } from '../model/session-provider';

const useQueryProfile = (userId = '') =>
  useQuery(getProfile(userId), { enabled: !!userId });

type AccountCardProps = Omit<CardProps, 'children' | 'elevation'>;

export const AccountCard = (props: AccountCardProps) => {
  const { data: session } = useSession();
  const { data: profile } = useQueryProfile(session?.user.id);

  const handlePresentAccount = () => {
    // TODO: show account page
  };

  return (
    <Card mode="contained" {...props} onPress={handlePresentAccount}>
      <Card.Title
        title={profile?.fullName ?? ''}
        subtitle="Manage your account"
        right={() => <IconButton icon="chevron-right" />}
      />
    </Card>
  );
};
