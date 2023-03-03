import { useState } from 'react'
import { Todos } from './components/Todos'
import type { TodoId } from './types'

const mocksTodos = [
  {
    id: '1',
    title: 'Learn React',
    completed: true
  },
  {
    id: '2',
    title: 'Learn React Hooks',
    completed: false
  },
  {
    id: '3',
    title: 'Learn Typescript',
    completed: false
  }
]

function App (): JSX.Element {
  const [todos, setTodos] = useState(mocksTodos)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const handleComplete = ({ id }: TodoId): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }
  return (
    <div className="todoapp">
      <Todos todos={todos} onRemoveTodo={handleRemove} onCompletedTodo={handleComplete} />
    </div>
  )
}

export default App
