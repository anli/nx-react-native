import { useColorScheme } from 'react-native';

import { Theme, darkTheme, lightTheme } from '../config';

export const useTheme = (): Theme => {
  const colorScheme = useColorScheme();
  return colorScheme === 'dark' ? darkTheme : lightTheme;
};
