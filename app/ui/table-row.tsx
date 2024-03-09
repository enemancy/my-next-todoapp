'use client';

import type { Todo } from '@/app/lib/definitions';
import { DeleteButton } from './buttons';
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

import { updateTodo } from '@/app/lib/actions';


export default function TableRow({ todo }: { todo: Todo }) {

  const handleCheckboxChange = () => {
    const newTodo: Todo = { ...todo };
    newTodo.is_done = !newTodo.is_done;
    updateTodo(newTodo);
  };
  const handleStarClick = () => {
    const newTodo: Todo = { ...todo }
    newTodo.is_important = !newTodo.is_important;
    updateTodo(newTodo);
  }

  return (
    <tr key={todo.id} className={`bg-white hover:bg-gray-100 ${todo.is_done ? 'text-gray-400 line-through pointer-events-none' : ''}`}>
        <td className="px-6 py-4 pointer-events-auto">
          <input
            type="checkbox"
            className="rounded-full"
            defaultChecked={todo.is_done}
            onClick={() => handleCheckboxChange()}
          />
        </td>
        <td className="px-6 py-4">
          {todo.name}
        </td>
        <td className="px-6 py-4">
          {todo.deadline ? new Date(todo.deadline).toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }) : '-'}
        </td>
        <td className="px-6 py-4">
          <button onClick={() => handleStarClick()}>
            {/* react-iconに取り消し線を引くには、、、 */}
            {todo.is_important ? <FaStar /> : <CiStar />}
          </button>
        </td>
        <td className="px-6 py-4">
          {todo.assigned_person || '-'}
        </td>
        <td className="px-6 py-4 pointer-events-auto">
          <DeleteButton id={todo.id} />
        </td>
    </tr>
  );
}


