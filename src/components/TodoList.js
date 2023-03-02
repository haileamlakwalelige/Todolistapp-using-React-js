import React from 'react'
import Todo from './Todo';


function TodoList({todos, setTodos, inputText, filterTodos}) {
  return (
    <div className="todo-container">
      <ul className='todo-list'>
      {filterTodos.map((todo)=>{
        return(
         <Todo 
         key={todo.id} 
         text={todo.text}  
         todos={todos} 
         setTodos={setTodos}
          todo={todo}
         />
     ) })}
      </ul>
    </div>
  )
}

export default TodoList;
