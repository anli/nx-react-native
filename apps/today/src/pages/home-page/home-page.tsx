import { PageFlatList } from '@shared/ui';

import { TaskList } from './ui/task-list';

const pageConfig = {
  title: 'Today',
};

export const HomePage = () => (
  <PageFlatList
    title={pageConfig.title}
    render={(props) => <TaskList {...props} />}
  />
);
