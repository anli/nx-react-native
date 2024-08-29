import { useState } from 'react';

import { Card, CardProps, Switch } from 'react-native-paper';

import { tw } from '../tailwind';
import { useTheme } from '../theme-provider';

export const DarkModeCard = (
  props: Omit<CardProps, 'children' | 'elevation'>
) => {
  const { themeName, setThemeName } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(themeName === 'dark');

  const handleSwitch = (value: boolean) => {
    setIsDarkMode(value);
    setThemeName(value ? 'dark' : 'light');
  };

  return (
    <Card mode="contained" {...props}>
      <Card.Title
        title="Dark Mode"
        titleStyle={tw`py-1`}
        right={(_props) => (
          <Switch
            value={isDarkMode}
            onValueChange={handleSwitch}
            style={tw`mx-4`}
          />
        )}
      />
    </Card>
  );
};
