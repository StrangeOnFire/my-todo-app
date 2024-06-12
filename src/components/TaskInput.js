import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';


const TaskInput = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (task.trim()) {
            dispatch(addTask(task));
            setTask('');
        }
    };

    return (
        <div className=" sm:m-6 flex flex-col md:flex-row gap-4">
            <input 
                type="text" 
                value={task} 
                onChange={(e) => setTask(e.target.value)} 
                placeholder="Add a new task" 
                className='min-w-[270px] sm:min-w-[300px] border px-3 outline-none rounded py-1 '
            />
            <button onClick={handleAddTask} className='bg-blue-600 text-white py-1 px-3 rounded'>Add Task</button>
        </div>
    );
};

export default TaskInput;
