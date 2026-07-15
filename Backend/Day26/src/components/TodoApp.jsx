import { useReducer } from "react"
import { todoReducer } from "../reducers/todoReducer";


const TodoApp = () => {

    const todoTask = [];
    const [todoState, todoDispatch] = useReducer(todoReducer, todoTask);

    return (
        <div>TodoApp</div>
    )
}

export default TodoApp