import { Page, tw, useAnimatedPage } from '@shared/ui';
import { Appbar } from 'react-native-paper';
import Animated from 'react-native-reanimated';

import { TaskList } from './ui/task-list';

const pageConfig = {
  title: 'Today',
};

export const HomePage = () => {
  const animatedPage = useAnimatedPage({ height: 64 });

  return (
    <Page
      renderHeader={(props) => (
        <Animated.View style={[tw`z-10`, animatedPage.animatedStyle]}>
          <Appbar.Header mode="center-aligned" statusBarHeight={0} {...props}>
            <Appbar.Content title={pageConfig.title} />
          </Appbar.Header>
        </Animated.View>
      )}
    >
      <TaskList
        snapToOffsets={[animatedPage.headerHeight]}
        onScroll={animatedPage.scrollHandler}
        ListHeaderComponent={
          <Appbar.Header mode="large" statusBarHeight={0}>
            <Appbar.Content title={pageConfig.title} />
          </Appbar.Header>
        }
      />
    </Page>
  );
};
