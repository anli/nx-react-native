import { StyleProp, ViewStyle } from 'react-native';

import { List, ListItemProps } from 'react-native-paper';

import { Task } from '../model/task';

export type TaskListItemProps = Pick<Task, 'id' | 'name'> &
  Omit<ListItemProps, 'right' | 'title'> & {
    right?:
      | ((props: {
          color: string;
          style?: StyleProp<ViewStyle>;
          itemId: Task['id'];
        }) => React.ReactNode)
      | undefined;
  };

export const TaskListItem = ({
  id,
  name,
  right,
  ...rest
}: TaskListItemProps) => (
  <List.Item
    title={name}
    right={(props) => right?.({ ...props, itemId: id })}
    {...rest}
  />
);
