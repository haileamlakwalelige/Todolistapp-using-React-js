import React from 'react';
import {BsCheckLg,  BsTrashFill} from 'react-icons/bs';

const Todo=({text,todo, todos, setTodos})=> {
  const deleteHandler =()=>{
    setTodos(todos.filter(el=>el.id !== todo.id));
  }
  const completedHandler =()=>{
    setTodos(todos.map((item)=>{
      if(item.id === todo.id){
        return{
          ...item, completed:!item.completed
        };
      }
      return item;
    }))
  }
 
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed  ? "completed" : ""}`}>{text}</li>
      <button className="fa-check"onClick={completedHandler} >
        <BsCheckLg className='icons1'/>
        </button>
        <button className="fa-trash" onClick={deleteHandler}>
        <BsTrashFill className='icons'/>
      </button>

    </div>
  )
}

export default Todo;
