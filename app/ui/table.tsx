
import type { Todo } from '@/app/lib/definitions'
import { fetchTodos } from '@/app/lib/data';
import TableRow from '@/app/ui/table-row';

export default async function Table() {
  const fetchedTodos: Todo[] = await fetchTodos();

  return (
    <table className="w-full bg-gradient-to-r from-gray-100 to-gray-300 shadow-lg rounded-xl overflow-hidden text-center">
      <tbody className="divide-y divide-gray-400">
        {fetchedTodos.map((todo) => (
          <TableRow todo={todo} key={todo.id} />
        ))}
      </tbody>
    </table>
  );
}
