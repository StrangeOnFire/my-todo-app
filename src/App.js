import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="app-container">
        <h1>To-Do App</h1>
        <TaskInput />

        <p>Made by Ayush Kumar</p>
      </div>
      <TaskList />
    </div>
  );
};

export default App;
