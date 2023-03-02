import React,{useState,useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {
  //props and states
  const [inputText, setInputText]=useState("");
  const [todos, setTodos]=useState([]);
  const [status, setStatus]=useState("all");
  const [filterTodos, setFilterTodos]=useState([]);
  //function staff
  useEffect(()=>{
    getLocalTodos();
  },[]);
  useEffect (()=>{
    filterHandler();
    saveLocalTodos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ todos, status]);
  const filterHandler=()=>{
    switch (status){
      case "completed":
        setFilterTodos(todos.filter(todo =>todo.completed === true))
        break;
      case "uncompleted":
        setFilterTodos(todos.filter(todo =>todo.completed === false));
        break
      default:
        setFilterTodos(todos);
        break;
     
    }
  }

  //save to local storage
  const saveLocalTodos =()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  const getLocalTodos = ()=>{
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos",JSON.stringify([]));
    }else{
     let localStore = JSON.parse(localStorage.getItem("todos"));
      
     setTodos(localStore);
    }
  }
  
  return (
    <div className="App">
    <header>
      <h1>Haile's Todo list</h1>
    </header>
    <Form 
    setInputText={setInputText}  
    todos={todos} 
    setTodos={setTodos} 
    inputText={inputText}
    setStatus={setStatus}
   
    />
    
    <TodoList 
    todos={todos}
     setTodos={setTodos} 
     inputText={inputText}
     filterTodos={filterTodos}
     />
    </div>
  );
}

export default App;
