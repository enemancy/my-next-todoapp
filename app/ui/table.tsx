'use client';
import { useState } from 'react'; 
import { todos } from '@/app/lib/test-datas';
import { DeleteButton } from './buttons';
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

export default function Table() {
  return (
      <table className="w-full bg-gradient-to-r from-gray-100 to-gray-300 shadow-lg rounded-xl overflow-hidden text-center">
        <tbody className="divide-y divide-gray-400">
          {todos?.map((todo) => {
            const [isDone, setIsDone] = useState(todo.isDone); 
            const handleCheckboxChange = () => {
              setIsDone(!isDone);
            };

            const [isImportant, setIsImportant] = useState(todo.isImportant);
            const handleStarClick = () => {
              setIsImportant(!isImportant);
            };

            return (
              <tr key={todo.id} className={`bg-white hover:bg-gray-100 ${isDone ? 'text-gray-400 line-through pointer-events-none' : ''}`}>
                <td className="px-6 py-4 pointer-events-auto">
                  <input
                    type="checkbox"
                    className="rounded-full"
                    defaultChecked={todo.isDone}
                    onChange={handleCheckboxChange} 
                  />
                </td>
                <td className="px-6 py-4">{todo.name}</td>
                <td className="px-6 py-4">{todo.deadline?.toLocaleDateString('ja-JP') || '-'}</td>
                <td className="px-6 py-4">
                    <button onClick={handleStarClick}>
                      {/* react-iconに取り消し線を引くには、、、 */}
                      {isImportant ? <FaStar /> : <CiStar />}
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
