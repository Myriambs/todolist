import React from 'react'
import TodoElement from './TodoElement'

const TodoList = ({todo,fesekh}) => {
  return (
    <div className="uncomp-tasks">
      <h2>Uncompleted Tasks</h2>
      <ul className="items">
{
    todo.map((el)=> <TodoElement  todo={el} fesekh={fesekh}  />  )
}
     
    

      </ul>
    </div>
  )
}

export default TodoList
