'use server';

import type { Todo } from '@/app/lib/definitions';
import { revalidatePath } from 'next/cache';
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
  }
  catch(err){
    console.log('Failed to create Todos');
    console.error(err);
  }
  revalidatePath('/tasks');
}

export async function deleteTodo(formData: FormData){
  const deleteId = formData.get('id')?.toString();
  try{
    await sql`
      delete from todos where id = ${deleteId}
    `;
    console.log('Success to delete todo');
  } catch(err){
    console.error(err);
  }
  revalidatePath('/tasks');
}

export async function updateTodo(todo: Todo){
  try{
    await sql`
      update todos
      set
        name=${todo.name},
        deadline=${todo.deadline},
        is_important=${todo.is_important},
        assigned_person=${todo.assigned_person},
        tag=${todo.tag},
        is_done=${todo.is_done}
      where id = ${todo.id}
    `;
    console.log('Success to update todo');
  } catch(err){
    console.error(err);
  }

  revalidatePath('/tasks');
}

export async function testFunction(todo: Todo){
  console.log(todo);
}