import { StatusBar as NativeStatusBar } from 'expo-status-bar';

import { useTheme } from './use-theme';

const statusBarStyle = {
  dark: 'light',
  light: 'dark',
} as const;

export const StatusBar = () => {
  const { themeName } = useTheme();

  return (
    <NativeStatusBar style={themeName ? statusBarStyle[themeName] : 'auto'} />
  );
};
