import React, { useState, useRef } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoListItem from "./components/TodoListItem";
import Box from "@mui/material/Box";
import { borderRadius } from "@mui/system";

function App() {
  const [todos, setTodos] = useState([
    { id: 0, text: "리액트 강의 듣기", checked: true },
    { id: 1, text: "방 청소하기", checked: false },
  ]);
  const nextId = useRef(2);
  const onInput = (text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos(todos.concat(todo));
    nextId.current++;
  };
  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const onToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <div className="App">
      <Box
        sx={{
          width: "50%",
          height: 600,
          border: "1px dashed grey",
          margin: "20px auto",
          borderRadius: "30px",
          overflow: "scroll",
        }}
      >
        <TodoInput onInput={onInput} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </Box>
    </div>
  );
}

export default App;
