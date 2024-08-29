import { useState } from 'react';

import { tw, useTheme } from '@shared/ui';
import { Switch } from 'react-native-paper';

export const DarkModeSwitch = () => {
  const { themeName, setThemeName } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(themeName === 'dark');

  const handleSwitch = (value: boolean) => {
    setIsDarkMode(value);
    setThemeName(value ? 'dark' : 'light');
  };

  return (
    <Switch value={isDarkMode} onValueChange={handleSwitch} style={tw`mx-4`} />
  );
};
