import React, { useState } from 'react';

function TodoListItems({ value, indexNumber, todoList, setTodoList }) {
  const [status, setStatus] = useState(false);

  const deleteRow = (e) => {
    e.stopPropagation(); 
    const finalList = todoList.filter((_, i) => i !== indexNumber);
    setTodoList(finalList);
  };

  const checkStatus = () => {
    setStatus(!status);
  };

  return (
    <li
      className={status ? "completetodo" : ""}
      onClick={checkStatus}
    >
      {indexNumber + 1}. {value}
      <span onClick={deleteRow} style={{ marginLeft: "10px", cursor: "pointer" }}>
        &times;
      </span>
    </li>
  );
}

export default TodoListItems;
