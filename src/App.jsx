import React from 'react'
import { useState } from 'react'
import './App.css'
import AddTodo from './Components/AddTodo'
import TodoList from './Components/TodoList'
const App = () => {

const [todo,setTodo]=useState(
    [
    {text:"gazouz",id:1,done:false},
    {
        text:"7alib",id:2,done:false
    },{
        text:"9ahwa",id:3,done:false
    },
    {
        text:"ma9rouna",id:4,done:false
    }
]
)
const fesekh=(id)=>{
setTodo( todo.filter((el)=> el.id !== id)

)
}

  return (
    <div>
      <>
  <header className="header">
    <h1>TODO List</h1>
  </header>
  <div className="container">
    {/* container mte3 el input ely heya tajouti fil data  */}
   <AddTodo/>
   {/* affichage ely b3ed feha les 3 button mte3 kol element  */}
   <TodoList     todo={todo}  fesekh={fesekh}  />
  
  </div>
</>
    </div>
  )
}

export default App



