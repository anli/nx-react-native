import { PaperProvider, ProviderProps } from 'react-native-paper';
import { ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { useTheme } from './use-theme';
import { useNavigationBar } from './use-navigation-bar';

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
