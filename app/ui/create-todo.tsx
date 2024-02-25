'use client';

import { users } from '@/app/lib/test-datas';
import { createTodo } from '@/app/lib/actions';
import { MdAddTask } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { useState } from 'react';

export default function CreateTodo() {
  const [isImportant, setIsImportant] = useState(false);
  const handleStarClick = () => {
    setIsImportant(!isImportant);
  };

  return (
    <>
      <form action={createTodo} className="flex w-full justify-center gap-2 bg-gray-100 p-4 rounded-lg shadow-xl">
        <button type="submit" className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-110">
          <MdAddTask />
        </button>
        <input
          name="name"
          type="text"
          placeholder="タスクを追加"
          className="border-0 bg-white px-4 py-2 rounded-full shadow-md w-full focus:ring-2 focus:ring-gray-400 transition duration-300 ease-in-out"
        />
        <input
          name="deadline"
          type="date"
          className="border-0 bg-white px-4 py-2 rounded-full shadow-md w-full focus:ring-2 focus:ring-gray-400 transition duration-300 ease-in-out"
        />
        <div className="flex items-center justify-center bg-white px-2 py-2 rounded-full shadow-md">
          <label onClick={handleStarClick} htmlFor="isImportant" className="w-5 h-5 text-gray-600 focus:ring-gray-500 rounded-full">
            {isImportant ? <FaStar /> : <CiStar />}
          </label>
          <input
            name="isImportant"
            type="checkbox"
            className="hidden"
          />
        </div>
        <select
          name="assignedPerson"
          className="border-0 bg-white px-4 py-2 rounded-full shadow-md focus:ring-2 focus:ring-gray-400 transition duration-300 ease-in-out"
        >
          <option value="">担当者を選択</option>
          {users.map((user) => (
            <option key={user.name} value={user.name}>{user.name}</option>
          ))}
        </select>
      </form>
    </>
  );
}