'use client';

import { todos, users } from '@/app/lib/test-datas';
import { createTodo, deleteTodo } from '@/app/lib/actions';

export default function Table() {
  return (
    <>
      <form action={createTodo} className="flex w-full justify-center gap-2 bg-gray-100 p-4 rounded-lg shadow-xl">
        <button type="submit" className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-110">+</button>
        <input
          name="name"
          type="text"
          className="border-0 bg-white px-4 py-2 rounded-full shadow-md w-full focus:ring-2 focus:ring-gray-400 transition duration-300 ease-in-out"
          placeholder="タスクを追加"
        />
        <input
          name="deadline"
          type="date"
          className="border-0 bg-white px-4 py-2 rounded-full shadow-md w-full focus:ring-2 focus:ring-gray-400 transition duration-300 ease-in-out"
        />
        <div className="flex items-center justify-center bg-white px-2 py-2 rounded-full shadow-md">
          <input
            name="isImportant"
            type="checkbox"
            className="w-5 h-5 text-gray-600 focus:ring-gray-500 rounded-full"
          />
        </div>
        <select
          name="assignedPerson"
          className="border-0 bg-white px-4 py-2 rounded-full shadow-md focus:ring-2 focus:ring-gray-400 transition duration-300 ease-in-out"
        >
          <option value="" selected>担当者を選択</option>
          {users.map((user) => (
            <option key={user.name} value={user.name}>{user.name}</option>
          ))}
        </select>
      </form>
      <table className="w-full bg-gradient-to-r from-gray-100 to-gray-300 shadow-lg rounded-xl overflow-hidden text-center">
        <tbody className="divide-y divide-gray-400">
          {todos?.map((todo) => (
            <tr key={todo.id} className="bg-white hover:bg-gray-100">
              <td className="px-6 py-4">
                <input
                  type="checkbox"
                  className="rounded-full"
                  defaultChecked={todo.isDone}
                />
              </td>
              <td className="px-6 py-4">{todo.name}</td>
              <td className="px-6 py-4">{todo.deadline?.toLocaleDateString('ja-JP') || '-'}</td>
              <td className="px-6 py-4">{todo.isImportant ? '★' : '☆'}</td>
              <td className="px-6 py-4">{todo.assignedPerson || '-'}</td>
              <td className="px-6 py-4">
                <form action={deleteTodo}>
                  <button type="submit">
                    🚮
                  </button>
                  <input
                    name="id"
                    type="text"
                    value={todo.id}
                    className="hidden"
                  />
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </>
  );
}