import { PageFlatList, renderPageContent } from '@shared/ui';

import {
  taskListPageConfig,
  components as pageComponents,
  TaskListWidget,
} from '../model/page-config';

const pageConfig = {
  title: 'Today',
};

export const TaskListPage = () => (
  <PageFlatList
    title={pageConfig.title}
    render={(props) => {
      const components = {
        ...pageComponents,
        TaskListWidget: <TaskListWidget {...props} />,
      };

      return renderPageContent(taskListPageConfig.children, components);
    }}
  />
);
