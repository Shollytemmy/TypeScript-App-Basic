import React, { useReducer, useState } from 'react';

import './App.css';
import User from './components/User';
import Counter from './components/Counter';


export const initialState = {count: 0}

export type ACTIONTYPE = 

|{type: "increment" ; payload: number}
|{type: "decrement" ; payload: number}
|{type: "incByFive" , payload: number | string}

const reducerFunc = (state: typeof initialState, action: ACTIONTYPE ) => {
    console.log("state", state, action.payload);
    
    switch(action.type){
      
      
        case "increment": return{
            count: state.count + 1
        }

        case "decrement": return{
            count: state.count - 1
        }

        case "incByFive": {
          if(typeof action.payload === "string"){
            let num = Number(action.payload)
            return {count: state.count + Number(action.payload) }
          }

          
         
          
           return  {count: state.count + action.payload}
        }
        default:
            throw new Error()

    }

}

function App() {
    const [state, dispatch] =  useReducer(reducerFunc, initialState)
   const [user, setUser] = useState<string | null>(null)
   const [isLogin, setIsLogin] = useState(false)

  let skills = ["React", "TypeScript",]
  return (
    <div className="App">
      <User name={'User1'} isLogIn={isLogin} setIsLogin = {setIsLogin} age={0} skills={skills} user = {user} setUser = {setUser} />
      <Counter increase='Increase' decrease='Decrease' incByFive= 'incByFive' state = {state} dispatch = {dispatch} />
    </div>
  );
}

export default App;
