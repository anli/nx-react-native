import {
  DarkModeCard,
  DarkModeCardProps,
  settingsComponents,
} from '@entities/settings';
import { SignOutCard } from '@features/authentication';
import { DarkModeSwitch } from '@features/settings';

const DarkModeWidget = (props: DarkModeCardProps) => (
  <DarkModeCard {...props} titleProps={{ right: () => <DarkModeSwitch /> }} />
);

export const components = {
  ...settingsComponents,
  DarkModeWidget: <DarkModeWidget />,
  SignOutCard: <SignOutCard />,
};

// TODO: migrate to backend
export const settingsPageConfig = {
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
