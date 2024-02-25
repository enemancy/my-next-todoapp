const { v4: uuidv4 } = require('uuid');

const initialTodos = [
  {
    id: uuidv4(),
    name: 'aaa',
    deadline: new Date('2024-02-29'),
    isImportant: false,
    assignedPerson: 'Taro',
    tag: null,
    isDone: false,
  },
  {
    id: uuidv4(),
    name: 'bbb',
    deadline: new Date('2024-02-27'),
    isImportant: false,
    assignedPerson: 'Jiro',
    tag: null,
    isDone: false,
  },
  {
    id: uuidv4(),
    name: 'ccc',
    deadline: new Date('2024-02-20'),
    isImportant: true,
    assignedPerson: 'Saburo',
    tag: null,
    isDone: true,
  },
  {
    id: uuidv4(),
    name: 'ddd',
    deadline: new Date('2024-02-21'),
    isImportant: false,
    assignedPerson: 'Shiro',
    tag: null,
    isDone: false,
  },
];

const users = [
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

module.exports = {
  initialTodos,
  users,
};
