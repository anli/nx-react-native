import { useSession } from '@entities/authentication';
import { Card, CardProps, IconButton } from 'react-native-paper';

type SignOutCardProps = Omit<CardProps, 'children' | 'elevation'>;

export const SignOutCard = (props: SignOutCardProps) => {
  const { signOut } = useSession();
  const handleSignOut = () => {
    // show confirmation dialog and log out user
    void signOut();
  };

  return (
    <Card mode="contained" {...props} onPress={handleSignOut}>
      <Card.Title
        title="Sign Out"
        right={() => <IconButton icon="chevron-right" />}
      />
    </Card>
  );
};
