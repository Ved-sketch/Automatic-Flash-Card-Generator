import { useState } from 'react'
import './App.css'
import FlashCard from './FlashCard'

function App() {
  
  const [inputText,setInputText] = useState("")
  const [submittedNotes, setSubmittedNotes] = useState("")
  const [showFlashCard,setShowFlashCard] = useState(false);


  const handleSubmit = () => {
    if(inputText.trim() === ""){
      alert("Please add some text first!!");
      return;
    }

    setSubmittedNotes(inputText)
    setShowFlashCard(true)
    console.log("Submitted text:", inputText);
  }

  const handleBackToInput = () => {
    setShowFlashCard(false)
    setInputText("")
  }

  if (showFlashCard) {
    return <FlashCard notes={submittedNotes} onBack={handleBackToInput} />
  }

  return (
    <>
      <div id='header'>
        <strong id='greeting'>What do you want to memorize?</strong>
        <p id='sub-greeting'>Capture your thoughts and make them stick</p>
      </div>
      <textarea 
        id='input-field' 
        placeholder="Add notes here" 
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <input id='submit-button' type="submit" value="Submit" onClick={handleSubmit} />
    </>
  )
}

export default App
