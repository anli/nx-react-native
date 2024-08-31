import { PageScrollView, renderPageContent } from '@shared/ui';

import { settingsPageConfig, components } from '../model/page-config';

export const SettingsPage = () => (
  <PageScrollView title={settingsPageConfig.title}>
    {renderPageContent(settingsPageConfig.children, components)}
  </PageScrollView>
);
