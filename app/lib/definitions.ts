export type Todo = {
  id: string;
  name: string;
  deadline: Date,
  isImportant: boolean,
  assignedPerson: string,
  tag: string | null,
  isDone: boolean,
}

export type User = {
  name: string;
  email: string;
  // iconFile: string;
}