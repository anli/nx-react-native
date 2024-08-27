import { FlatListProps } from 'react-native';

import Animated from 'react-native-reanimated';

import { Task } from '../model/task';
import { useTasks } from '../model/use-tasks';

import { TaskListItem } from './task-list-item';

type TaskListProps = Omit<FlatListProps<Task>, 'data' | 'renderItem'>;

export const TaskList = ({ ...rest }: TaskListProps) => {
  const { data } = useTasks();

  return (
    <Animated.FlatList
      {...rest}
      data={data}
      renderItem={({ item }) => <TaskListItem {...item} />}
    />
  );
};
