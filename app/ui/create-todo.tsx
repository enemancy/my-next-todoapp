'use client';

import { users } from '@/app/lib/test-datas';
import { createTodo } from '@/app/lib/actions';
import { MdAddTask } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { useState } from 'react';
import type { Todo } from '@/app/lib/definitions'

export default function CreateTodo() {
  const [todo, setTodo] = useState<Todo>({
    id: '',
    name: '',
    deadline: new Date().toISOString().split('T')[0],
    is_important: false,
    assigned_person: '',
    tag: null,
    is_done: false,
  });

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 時間遅らせるみたいなのあったよね
    const newTodo = { ...todo };
    newTodo.name = e.target.value;
    setTodo(newTodo);
  };
  const handleChangeDeadline = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTodo = { ...todo };
    newTodo.deadline = new Date(e.target.value).toISOString().split('T')[0];
    setTodo(newTodo);
  };
  const handleClickStar = () => {
    const newTodo = { ...todo };
    newTodo.is_important = !newTodo.is_important;
    setTodo(newTodo);
  };
  const handleChangeAssigned_person = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTodo = { ...todo };
    newTodo.assigned_person = e.target.value;
    setTodo(newTodo);
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
          onChange={handleChangeName}
          placeholder="タスクを追加"
          className="border-0 bg-white px-4 py-2 rounded-full shadow-md w-full focus:ring-2 focus:ring-gray-400 transition duration-300 ease-in-out"
        />
        <input
          name="deadline"
          type="date"
          onChange={handleChangeDeadline}
          className="border-0 bg-white px-4 py-2 rounded-full shadow-md w-full focus:ring-2 focus:ring-gray-400 transition duration-300 ease-in-out"
        />
        <div 
          className="flex items-center justify-center bg-white px-2 py-2 rounded-full shadow-md"
          onClick={handleClickStar}
        >
          <label htmlFor="is_important" className="w-5 h-5 text-gray-600 focus:ring-gray-500 rounded-full">
            {todo.is_important ? <FaStar /> : <CiStar />}
          </label>
          <input
            name="is_important"
            type="checkbox"
            className="hidden"
          />
        </div>
        <select
          name="assigned_person"
          onChange={handleChangeAssigned_person}
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