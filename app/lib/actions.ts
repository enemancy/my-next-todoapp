'use server';

import { initialTodos } from '@/app/lib/test-datas';
import type { Todo } from '@/app/lib/definitions';
import { redirect } from 'next/navigation';
import { sql } from '@vercel/postgres';
import { v4 as uuidv4 } from 'uuid';

export async function createTodo(formData: FormData){
  const fields: Todo = {
    id: uuidv4(),
    name: formData.get('name')?.toString() || '',
    deadline: formData.get('deadline')?.toString() || new Date().toISOString(),
    is_important: formData.get('is_important') === 'true',
    assigned_person: formData.get('assigned_person')?.toString() || '',
    tag: null,
    is_done: false,
  }

  try{
    await sql`
      INSERT INTO todos (id, name, deadline, is_important, assigned_person, tag, is_done)
      VALUES (${fields.id}, ${fields.name}, ${fields.deadline}, ${fields.is_important}, ${fields.assigned_person}, ${fields.tag}, ${fields.is_done})
    `;
    console.log('Success to create todo');

    redirect('/tasks');
  }
  catch(err){
    console.error(err);
  }



}

export async function deleteTodo(formData: FormData){
  const deleteId = formData.get('id');
  const index = initialTodos.findIndex(todo => todo.id === deleteId);
  if (index !== -1) {
    initialTodos.splice(index, 1);
  }
  redirect('/tasks');
}