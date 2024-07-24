import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import React, { useState } from "react";
import { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { About } from "./MyComponents/about";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am DONE", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length == 0) {
      sno = 0;
    } else {
      let sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <BrowserRouter>
      <Header title="Todos-app" searchBar={true} />

        <Routes>
          <Route path="/" element={<AddTodo addTodo={addTodo}/>} />
          {/*
           <Todos todos={todos} onDelete={onDelete} /> */}
          <Route path="about" element={<About />} />
        </Routes>
      

      <Footer />
    </BrowserRouter>
  );
}

export default App;
