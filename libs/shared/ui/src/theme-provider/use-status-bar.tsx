import { useEffect } from 'react';
import { ColorSchemeName, StatusBar as NativeStatusBar } from 'react-native';

const statusBarStyles = {
  dark: 'light-content',
  light: 'dark-content',
} as const;

export const useStatusBar = (themeName: ColorSchemeName) => {
  const statusBarStyle = statusBarStyles[themeName ?? 'light'];

  useEffect(() => {
    NativeStatusBar.setBarStyle(statusBarStyle);
  }, [statusBarStyle]);

  return NativeStatusBar;
};
