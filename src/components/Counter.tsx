import React, { useReducer } from 'react'

const initialState = {count: 0}

type ACTIONTYPE = 

|{type: "increment" ; payload: number}
|{type: "decrement" ; payload: number}
|{type: "incByFive" , payload: number}

const reducerFunc = (state: typeof initialState, action: ACTIONTYPE ) => {
    console.log("state", state);
    
    switch(action.type){
        case "increment": return{
            count: state.count + 1
        }

        case "decrement": return{
            count: state.count - 1
        }

        case "incByFive": return{
            count: state.count + action.payload
        }
        default:
            throw new Error()

    }

}

type CounterProp = {
    increase: string,
    decrease: string,
    incByFive: string
}




const Counter = ({increase, decrease, incByFive}: CounterProp) => {
    const [state, dispatch] =  useReducer(reducerFunc, initialState)
    
  return (
    <>

    <h1>Counter - {state.count}</h1>
    <button onClick={() => dispatch({type: "increment", payload: 7})}>{increase}</button>
    <button onClick={() => dispatch({type: "decrement", payload: 1})}>{decrease}</button>
    <button onClick={() => dispatch({type: "incByFive", payload: 5})}>{incByFive}</button>


    </>
  )
}

export default Counter