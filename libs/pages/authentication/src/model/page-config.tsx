import { SignInButton } from '@features/authentication';

export const pageComponents = {
  SignInButton: <SignInButton />,
};

// TODO: migrate to backend
export const signInPageConfig = {
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
};
