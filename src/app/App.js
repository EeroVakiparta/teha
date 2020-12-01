import React from "react";
import AddTodo from "../containers/AddTodo"; // containers as functional, components non functional
import VisibleTodoList from "../containers/VisibleTodoList";

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
  </div>
);

export default App;
