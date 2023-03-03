import type { Todo as TodoType, TodoId } from '../types'

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void
  onCompletedTodo: ({ id }: TodoId) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onCompletedTodo }) => {
  return (
    <div className="view">
      <input className="toggle" type="checkbox" checked={completed} onChange={() => { onCompletedTodo({ id }) }} />
      <label>{ title }</label>
      <button className='destroy' onClick={() => { onRemoveTodo({ id }) }}></button>
  </div>
  )
}
