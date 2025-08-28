import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <>
      <div id='header'>
        <strong id='greeting'>What do you want to memorize?</strong>
        <p id='sub-greeting'>Capture your thoughts and make them stick</p>
      </div>
      <textarea id='input-field' placeholder="Add notes here" />
      <input id='submit-button' type="submit" value="Submit" />

    </>
  )
}

export default App
