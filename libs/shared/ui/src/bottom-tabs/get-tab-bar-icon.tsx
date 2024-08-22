import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { ComponentProps } from 'react';

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
