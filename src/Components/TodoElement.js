import React from 'react'

const TodoElement = ({todo,fesekh,checkelement}) => {
    console.log('todo=>',todo)
  return (
    <div>
    <li>
{todo.text}
        <button  onClick={()=>fesekh(todo.id)}   >remove</button>
        <button>update</button>
        <button  onClick={()=>checkelement(todo.id)} >     { todo.done ? "te9dhat" : "mezel" }       </button>
    </li>
      
    </div>
  )
}

export default TodoElement
