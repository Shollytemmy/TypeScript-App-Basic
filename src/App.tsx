import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/User';
import Counter from './components/Counter';

function App() {
   const [user, setUser] = useState<string | null>(null)

  let skills = ["React", "TypeScript",]
  return (
    <div className="App">
      <User name={'User1'} isLogIn={false} age={0} skills={skills} />
      <Counter increase='Increase' decrease='Decrease' incByFive= 'incByFive' />
    </div>
  );
}

export default App;
