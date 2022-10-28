import React, { useReducer } from 'react'
import IncBy from './IncBy';
import { initialState } from '../App';
import { ACTIONTYPE } from '../App';



export type CounterProp = {
    increase: string,
    decrease: string,
    incByFive: string,
    dispatch: React.Dispatch<ACTIONTYPE>,
    state: typeof initialState
}




const Counter = ({increase, decrease, incByFive, dispatch, state}: CounterProp) => {
  
    
  return (
    <>
    <h1>Counter - {state.count}</h1>
    <IncBy  increase = {increase} decrease = {decrease} incByFive = {incByFive} dispatch = {dispatch} state = {state}/>
    </>
  )
}

export default Counter