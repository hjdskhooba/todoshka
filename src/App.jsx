import React, { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    if(!input.length){
      addTodo = 1
    }
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    // add the todo to the list
    setList([...list, newTodo]);

    // clear input box
    setInput("");
  };

  const deleteTodo = (id) => {
    // Filter out todo with the id
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  };

  return (
    <div className="todolishka">
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <a onClick={() => addTodo(input)}>Add</a>
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <a className="a2" onClick={() => deleteTodo(todo.id)}>Delete</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;