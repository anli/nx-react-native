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
  ],
};

export const SettingPage = () => (
  <PageScrollView title={pageConfig.title}>
    {renderPageContent(pageConfig.children)}
  </PageScrollView>
);
