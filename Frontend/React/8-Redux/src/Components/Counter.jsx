import { useSelector, useDispatch } from "react-redux";
import { increment, decrement,reset } from "../Slice/counterSlice";

const Counter = () => {
  //useSelector is used to access the state from the according to the slice that we wnt ot access
  const count = useSelector(store => store.counter.value) //we need to use the useSelector hook from react-redux to access the state from the store, and we need to pass a function to the useSelector hook that takes the state as an argument and returns the part of the state that we want to access, in this case, we want to access the count property from the state, so we can return state.count.

  //useDispatch is used to take the methdos from the slice and dispatch them to the store
  const dispatch = useDispatch() //we need to use the useDispatch hook from react-redux to dispatch the actions to the store, and we need to call the useDispatch hook and assign it to a variable, in this case, we will assign it to the dispatch variable.
  return (
    <>
      <section>
        <h1>Counter</h1>
        <h3>{count}</h3>
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(decrement())}>-1</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </section>
    </>
  )
}

export default Counter;