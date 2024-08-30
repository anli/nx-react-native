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
      componentName: 'List.Section',
      children: [
        { componentName: 'List.Subheader', children: 'About' },
        { componentName: 'VersionCard', className: 'mx-4' },
      ],
    },
    {
      componentName: 'List.Section',
      children: [
        { componentName: 'List.Subheader', children: 'Appearance' },
        { componentName: 'DarkModeWidget', className: 'mx-4' },
      ],
    },
    {
      componentName: 'List.Section',
      children: [
        { componentName: 'List.Subheader', children: 'Account' },
        { componentName: 'SignOutCard', className: 'mx-4' },
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
