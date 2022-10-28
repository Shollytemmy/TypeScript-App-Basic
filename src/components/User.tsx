import { useState } from "react"

type userProp = {
    user: string,
    setUser: string,
    isLogIn: boolean,
    age: number,
    skills: string[]
    
    
}



const User = ({name, isLogIn, age, skills}: 
  {name:string, isLogIn: boolean, age: number, skills: string[]}
  ): JSX.Element => {
   
  
  return (
    <div>
     
     <p>{age}</p>
     <p>{skills.map((skill) => <li key={skill}>{skill}</li>)}</p>
     <button>Toggle</button>
     <p>{isLogIn ? name : ''}</p> 
      </div>
  )
}

export default User