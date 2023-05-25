import React from 'react'
import { connect } from 'react-redux'
import { addTodos } from "../redux/reducers";
import { removeTodos } from "../redux/reducers";
import { updateTodos } from "../redux/reducers";
import { completeTodos } from "../redux/reducers";
import TodoItem from './TodoItem';
import { useState } from 'react';

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

const DisplayTodos = (props) => {
    const [sort, setSort] = useState("active");
    return (
        <div className="displaytodos">
            <div className="buttons">
                <button onClick={()=>setSort("active")}>Active</button>
                <button onClick={()=>setSort("completed")}>Completed</button>
                <button onClick={()=>setSort("all")}>All</button>
            </div>
            <ul>
                {props.todos.length > 0 && sort === "active" 
                    ? props.todos.map((item) => {
                        return (
                            item.completed === false && (
                            <TodoItem
                                key={item.id}
                                item={item}
                                removeTodo={props.removeTodo}
                                updateTodo={props.updateTodo}
                                completeTodo={props.completeTodo}
                            />
                        )
                    );
                }) 
                : null}
            </ul>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);