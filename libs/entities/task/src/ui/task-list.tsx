import { FlatListProps } from 'react-native';

import Animated from 'react-native-reanimated';

import { Task } from '../model/task';
import { useTasks } from '../model/use-tasks';

import { TaskListItem, TaskListItemProps } from './task-list-item';

export type TaskListProps = Omit<FlatListProps<Task>, 'data' | 'renderItem'> & {
  listItemProps?: Omit<TaskListItemProps, 'id' | 'name'>;
};

export const TaskList = ({ listItemProps, ...rest }: TaskListProps) => {
  const { data } = useTasks();

  return (
    <Animated.FlatList
      {...rest}
      data={data}
      renderItem={({ item }) => <TaskListItem {...item} {...listItemProps} />}
    />
  );
};
