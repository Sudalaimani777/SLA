import { useReducer } from 'react';
import { counterReducer } from './reducers/counterReducer';



// 2. Use it in a component
export default function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  console.log(state)

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}
