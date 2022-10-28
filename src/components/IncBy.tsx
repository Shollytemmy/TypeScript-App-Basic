import React, { useState } from 'react'
import { CounterProp } from './Counter'



const IncBy = ({increase, decrease, incByFive, dispatch}: CounterProp) => {
    const [value, setValue] = useState<number | string>(1)
    
  return (
    <div>
        <input type="text" value={value} onChange ={(e) => setValue (e.target.value) } />

        
    <button onClick={() => dispatch({type: "increment", payload: 7})}>{increase}</button>
    <button onClick={() => dispatch({type: "decrement", payload: 1})}>{decrease}</button>
    <button onClick={() => dispatch({type: "incByFive", payload: value})}>{incByFive}</button>


    </div>
  )
}

export default IncBy