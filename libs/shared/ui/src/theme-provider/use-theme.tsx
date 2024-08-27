import {
  useContext,
  createContext,
  PropsWithChildren,
  useMemo,
  useState,
  useEffect,
} from 'react';
import { ColorSchemeName, useColorScheme } from 'react-native';

import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import { Theme, darkTheme, lightTheme } from '../config';

const defaultThemeName = 'dark';

const getTheme = (themeName: ColorSchemeName) =>
  themeName === 'dark' ? darkTheme : lightTheme;

const ThemeContext = createContext<{
  themeName: ColorSchemeName;
  theme: Theme;
  setThemeName: (value: ColorSchemeName) => void;
}>({
  themeName: defaultThemeName,
  theme: getTheme(defaultThemeName),
  setThemeName: () => undefined,
});

export const useTheme = () => {
  const value = useContext(ThemeContext);

  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useTheme must be wrapped in a <ThemeProvider />');
    }
  }

  return value;
};

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const colorScheme = useColorScheme();
  const [themeName, _setThemeName] = useState<ColorSchemeName>(colorScheme);
  const { getItem, setItem } = useAsyncStorage('theme');

  const value = useMemo(
    () => ({
      themeName,
      theme: getTheme(themeName),
      setThemeName: (_value: ColorSchemeName) => {
        if (_value) {
          _setThemeName(_value);
          void setItem(_value);
        }
      },
    }),
    [setItem, themeName]
  );

  useEffect(() => {
    const readStorageValue = async () => {
      const storageValue = (await getItem()) as ColorSchemeName;
      storageValue && _setThemeName(storageValue);
    };

    void readStorageValue();
  }, [getItem]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
