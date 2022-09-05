import React from "react";
import TodoListItem from "./TodoListItem";
import List from "@mui/material/List";
function TodoList({ todos, onRemove, onToggle }) {
  return (
    <List>
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </List>
  );
}

export default TodoList;
