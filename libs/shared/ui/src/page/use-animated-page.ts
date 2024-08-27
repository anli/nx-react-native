import { useState } from 'react';
import { LayoutChangeEvent } from 'react-native';

import {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

type UseAnimatedPageProps = {
  height?: number;
};

export const useAnimatedPage = (props?: UseAnimatedPageProps) => {
  const { height = 0 } = props ?? {};
  const offsetY = useSharedValue(0);
  const [headerHeight, setHeaderHeight] = useState(height);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    offsetY.value = event.contentOffset.y;
  });

  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      offsetY.value,
      [headerHeight / 2, headerHeight],
      [0, 1]
    );

    return {
      opacity,
    };
  }, [headerHeight]);

  const handleLayout = (_event: LayoutChangeEvent) =>
    setHeaderHeight(_event.nativeEvent.layout.height);

  return {
    animatedStyle,
    scrollHandler,
    handleLayout,
    headerHeight,
  };
};
