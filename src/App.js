import logo from "./logo.svg";
import "./App.css";
import React from "react";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <h1>Список задач</h1>
      <TaskList />
    </div>
  );
}

export default App;
