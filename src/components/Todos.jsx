import React from "react";
import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "Makan Siang"
    },
    {
      text: "Makan Malam"
    },
    {
      text: "Makan Pagi"
    },
    {
      text: "Makan Siang"
    },
    {
      text: "Makan Malam"
    },
    {
      text: "Makan Pagi"
    }
  ];

  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
