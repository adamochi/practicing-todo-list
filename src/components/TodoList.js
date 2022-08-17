import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const TodoList = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  // Load todos
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos"));
    if (saved !== null) {
      setTodo(saved);
    }
  }, []);

  // set text
  function onChange(event) {
    setText(event.target.value);
  }

  // set todos
  function onSubmit(event) {
    event.preventDefault();
    setTodo((current) => [
      ...current,
      {
        text: text,
        id: Date.now(),
      },
    ]);
    setText("");
  }

  // save todos
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
    // console.log(todo);
  }, [todo]);
  // delete a todo
  const deleteTodo = (e) => {
    const id = parseInt(e.target.id);
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h1 style={{ textDecoration: "underline" }}>To Do List</h1>
      <form onSubmit={onSubmit}>
        <input
          placeholder="write a todo and press enter"
          autoFocus
          type="text"
          value={text}
          onChange={onChange}
        />
        <button>Add</button>
      </form>
      <ul>
        {todo.map((item) => (
          <li
            key={item.id}
            style={{
              backgroundColor: "paleturquoise",
              width: "300px",
              position: "relative",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "blue" }}
              to={`/${item.id}`}
            >
              {item.text}
            </Link>
            {
              <FontAwesomeIcon
                icon={faTrashAlt}
                id={item.id}
                onClick={deleteTodo}
                style={{
                  cursor: "pointer",
                  fontSize: "20px",
                  padding: "10px",
                }}
              />
            }
            {
              <button
                style={{ display: "absolute", right: "0", top: "3px" }}
                id={item.id}
                onClick={deleteTodo}
              >
                🧨
              </button>
            }
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
