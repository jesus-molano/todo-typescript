
interface Todo {
  id: number
  title: string
  completed: boolean
}

type ListTodos = Todo[]

export type { Todo, ListTodos }
