import "./App.css";
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import React, { useState } from 'react';
import { AddToDo } from "./MyComponents/AddToDo";

function App() {
  const onDelete = (todo) => {
    // console.log("I am onDelete of todo ", todo);
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  }

  const [todos, setTodos] = useState([
    {
      sno1: 1,
      title: "Go to the market",
      description: "Go to the weekend market shopping"
    },
    {
      sno1: 2,
      title: "Go to the mall",
      description: "Go to the weekend market shopping"
    },
    {
      sno1: 3,
      title: "Go to the Ghat",
      description: "Go to the weekend market shopping"
    }
  ]);

  const addTodo = (title, desc) => {
    console.log("i am adding", title, desc);
  }

  return (
    <>
      <Header title="My Todo List" searchBar={true} />
      <AddToDo addToDo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
