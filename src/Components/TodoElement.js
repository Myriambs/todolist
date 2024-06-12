import React from 'react'

const TodoElement = ({todo,fesekh}) => {
    console.log('todo=>',todo)
   
  return (
    <div>
      <li>

{todo.text}

        <button  onClick={()=>fesekh(todo.id)}   >remove</button>
        <button>update</button>
        <button>check</button>
      </li>
      
    </div>
  )
}

export default TodoElement
