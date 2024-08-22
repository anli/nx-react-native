import { BottomTabs, getTabBarIcon } from '@shared/ui';

export default () => {
  return (
    <BottomTabs>
      <BottomTabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: getTabBarIcon('home', 'home-outline'),
        }}
      />
      <BottomTabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: getTabBarIcon('cog', 'cog-outline'),
        }}
      />
    </BottomTabs>
  );
};
