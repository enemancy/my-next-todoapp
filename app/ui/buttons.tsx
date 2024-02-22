'use client';

import { todos, users } from '@/app/lib/test-datas';
import { createTodo, deleteTodo } from '@/app/lib/actions';
import { IconContext } from 'react-icons';
import { FaTrashAlt } from "react-icons/fa";

export function DeleteButton({ id }: { id: string }) {
  return (

    <form action={deleteTodo}>
      <button type="submit">
        <IconContext.Provider value={{ className: 'text-red-400' }}>
          <FaTrashAlt />
        </IconContext.Provider>
      </button>
      <input
        name="id"
        type="text"
        value={id}
        className="hidden"
      />
    </form>

  );
}