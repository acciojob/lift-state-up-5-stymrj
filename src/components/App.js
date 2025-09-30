
import React, { useState } from "react";
import './../styles/App.css';
import ChildComponent from "./ChildComponent";

const App = () => {
  const[isLoggedIn,setIsLoggedIn] = useState(false)
  return (
    <div style={{display:'flex', flexDirection:'column', height:'100vh', width:'100vw', fontSize:'20px'}}>
      {isLoggedIn?'You are loggedin!':
      <ChildComponent isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      }
    </div>
  )
}

export default App
