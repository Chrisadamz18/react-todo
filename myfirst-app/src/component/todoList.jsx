import React from "react";
// importing components
import Todo from "./todo";

function TodoList({ todos, setTodos, filter }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filter.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            todo={todo}
            key={todo.id}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
