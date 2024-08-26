import { useEffect } from 'react';
import { Platform } from 'react-native';

import * as NavigationBar from 'expo-navigation-bar';

import { Theme } from '../config';

export const useNavigationBar = (theme: Theme) => {
  const navigationBarColor = theme.colors.elevation.level2;

  useEffect(() => {
    Platform.OS === 'android' &&
      void NavigationBar.setBackgroundColorAsync(navigationBarColor);
  }, [navigationBarColor]);

  return NavigationBar;
};
