import { usePageContent } from '@entities/page';
import { PageFlatList } from '@shared/ui';
import { PageWidget } from '@widgets/page';

import { TaskCheckbox } from './task-checkbox';
import { TaskList, TaskListProps } from './task-list';

const TaskListWidget = (props: TaskListProps) => (
  <TaskList
    {...props}
    listItemProps={{
      right: ({ itemId, ...rest }) => <TaskCheckbox id={itemId} {...rest} />,
    }}
  />
);

export const TaskListPage = () => {
  const { data } = usePageContent('task-list-page');

  return (
    <PageFlatList
      title={data?.title}
      render={(props) => {
        const components = {
          TaskListWidget: <TaskListWidget {...props} />,
        };

        return <PageWidget id="task-list-page" components={components} />;
      }}
    />
  );
};
