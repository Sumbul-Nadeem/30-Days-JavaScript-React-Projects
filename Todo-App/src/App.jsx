import React, { useState } from 'react';
import "./App.css";
import TodoListItems from "./TodoListItems";

function App() {
  const [todoList, setTodoList] = useState([]);

  const saveToDoList = (e) => {
    e.preventDefault();
    let todoname = e.target.todoname.value.trim();
    if (todoname === "") return;

    if (!todoList.includes(todoname)) {
      setTodoList([...todoList, todoname]);
    } else {
      alert("Todo Name Already Exists...");
    }
    e.target.reset();
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name="todoname" />
        <button>Save</button>
      </form>
      <div className="outer">
        <ul>
          {todoList.map((value, index) => (
            <TodoListItems
              value={value}
              key={index}
              indexNumber={index}
              todoList={todoList}
              setTodoList={setTodoList}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
