import { todos } from '@/app/lib/test-datas';
import type { Todo } from '@/app/lib/definitions';
import { redirect } from 'next/navigation';

export function createTodo(formData: FormData){
  const fields: Todo = {
    id: (new Date).getTime().toString(),
    name: formData.get('name')?.toString() || '',
    deadline: new Date(formData.get('deadline') as string),
    isImportant: formData.get('isImportant') === 'true',
    assignedPerson: formData.get('assignedPerson')?.toString() || '',
    tag: null,
    isDone: false,
  }

  todos.push(fields);
  redirect('/tasks');
}

export function deleteTodo(formData: FormData){
  const deleteId = formData.get('id');
  const index = todos.findIndex(todo => todo.id === deleteId);
  if (index !== -1) {
    todos.splice(index, 1);
  }
  redirect('/tasks');
}