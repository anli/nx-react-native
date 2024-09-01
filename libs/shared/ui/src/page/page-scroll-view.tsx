import { PropsWithChildren } from 'react';

import { Appbar } from 'react-native-paper';
import Animated from 'react-native-reanimated';

import { tw } from '../tailwind';

import { Page } from './page';
import { useAnimatedPage } from './use-animated-page';

type PageScrollViewProps = {
  title?: string;
};

export const PageScrollView = ({
  title,
  children,
}: PropsWithChildren<PageScrollViewProps>) => {
  const animatedPage = useAnimatedPage({ height: 64 });

  return (
    <Page
      renderHeader={(props) => (
        <Animated.View style={[tw`z-10`, animatedPage.animatedStyle]}>
          <Appbar.Header mode="center-aligned" statusBarHeight={0} {...props}>
            <Appbar.Content title={title} />
          </Appbar.Header>
        </Animated.View>
      )}
    >
      <Animated.ScrollView onScroll={animatedPage.scrollHandler}>
        <Appbar.Header mode="large" statusBarHeight={0}>
          <Appbar.Content title={title} />
        </Appbar.Header>
        {children}
      </Animated.ScrollView>
    </Page>
  );
};
