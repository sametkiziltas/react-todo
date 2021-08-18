import React from 'react';

function Todo({ todo, toggleComplete, removeTodo }) {
  function handleToggleClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <li>
      <input
        type="checkbox"
        onChange={handleToggleClick}
        checked={todo.completed}
      />
      <text
        style={{
          margin: '30px',
          textDecoration: todo.completed ? 'line-through' : null
        }}
      >
        {todo.task}
      </text>

      <button onClick={handleRemoveClick}>X</button>
    </li>
  );
}

export default Todo;
