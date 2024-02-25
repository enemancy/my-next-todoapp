'use client';
import { useState } from 'react'; 
import { initialTodos } from '@/app/lib/test-datas';
import { DeleteButton } from './buttons';
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import type { Todo } from '@/app/lib/definitions'

export default function Table() {
  const [todos, setTodos] = useState<Todo[]>([...initialTodos]);
  const handleCheckboxChange = (id: string) => {
    const newTodos: Todo[] = [...todos];
    newTodos.forEach((todo) => {
      if(todo.id === id){
        todo.isDone = !todo.isDone;
      }
      return todo;
    })
    setTodos(newTodos);
    console.table(todos);
  };
  const handleStarClick = (id: string) => {
    const newTodos: Todo[] = [...todos]
    newTodos.forEach((todo) => {
      if(todo.id === id){
        todo.isImportant = !todo.isImportant;
      }
      return todo;
    })
    setTodos(newTodos);
    console.table(todos);
  }

  return (
      <table className="w-full bg-gradient-to-r from-gray-100 to-gray-300 shadow-lg rounded-xl overflow-hidden text-center">
        <tbody className="divide-y divide-gray-400">
          {todos?.map((todo) => {
            return (
              <tr key={todo.id} className={`bg-white hover:bg-gray-100 ${todo.isDone ? 'text-gray-400 line-through pointer-events-none' : ''}`}>
                <td className="px-6 py-4 pointer-events-auto">
                  <input
                    type="checkbox"
                    className="rounded-full"
                    defaultChecked={todo.isDone}
                    onChange={() => handleCheckboxChange(todo.id)} 
                  />
                </td>
                <td className="px-6 py-4">{todo.name}</td>
                <td className="px-6 py-4">{todo.deadline?.toLocaleDateString('ja-JP') || '-'}</td>
                <td className="px-6 py-4">
                    <button onClick={() => handleStarClick(todo.id)}>
                      {/* react-iconに取り消し線を引くには、、、 */}
                      {todo.isImportant ? <FaStar /> : <CiStar />}
                    </button>
                </td>
                <td className="px-6 py-4">{todo.assignedPerson || '-'}</td>
                <td className="px-6 py-4 pointer-events-auto">
                  <DeleteButton id={todo.id} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
  );
}
