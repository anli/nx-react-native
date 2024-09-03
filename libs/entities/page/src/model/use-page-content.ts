const pages = [
  {
    id: 'settings-page',
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
          { componentName: 'AccountCard', className: 'mx-4 rounded-b-none' },
          {
            componentName: 'Divider',
            className:
              'mx-4 bg-outlineVariant dark:bg-dark-onSecondaryContainer',
          },
          { componentName: 'SignOutCard', className: 'mx-4 rounded-t-none' },
        ],
      },
    ],
  },
  {
    id: 'task-list-page',
    title: 'Today',
    children: [
      {
        componentName: 'TaskListWidget',
      },
    ],
  },
  {
    id: 'sign-in-page',
    children: [
      {
        componentName: 'View',
        className: 'flex-1',
        children: [
          {
            componentName: 'Image',
            className: 'w-full h-full',
            source: 'https://i.imgur.com/47qQtEU.png',
          },
        ],
      },
      {
        componentName: 'View',
        className: 'justify-end gap-4 my-6',
        children: [
          {
            componentName: 'Text',
            className: 'text-3xl font-bold mx-4',
            children: 'Welcome',
          },
          {
            componentName: 'Text',
            className: 'text-lg mx-4',
            children:
              'Your personal productivity hub awaits. Log in to start organizing your tasks, boosting your efficiency, and achieving your goals with ease.',
          },
          { componentName: 'SignInButton', className: 'mx-4' },
        ],
      },
    ],
  },
  {
    id: 'profile-page',
    title: 'Profile',
    children: [
      {
        componentName: 'ProfileForm',
        className: 'text-lg mx-4',
      },
    ],
  },
];

export const usePageContent = (pageId: string) => ({
  data: pages.find((_page) => _page.id === pageId),
});
