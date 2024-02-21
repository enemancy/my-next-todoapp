export type Todo = {
  id: string;
  name: string;
  deadline: Date | null,
  isImportant: boolean,
  assignedPerson: string | null,
  tag: string | null,
}

export type User = {
  name: string;
  email: string;
  // iconFile: string;
}