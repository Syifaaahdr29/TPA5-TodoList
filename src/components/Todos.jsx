import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducers";
import { removeTodos } from "../redux/reducers";
import { updateTodos } from "../redux/reducers";
import { completeTodos } from "../redux/reducers";
import { useRef } from "react";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodos: (id) => dispatch(removeTodos(id)),
    updateTodos: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState(""); 

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  //console.log("todo text", props);
  return (
    <div className="addTodos">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
      />
      <button className="add-btn" onClick={() => props.addTodo({
        id: Math.floor(Math.random()*1000),
        item: todo,
        completed:false,
      })}>add
      </button>
      <br>
      </br>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);

  
