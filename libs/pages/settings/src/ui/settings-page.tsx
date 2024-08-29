import { DarkModeCard, settingsComponents } from '@entities/settings';
import { DarkModeSwitch } from '@features/settings';
import { PageScrollView, renderPageContent } from '@shared/ui';

const pageConfig = {
  title: 'Settings',
  children: [
    {
      componentName: 'List.Section' as const,
      children: [
        { componentName: 'List.Subheader' as const, children: 'About' },
        { componentName: 'VersionCard' as const, className: 'mx-4' },
      ],
    },
    {
      componentName: 'List.Section' as const,
      children: [
        { componentName: 'List.Subheader' as const, children: 'Appearance' },
        { componentName: 'DarkModeCard' as const, className: 'mx-4' },
      ],
    },
  ],
};

const additionalComponents = {
  ...settingsComponents,
  DarkModeCard: (
    <DarkModeCard titleProps={{ right: () => <DarkModeSwitch /> }} />
  ),
};

export const SettingsPage = () => (
  <PageScrollView title={pageConfig.title}>
    {renderPageContent(pageConfig.children, additionalComponents)}
  </PageScrollView>
);
