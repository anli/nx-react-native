import { ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { PaperProvider, ProviderProps } from 'react-native-paper';

import { useNavigationBar } from './use-navigation-bar';
import { useTheme } from './use-theme';

export const ThemeProvider = ({ children, ...rest }: ProviderProps) => {
  const theme = useTheme();
  useNavigationBar(theme);

  return (
    <NavigationThemeProvider value={theme}>
      <PaperProvider theme={theme} {...rest}>
        {children}
      </PaperProvider>
    </NavigationThemeProvider>
  );
};
