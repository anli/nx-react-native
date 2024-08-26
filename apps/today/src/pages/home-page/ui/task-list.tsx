import { FlatList, FlatListProps } from 'react-native';

import { Task } from '../model/task';
import { useTasks } from '../model/use-tasks';

import { TaskListItem } from './task-list-item';

type TaskListProps = Omit<FlatListProps<Task>, 'data' | 'renderItem'>;

export const TaskList = ({ ...rest }: TaskListProps) => {
  const { data } = useTasks();

  return (
    <FlatList
      {...rest}
      data={data}
      renderItem={({ item }) => <TaskListItem id={item.id} />}
    />
  );
};
