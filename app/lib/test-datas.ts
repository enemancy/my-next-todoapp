import type { Todo, User } from '@/app/lib/definitions';

export const todos: Todo[] = [
  {
    id: '1',
    name: 'aaa',
    deadline: new Date('2024-02-29'),
    isImportant: false,
    assignedPerson: 'Taro',
    tag: null,
  },
  {
    id: '2',
    name: 'bbb',
    deadline: new Date('2024-02-27'),
    isImportant: false,
    assignedPerson: 'Jiro',
    tag: null,
  },
  {
    id: '3',
    name: 'ccc',
    deadline: new Date('2024-02-20'),
    isImportant: true,
    assignedPerson: 'Saburo',
    tag: null,
  },
  {
    id: '4',
    name: 'ddd',
    deadline: new Date('2024-02-21'),
    isImportant: false,
    assignedPerson: 'Shiro',
    tag: null,
  },
];

export const users: User[] = [
  {
    name: 'test',
    email: 'test@testmail.com',
  },
  {
    name: 'Taro',
    email: 'Taro@testmail.com',
  },
  {
    name: 'Jiro',
    email: 'Jiro@testmail.com',
  },
  {
    name: 'Saburo',
    email: 'Saburo@testmail.com',
  },
  {
    name: 'Shiro',
    email: 'Shiro@testmail.com',
  },
];
