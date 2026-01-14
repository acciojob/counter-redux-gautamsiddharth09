import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, incrementByValue } from "../app/CounterSlice"

const App = () => {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.count)

  return (
    <div>
      <h1>C{count}</h1>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByValue(5))}>
        Increment by 5
      </button>
    </div>
  )
}

export default App
