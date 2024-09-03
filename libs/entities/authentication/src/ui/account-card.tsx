import { Link } from 'expo-router';
import { Card, CardProps, IconButton } from 'react-native-paper';

import { useSession } from '../model/session-provider';
import { useQueryProfile } from '../model/use-query-profile';

type AccountCardProps = Omit<CardProps, 'children' | 'elevation'>;

export const AccountCard = (props: AccountCardProps) => {
  const { data: session } = useSession();
  const { data: profile } = useQueryProfile(session?.user.id);

  return (
    <Link href="/profile" asChild>
      <Card mode="contained" {...props}>
        <Card.Title
          title={profile?.fullName ?? ''}
          subtitle="Manage your account"
          right={() => <IconButton icon="chevron-right" />}
        />
      </Card>
    </Link>
  );
};
