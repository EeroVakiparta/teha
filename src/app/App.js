import React from "react";
import AddTodo from "../containers/AddTodo"; // containers as functional, components non functional
import VisibleTodoList from "../containers/VisibleTodoList";
import Header from "../components/Header";

const App = () => (
  <div>
    <Header />
    <AddTodo />
    <VisibleTodoList />
  </div>
);

export default App;
