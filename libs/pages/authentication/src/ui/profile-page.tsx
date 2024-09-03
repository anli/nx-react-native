import { useEffect } from 'react';

import { usePageContent } from '@entities/page';
import { Page, tw } from '@shared/ui';
import { PageWidget } from '@widgets/page';
import { useNavigation } from 'expo-router';

export const ProfilePage = () => {
  const navigation = useNavigation();
  const { data } = usePageContent('profile-page');

  useEffect(() => {
    navigation.setOptions({
      headerTitle: data?.title,
    });
  }, [data, navigation]);

  return (
    <Page
      edges={['bottom']}
      style={tw`flex-1 bg-background dark:bg-dark-background`}
    >
      <PageWidget id="profile-page" />
    </Page>
  );
};
