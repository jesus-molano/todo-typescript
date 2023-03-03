import { useState } from 'react'
import { Todos } from './components/Todos'

const mocksTodos = [
  {
    id: 1,
    title: 'Learn React',
    completed: true
  },
  {
    id: 2,
    title: 'Learn React Hooks',
    completed: false
  },
  {
    id: 3,
    title: 'Learn Typescript',
    completed: false
  }
]

function App (): JSX.Element {
  const [todos, setTodos] = useState(mocksTodos)

  return (
    <div className="todoapp">
      <Todos todos={todos} />
    </div>
  )
}

export default App
