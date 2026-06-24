import { useContext } from "react"
import TaskContext from "../context/TodoContext"


const AllTask = () => {

  const { allTasks, handleEditTask, handleDeleteTask } = useContext(TaskContext);
  // console.log(allTasks);

  return (
    <>
      <section>
        {
          allTasks.map((task, idx) => (
            <p key={idx}>{task.taskTitle} {task.taskDescription} <span onClick={() => handleEditTask(task, idx)}>Edit</span> <span onClick={() => handleDeleteTask(idx)}>Delete</span></p>
          ))
        }
      </section>
    </>
  )
}

export default AllTask