import React, { useState, useEffect } from "react";
import "./App.css";
// importing components
import Todo from "./component/form";
import TodoList from "./component/todoList";

function App() {
  // state stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filter, setFilter] = useState([]);

// UseEffect
  useEffect = (() => {
    filterHandler();
    
  }, [todos, status])


  // Filter fxn
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilter(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilter(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilter(todos);
        break;
    }
  }
  return (
    <div className="App">
      <>
        <header>
          <h1>EliBaron's TODO List</h1>
        </header>
        <Todo
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
          setStatus={setStatus}
        />
        <TodoList filter={filter} setTodos={setTodos} todos={todos} />
      </>
    </div>
  );
}

export default App;
