import * as NavigationBar from 'expo-navigation-bar';
import { useEffect } from 'react';
import { Theme } from './use-theme';
import { Platform } from 'react-native';

export const useNavigationBar = (theme: Theme) => {
  const navigationBarColor = theme.colors.elevation.level2;

  useEffect(() => {
    Platform.OS === 'android' &&
      NavigationBar.setBackgroundColorAsync(navigationBarColor);
  }, [navigationBarColor]);

  return NavigationBar;
};
