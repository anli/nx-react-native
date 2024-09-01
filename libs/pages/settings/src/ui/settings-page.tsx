import { usePageContent } from '@entities/page';
import { PageScrollView } from '@shared/ui';
import { PageWidget } from '@widgets/page';

export const SettingsPage = () => {
  const { data } = usePageContent('settings-page');

  return (
    <PageScrollView title={data?.title}>
      <PageWidget id="settings-page" />
    </PageScrollView>
  );
};
