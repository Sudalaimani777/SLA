import { useContext } from "react"
import TodoContext from "./context/TodoContext"


const App = () => {

  const { handleAddTask, handleTaskDataChange, allTasks, taskData, handleEdit } = useContext(TodoContext);

  console.log(allTasks)

  return (
    <>
      <form onSubmit={handleAddTask}>
        <input type="text" placeholder="Enter Title" name="taskTitle" value={taskData.taskTitle} onChange={handleTaskDataChange} />
        <input type="text" placeholder="Enter Title" name="taskDescription" value={taskData.taskDescription} onChange={handleTaskDataChange} />
        <button>Add Task</button>
      </form>

      <main>
        {
          allTasks.map(task => (
            <div key={task.id}>
              <p>{task.taskTitle}</p>
              <p>{task.taskDescription}</p>
              <p>
                <span>
                  <button onClick={() => handleEdit(id)}>Edit</button>
                </span> 
                <span>
                  <button>Delete</button>
                </span>
              </p>
            </div>
          ))
        }
      </main>
    </>
  )
}

export default App