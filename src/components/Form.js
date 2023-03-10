import React from 'react'
import '../App.css';
function Form({ setInputText, todos, setTodos, inputText, setStatus }) {
    //here i can write javascript code adn function
    const inputTextHandler =(e)=>{
        setInputText(e.target.value);
        
    }
    const submitTodoHandler=(e)=>{
        if(!inputText){
            alert("First enter a text");
            e.preventDefault();
            return;
        }
        e.preventDefault();
        setTodos([...todos, {text:inputText, completed:false, id:Math.random()*1000}]);
        setInputText("");
    }
    const statusHandler = (e)=>{
        setStatus(e.target.value);
    }
  return (
   <form>
    <input value={inputText} onChange={inputTextHandler} type='text' className='todo-input' />
    <button onClick={submitTodoHandler} className="todo-button" type="submit"><span>+</span></button>
    <div className="select" >
        <select name='todos' className='filter-todo' onChange={statusHandler}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
        </select>
    </div>
   </form>
  )
}

export default Form
