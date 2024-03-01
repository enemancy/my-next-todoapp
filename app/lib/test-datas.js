const { v4: uuidv4 } = require('uuid');

const initialTodos = [
  {
    id: uuidv4(),
    name: 'aaa',
    deadline: new Date('2024-02-29').toISOString().split('T')[0],
    is_important: false,
    assigned_person: 'Taro',
    tag: null,
    is_done: false,
  },
  {
    id: uuidv4(),
    name: 'bbb',
    deadline: new Date('2024-02-27').toISOString().split('T')[0],
    is_important: false,
    assigned_person: 'Jiro',
    tag: null,
    is_done: false,
  },
  {
    id: uuidv4(),
    name: 'ccc',
    deadline: new Date('2024-02-20').toISOString().split('T')[0],
    is_important: true,
    assigned_person: 'Saburo',
    tag: null,
    is_done: true,
  },
  {
    id: uuidv4(),
    name: 'ddd',
    deadline: new Date('2024-02-21').toISOString().split('T')[0],
    is_important: false,
    assigned_person: 'Shiro',
    tag: null,
    is_done: false,
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

