import { List } from 'react-native-paper';

import { Task } from '../model/task';

import { TaskCheckbox } from './task-checkbox';

export const TaskListItem = (item: Pick<Task, 'id' | 'name'>) => (
  <List.Item
    title={item.name}
    right={(props) => <TaskCheckbox id={item.id} {...props} />}
  />
);
