import {
  DarkModeCard,
  DarkModeCardProps,
  settingsComponents,
} from '@entities/settings';
import { SignOutCard } from '@features/authentication';
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
        { componentName: 'DarkModeWidget' as const, className: 'mx-4' },
      ],
    },
    {
      componentName: 'List.Section' as const,
      children: [
        { componentName: 'List.Subheader' as const, children: 'Account' },
        { componentName: 'SignOutCard' as const, className: 'mx-4' },
      ],
    },
  ],
};

const DarkModeWidget = (props: DarkModeCardProps) => (
  <DarkModeCard {...props} titleProps={{ right: () => <DarkModeSwitch /> }} />
);

const additionalComponents = {
  ...settingsComponents,
  DarkModeWidget: <DarkModeWidget />,
  SignOutCard: <SignOutCard />,
};

export const SettingsPage = () => (
  <PageScrollView title={pageConfig.title}>
    {renderPageContent(pageConfig.children, additionalComponents)}
  </PageScrollView>
);
