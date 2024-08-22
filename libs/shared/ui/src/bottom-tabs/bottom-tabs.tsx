import { withLayoutContext } from 'expo-router';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';

const MaterialBottomTabNavigator = createMaterialBottomTabNavigator();

export const BottomTabs = withLayoutContext(
  MaterialBottomTabNavigator.Navigator
);
