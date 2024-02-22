import Table from '@/app/ui/table'
import CreateTodo from '../ui/create-todo'

export default function Page(){
  return (
    <div>
      {/* create-new-todos */}
      <div>
        <CreateTodo />
      </div>
      {/* todos-table */}
      <div>
        <Table />
      </div>
    </div>
  )
}