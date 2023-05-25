import React from "react";
import { useRef } from "react";
import { AiFillEdit } from "react-icons/ai"
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5"
import { motion } from "framer-motion";

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
      <motion.li 
      whileHover={{
        scale: 0.9, transition: {type: "spring", duration:.1}
      }}
      
      key={item.id} className="card">
        <textarea
          ref={inputRef}
          disabled={inputRef.current}
          defaultValue={item.item}
          onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
        />
        <div className="btns">
            <motion.button
            whileTap={{ scale: 0.9}}
            whileHover={{scale:1.3}}
            style={{color: "green"}}
            onClick={() => changeFocus()}><AiFillEdit/>
            </motion.button>

            {
                item.completed === false && (

                <motion.button
                whileTap={{ scale: 0.9}}
                whileHover={{scale:1.3}}
                style={{color: "red"}}
                onClick={() => completeTodo(item.id)}><IoCheckmarkDoneSharp/>
                </motion.button>
            )}

            <motion.button
            whileTap={{ scale: 0.9}}
            whileHover={{scale:1.3}}
            onClick={() => removeTodo(item.id)}><IoClose/>
            </motion.button>{" "}
        </div>
        {item.completed && <span className="completed">Done</span>}
      </motion.li>
  );
};

export default TodoItem;
