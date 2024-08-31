import { ComponentProps, useEffect, useState } from 'react';

import { Checkbox } from 'react-native-paper';

import { Task } from '../model/task';
import { useTask } from '../model/use-task';

export const TaskCheckbox = ({
  id,
  ...rest
}: Pick<Task, 'id'> &
  Omit<ComponentProps<typeof Checkbox.Android>, 'status'>) => {
  const { data: item } = useTask(id);
  const [isChecked, setIsChecked] = useState(item?.isCompleted);

  useEffect(() => {
    setIsChecked(item?.isCompleted);
  }, [item?.isCompleted]);

  const handlePress = () => {
    setIsChecked((_isChecked) => !_isChecked);
  };

  return (
    <Checkbox.Android
      status={isChecked ? 'checked' : 'unchecked'}
      onPress={handlePress}
      {...rest}
    />
  );
};
