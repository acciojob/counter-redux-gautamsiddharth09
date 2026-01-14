import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { increment, decrement } from "../app/CounterSlice"

const App = () => {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.count)

  return (
    <div>
      {/* 1st child */}
      <h1>{count}</h1>

      {/* 2nd child */}
      <button onClick={() => dispatch(increment())}>
        increment
      </button>

      {/* 3rd child */}
      <button onClick={() => dispatch(decrement())}>
        decrement
      </button>
    </div>
  )
}

export default App
