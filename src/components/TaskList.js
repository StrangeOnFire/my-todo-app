import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../redux/tasksSlice';


const TaskList = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(null);
    const [newTask, setNewTask] = useState('');

    const handleEditTask = (index) => {
        setIsEditing(index);
        setNewTask(tasks[index]);
    };

    const handleSaveTask = (index) => {
        dispatch(editTask({ index, newTask }));
        setIsEditing(null);
    };

    return (
        <ul className="task-list">
            {tasks.map((task, index) => (
                <li key={index} className="task-item">
                    {isEditing === index ? (
                        <>
                            <input
                                type="text"
                                value={newTask}
                                onChange={(e) => setNewTask(e.target.value)}
                                style={{width:'100%',}}
                            />
                            <button style={{marginTop:'1rem',}} onClick={() => handleSaveTask(index)}>Save</button>
                        </>
                    ) : (
                        <>
                            {task}
                            <div className='button-div'>
                                 <button onClick={() => handleEditTask(index)}>Edit</button>
                            <button onClick={() => dispatch(deleteTask(index))}>Delete</button>
                            </div>
                           
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
