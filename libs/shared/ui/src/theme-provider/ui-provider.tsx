import { useEffect } from 'react';

import { ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import * as SystemUI from 'expo-system-ui';
import { PaperProvider, ProviderProps } from 'react-native-paper';
import { useAppColorScheme, useDeviceContext } from 'twrnc';

import { tw } from '../tailwind';

import { useNavigationBar } from './use-navigation-bar';
import { useStatusBar } from './use-status-bar';
import { ThemeProvider, useTheme } from './use-theme';

const ThemeDependentProvider = ({ children, ...rest }: ProviderProps) => {
  const { theme, themeName } = useTheme();
  const [, , setColorScheme] = useAppColorScheme(tw);

  useStatusBar(themeName);
  useNavigationBar(theme);
  useDeviceContext(tw, {
    observeDeviceColorSchemeChanges: false,
    initialColorScheme: 'device',
  });
  useEffect(() => {
    setColorScheme(themeName);
    void SystemUI.setBackgroundColorAsync(theme.colors.background);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [themeName]);

  return (
    <NavigationThemeProvider value={theme}>
      <PaperProvider theme={theme} {...rest}>
        {children}
      </PaperProvider>
    </NavigationThemeProvider>
  );
};

export const UiProvider = ({ children, ...rest }: ProviderProps) => {
  const { theme } = useTheme();
  useNavigationBar(theme);
  useDeviceContext(tw);

  return (
    <ThemeProvider>
      <ThemeDependentProvider {...rest}>{children}</ThemeDependentProvider>
    </ThemeProvider>
  );
};
