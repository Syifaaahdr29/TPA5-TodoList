import React from "react";

const TodoItem = (props) => {
  const { item, updateTodo, removeTodos, completeTodo } = props;

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
    <div>
      <li key={item.id}>
        <textarea
          ref={inputRef}
          disabled={inputRef}
          defaultValue={item.item}
          onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
        />
        <button onClick={() => changeFocus()}>Edit</button>
        <button onClick={() => props.completeTodo(item.id)}>Complete</button>
        <button onClick={() => props.removeTodos(item.id)}>Delete</button>{" "}
      </li>
    </div>
  );
};

export default TodoItem;
