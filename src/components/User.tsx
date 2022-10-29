import { useState } from "react"

type userProp = {
    name:string,
   user: string | null,
    isLogIn: boolean,
    age: number,
    skills: string[],
    setUser: React.Dispatch<React.SetStateAction<string | null>>,
   setIsLogin: React.Dispatch<React.SetStateAction<boolean>> 
    
    
}



const User = ({name, isLogIn, age, skills, user, setUser, setIsLogin}:userProp
   
  ): JSX.Element => {
   
  
  return (
    <div>
     
     <p>{age}</p>
     <p>{skills.map((skill) => <li key={skill}>{skill}</li>)}</p>
     <button onClick={

      () => {setIsLogin(!isLogIn)
        setUser("Admin")
      }
      
      

      }>Toggle</button>
     <p>{isLogIn 
     ? user
     : ''}</p> 
      </div>
  )
}

export default User