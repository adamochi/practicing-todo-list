import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const id = useParams();
  const thisId = parseInt(id.id);

  const saved = JSON.parse(localStorage.getItem("todos"));
  //   const welllll = saved.find((item) => item === thisId);
  //   console.log(welllll);
  const todo = saved.find((potato) => potato.id === thisId);
  //   console.log(todo);

  //   const detail = saved.filter((todo) => todo.id === thisId);
  //   const todo = detail[0];

  const datey = new Date(todo.id);
  const date = datey.toDateString();
  const hours = datey.getHours().toString().padStart(2, "0");
  const mins = datey.getMinutes().toString().padStart(2, "0");

  //   console.log("saved array:", saved);
  //   console.log("detail of this todo:", detail);

  return (
    <div>
      <h1>Todo:</h1>
      <h2>{todo.text}</h2>
      <h4>
        {hours}:{mins}
        {hours > 11 ? "PM" : "AM"} on {date}
      </h4>
    </div>
  );
};

export default Detail;
