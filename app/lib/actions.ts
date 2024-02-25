import { initialTodos } from '@/app/lib/test-datas';
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

  initialTodos.push(fields);
  redirect('/tasks');
}

export function deleteTodo(formData: FormData){
  const deleteId = formData.get('id');
  const index = initialTodos.findIndex(todo => todo.id === deleteId);
  if (index !== -1) {
    initialTodos.splice(index, 1);
  }
  redirect('/tasks');
}