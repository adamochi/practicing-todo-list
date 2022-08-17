import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const id = useParams();
  const thisId = parseInt(id.id);
  const saved = JSON.parse(localStorage.getItem("todos"));
  // find an object/item in an array
  const todo = saved.find((potato) => potato.id === thisId);

  //   const detail = saved.filter((todo) => todo.id === thisId);
  //   const todo = detail[0];

  const datey = new Date(todo.id);
  const date = datey.toDateString();
  const hours = datey.getHours().toString().padStart(2, "0");
  const mins = datey.getMinutes().toString().padStart(2, "0");

  const deleteTodo = (e) => {
    const id = parseInt(e.target.id);
    console.log(id);
    const newArray = saved.filter((todo) => todo.id !== thisId);
    console.log(newArray);
    localStorage.setItem("todos", JSON.stringify(newArray));
  };

  return (
    <div>
      <h1>Todo:</h1>
      <h2>{todo.text}</h2>
      <h4>
        {hours}:{mins}
        {hours > 11 ? "PM" : "AM"} on {date}
      </h4>
      <a href="/">
        <button id={todo.id} onClick={deleteTodo}>
          delete
        </button>
      </a>
    </div>
  );
};

export default Detail;
