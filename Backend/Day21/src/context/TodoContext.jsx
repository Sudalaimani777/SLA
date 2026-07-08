import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {

    const [allTasks, setAllTasks] = useState([]);
    const [taskData, setTaskData] = useState({ id: uuid(), taskTitle: "", taskDescription: "" });

    const handleTaskDataChange = e => {
        const { name, value } = e.target;
        setTaskData({ ...taskData, [name]: value })
    }

    const handleAddTask = (e) => {
        e.preventDefault();
        setAllTasks(prevTask => [...prevTask, taskData]);
        // setAllTasks({ id: "", taskTitle: "", taskDescription: "" });
    }


    return (
        <TodoContext.Provider value={{ handleAddTask, handleTaskDataChange, allTasks, taskData }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext;