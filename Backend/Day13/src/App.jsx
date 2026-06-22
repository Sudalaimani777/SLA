import { useState } from "react"


const App = () => {

  const [user, setUser] = useState("");
  const [task, setTask] = useState([]);
  const [err, setErr] = useState("");

  const handleUser = (e) => {
    setUser(e.target.value);
    // console.log(user);
  }

  const handleAddTask = (e) => {
    e.preventDefault();
    if (user === "") {
      setErr("Enter the task to add");
      return
    }
    setTask(prevTask => [...prevTask, user]);
    setUser("")
  }

  const handleEdit = (idx) => {
    console.log(idx);
    const editedTask = task.find((_, i) => i === idx);
    setUser(editedTask);
  }

  return (
    <>
      <header style={{backgroundColor:"red"}}>
        <h1 className="text-center">Task</h1>
      </header>

      <form onSubmit={handleAddTask}>
        <input type="text" onChange={handleUser} value={user} />
        <button>Add task</button>
      </form>
      <section>
        {
          task.map((task, i) => (
            <p key={i + 1}>{task} <span><button onClick={() => handleEdit(i)}>Edit</button></span></p>
          ))
        }
      </section>
    </>
  )
}

export default App