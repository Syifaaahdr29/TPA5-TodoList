import React from "react";
import { useRef } from "react";
import { removeTodos } from "../redux/reducers";
import { updateTodos } from "../redux/reducers";
import { completeTodos } from "../redux/reducers";
import { current } from "@reduxjs/toolkit";

const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };

  return (
      <li key={item.id} className="card">
        <textarea
          ref={inputRef}
          disabled={inputRef.current}
          defaultValue={item.item}
          onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
        />
        <div className="btns">
            <button onClick={() => changeFocus()}>Edit</button>
            <button onClick={() => completeTodo(item.id)}>Complete</button>
            <button onClick={() => removeTodo(item.id)}>Delete</button>{" "}
        </div>
        {item.completed && <span className="completed">Done</span>}
      </li>
  );
};

export default TodoItem;
