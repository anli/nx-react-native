import { ComponentProps } from 'react';

import Icon from '@expo/vector-icons/MaterialCommunityIcons';

type IconName = ComponentProps<typeof Icon>['name'];

export const getTabBarIcon =
  (focusedIconName: IconName, unfocusedIconName: IconName) =>
  ({ color, focused }: { focused: boolean; color: string }) =>
    (
      <Icon
        name={focused ? focusedIconName : unfocusedIconName}
        color={color}
        size={24}
      />
    );
