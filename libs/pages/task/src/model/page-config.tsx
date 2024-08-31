import { TaskCheckbox } from '../ui/task-checkbox';
import { TaskList, TaskListProps } from '../ui/task-list';

export const TaskListWidget = (props: TaskListProps) => (
  <TaskList
    {...props}
    listItemProps={{
      right: ({ itemId, ...rest }) => <TaskCheckbox id={itemId} {...rest} />,
    }}
  />
);

export const components = {
  TaskListWidget: <TaskListWidget />,
};

// TODO: migrate to backend
export const taskListPageConfig = {
  title: 'Today',
  children: [
    {
      componentName: 'TaskListWidget',
    },
  ],
};
