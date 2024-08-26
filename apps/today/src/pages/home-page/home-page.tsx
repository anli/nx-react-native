import { Appbar } from 'react-native-paper';

import { TaskList } from './ui/task-list';

const pageConfig = {
  title: 'Today',
};

export const HomePage = () => (
  <TaskList
    ListHeaderComponent={
      <Appbar.Header mode="large">
        <Appbar.Content title={pageConfig.title} />
        <Appbar.Action icon="magnify" />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
    }
  />
);
