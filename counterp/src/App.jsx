import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter]=useState(15)
//  let counter=15 
  const addValue= () => {
  counter=counter+1 
  setcounter(counter)
  console.log("clicked",counter)
  }
   const removeVlaue=()=>{
    counter=counter-1 
  setcounter(counter)
 }
  return (
    <>
    <h1>Project with Rohan</h1>
    <h2>Counter value: {counter} </h2>
    <button onClick={addValue}>Add value</button>
    <br/>
    <button onClick={removeVlaue}>Decrease value</button>
    </>
  )
}

export default App
