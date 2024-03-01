export type Todo = {
  id: string;
  name: string;
  deadline: string,
  is_important: boolean,
  assigned_person: string,
  tag: string | null,
  is_done: boolean,
}

export type User = {
  name: string;
  email: string;
  // iconFile: string;
}