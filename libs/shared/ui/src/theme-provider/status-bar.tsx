import { ColorSchemeName } from 'react-native';

import { StatusBar as NativeStatusBar } from 'expo-status-bar';

const statusBarStyle = {
  dark: 'light',
  light: 'dark',
} as const;

type StatusBarProps = { themeName: ColorSchemeName };
export const StatusBar = ({ themeName }: StatusBarProps) => (
  <NativeStatusBar style={themeName ? statusBarStyle[themeName] : 'auto'} />
);
