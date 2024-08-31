import { PropsWithChildren, ReactNode } from 'react';
import { FlatListProps } from 'react-native';

import { Appbar } from 'react-native-paper';
import Animated from 'react-native-reanimated';

import { tw } from '../tailwind';

import { Page } from './page';
import { useAnimatedPage } from './use-animated-page';

type PageFlatListProps = {
  title: string;
  render: (
    props: Pick<
      FlatListProps<unknown>,
      'snapToEnd' | 'snapToOffsets' | 'onScroll' | 'ListHeaderComponent'
    >
  ) => ReactNode;
};

export const PageFlatList = ({
  title,
  render,
  children,
}: PropsWithChildren<PageFlatListProps>) => {
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
      {render({
        snapToEnd: false,
        snapToOffsets: [animatedPage.headerHeight],
        onScroll: animatedPage.scrollHandler,
        ListHeaderComponent: (
          <Appbar.Header mode="large" statusBarHeight={0}>
            <Appbar.Content title={title} />
          </Appbar.Header>
        ),
      })}
    </Page>
  );
};
