import { List } from 'react-native-paper';

import { Task } from '../model/task';
import { useTask } from '../model/use-task';

import { TaskCheckbox } from './task-checkbox';

export const TaskListItem = ({ id }: Pick<Task, 'id'>) => {
  const { data: item } = useTask(id);

  if (!item) {
    return null;
  }

  return (
    <List.Item
      title={item.name}
      right={(props) => <TaskCheckbox id={item.id} {...props} />}
    />
  );
};
