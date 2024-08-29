import { ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { PaperProvider, ProviderProps } from 'react-native-paper';
import { useDeviceContext } from 'twrnc';

import { StatusBar } from '../status-bar';
import { tw } from '../tailwind';

import { useNavigationBar } from './use-navigation-bar';
import { ThemeProvider, useTheme } from './use-theme';

const ThemeDependentProvider = ({ children, ...rest }: ProviderProps) => {
  const { theme } = useTheme();
  useNavigationBar(theme);
  useDeviceContext(tw);

  return (
    <NavigationThemeProvider value={theme}>
      <PaperProvider theme={theme} {...rest}>
        <StatusBar />
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
