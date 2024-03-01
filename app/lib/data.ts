import { sql } from '@vercel/postgres';
import type { Todo } from '@/app/lib/definitions';

export async function fetchTodos(){
  try{
    const data = await sql<Todo>`SELECT * FROM todos;`;
    const todos = data.rows;
    console.table(todos);
    return todos;
  }catch (error){
    console.error('Error fetching todos', error);
    throw new Error('Error fetching todos');
  }
}
