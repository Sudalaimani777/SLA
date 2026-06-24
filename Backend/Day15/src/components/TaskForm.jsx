import { useContext } from "react"
import TaskContext from "../context/TodoContext"


const TaskForm = () => {

    const { singleTask, handleChange, handleAddTask, editTask, handleUpdateTask } = useContext(TaskContext);
    // console.log(singleTask)

    return (
        <>

            <section>
                <form>
                    <label htmlFor="taskTitle">Enter Your Task Title</label>
                    <input type="text" placeholder="Task Title" id="taskTitle" value={singleTask.taskTitle} name="taskTitle" onChange={handleChange} />
                    <label htmlFor="taskDescription">Enter Your Task Description</label>
                    <input type="text" placeholder="Add Description" value={singleTask.taskDescription} name="taskDescription" onChange={handleChange} />
                    
                    {
                        editTask !== null ? <button onClick={handleUpdateTask}>Update</button> : <button onClick={handleAddTask}>Add</button>
                    }
                </form>
            </section>

        </>
    )
}

export default TaskForm