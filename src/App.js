import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./App.css";

const App = () => {
  return (
    <div className="bg-[#f0f0f0] min-h-screen grid place-content-center">
      <div className="w-full border shadow p-6  bg-white rounded-lg text-center">
        <h1 className=" font-bold text-3xl"> To-Do App</h1>
        <TaskInput />

        <p className="">Made by Ayush Kumar</p>
      </div>
      <TaskList />
    </div>
  );
};

export default App;
