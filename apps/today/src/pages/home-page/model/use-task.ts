import { mockTasks } from './task';

export const useTask = (id: string) => {
  const data = mockTasks.find((_task) => _task.id === id);

  return { data };
};
