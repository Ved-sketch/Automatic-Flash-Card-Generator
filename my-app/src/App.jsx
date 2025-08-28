import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <>

      <h2 id='greeting'>What do you want to memorize?</h2>
      <input id='input-field' type="text" placeholder="Add notes here" />
      <input id='submit-button' type="submit" value="Submit" />

    </>
  )
}

export default App
