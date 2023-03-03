import type { ListTodos, TodoId } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: ListTodos
  onRemoveTodo: (id: TodoId) => void
  onCompletedTodo: (id: TodoId) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onCompletedTodo }) => {
  return (
    <ul className='todo-list'>
      {todos.map(todo => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''} `}>
          <Todo key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} onRemoveTodo={onRemoveTodo} onCompletedTodo={onCompletedTodo} />
        </li>
      ))}
  </ul>
  )
}
