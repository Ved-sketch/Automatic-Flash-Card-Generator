import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <>
      <div className="App" id='greeting'>
        <h1>Hello!</h1>
      </div>

      <div className="App" id='input-field'>
        <input type="text" placeholder="Type your text here..." />
      </div>
    </>
  )
}

export default App
