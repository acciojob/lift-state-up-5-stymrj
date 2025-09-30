import React from 'react'

const ChildComponent = ({setIsLoggedIn, isLoggedIn}) => {
    console.log(isLoggedIn)
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
            {/* Do not remove the main div */}
            <h1>Parent Component</h1>
            <label>Username: </label>
            <input style={{border:'5px',height:'5vh',width:'20vw', background:"cyan", margin:'2px', fontSize:'20px'}}/>
            <label>Password: </label>
            <input style={{border:'5px',height:'5vh',width:'20vw', background:"gray", margin:'2px', fontSize:'20px'}}/>
            <button
            onClick={()=>{
              setIsLoggedIn(true)
            }} 
            style={{width:'20vw', height:'5vh', marginTop:'10px', backgroundColor:'blue', color:'white', fontSize:'20px'}}>Login</button>        
        </div>
  )
}

export default ChildComponent