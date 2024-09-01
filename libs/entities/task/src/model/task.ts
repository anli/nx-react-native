import { faker } from '@faker-js/faker';

export type Task = {
  id: string;
  isCompleted: null | boolean;
  date: string;
  name: string;
};

const createMockTask = () => ({
  id: faker.string.uuid(),
  isCompleted: faker.datatype.boolean(),
  date: faker.date.soon().toISOString(),
  name: faker.lorem.words(),
});

export const mockTasks = faker.helpers.multiple<Task>(createMockTask, {
  count: 30,
});
