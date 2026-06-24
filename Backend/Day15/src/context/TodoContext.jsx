import { useState, createContext, useEffect } from "react";


const TaskContext = createContext();

export const TaskProvider = ({ children }) => {

    const [singleTask, setSingleTasks] = useState({ taskTitle: "", taskDescription: "" })
    const [allTasks, setAllTask] = useState([]);
    const [editTask, setEditTask] = useState(null);

    const handleAddTask = (e) => {
        e.preventDefault();
        setAllTask(prevTask => [...prevTask, singleTask]);
        // console.log(allTasks);
        setSingleTasks({ taskTitle: "", taskDescription: "" });
    }

    const handleChange = (e) => {
        setSingleTasks({ ...singleTask, [e.target.name]: e.target.value })
        // console.log(singleTask);
    }

    const handleEditTask = (tsk, idx) => {
        // console.log(tsk, idx);
        setSingleTasks(tsk);
        setEditTask(idx);
        // console.log(editTask);
    }

    useEffect(() => {

    }, [editTask]);



    const handleDeleteTask = (index) => {
        setAllTask(prevTask => prevTask.filter((_, i) => i !== index));
    }

    const handleUpdateTask = (e) => {
        e.preventDefault();
        setAllTask(prevTask => prevTask.map((task, taskId) => taskId === editTask ? { ...task, singleTask } : task));
        setEditTask(null);
        setSingleTasks({ taskTitle: "", taskDescription: "" });
    }

    return (
        <TaskContext.Provider
            value={{
                allTasks,
                handleAddTask,
                singleTask,
                handleChange,
                handleEditTask,
                handleDeleteTask,
                handleUpdateTask,
                editTask
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContext;