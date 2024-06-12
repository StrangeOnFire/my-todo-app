import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, editTask } from "../redux/tasksSlice";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(null);
  const [newTask, setNewTask] = useState("");

  const handleEditTask = (index) => {
    setIsEditing(index);
    setNewTask(tasks[index]);
  };

  const handleSaveTask = (index) => {
    dispatch(editTask({ index, newTask }));
    setIsEditing(null);
  };

  return (
    <ul className=" grid gap-4 m-4">
      {tasks.map((task, index) => (
        <li key={index} className="task-item bg-white p-4 rounded-lg">
          {isEditing === index ? (
            <div className="grid">
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="border py-1 px-3" 
              />
              <button
                style={{ marginTop: "1rem" }}
                onClick={() => handleSaveTask(index)}
                className="text-white bg-green-600 px-6 py-1 rounded"
              >
                Save
              </button>
            </div>
          ) : (
            <>
              {task}
              <div className="flex mt-4 text-sm justify-around">
                <button
                  onClick={() => handleEditTask(index)}
                  className="text-white bg-green-600 px-6 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  className="text-white bg-red-600 px-6 py-1 rounded"
                  onClick={() => dispatch(deleteTask(index))}
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
