import { useState } from 'react'
import './App.css'
import FlashCard from './FlashCard'
import AiMode from './AiMode'

function App() {
  
  const [inputText, setInputText] = useState("")
  const [submittedNotes, setSubmittedNotes] = useState("")
  const [showFlashCard, setShowFlashCard] = useState(false);
  const [aiMode, setAiMode] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = () => {
    if(aiMode) {
      if(inputText.trim() === ""){
        alert("Please add some text first!!");
        return;
      }
      setSubmittedNotes(inputText)
    } else {
      if(question.trim() === "" || answer.trim() === ""){
        alert("Please fill both question and answer fields!!");
        return;
      }
      // Combine question and answer for the flashcard
      setSubmittedNotes(`Q: ${question}\n\nA: ${answer}`)
    }
    
    setShowFlashCard(true)
    console.log("Submitted content:", aiMode ? inputText : `Q: ${question} A: ${answer}`);
  }

  const handleBackToInput = () => {
    setShowFlashCard(false)
    setInputText("")
    setQuestion("")
    setAnswer("")
  }

  const toggleMode = () => {
    setAiMode(!aiMode);
    // Clear inputs when switching modes
    setInputText("")
    setQuestion("")
    setAnswer("")
  }

  if (showFlashCard) {
    return (
      <FlashCard notes={submittedNotes} onBack={handleBackToInput} />
    );
  }

  return (
    <>
      <div className="mode-toggle">
        <button className="toggle-button" onClick={toggleMode}>
          {aiMode ? 'Switch to Normal Mode' : 'Switch to AI Mode'}
        </button>
      </div>

      {aiMode ? (
        <AiMode />
      ) : (
        <>
          <div id='header'>
            <strong id='greeting'>Create your flashcard</strong>
            <p id='sub-greeting'>Enter a question and its answer</p>
          </div>
          
          <div className="input-container">
            <textarea 
              id='question-field' 
              placeholder="Enter your question here..." 
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            
            <textarea 
              id='answer-field' 
              placeholder="Enter the answer here..." 
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>
          
          <input id='submit-button' type="submit" value="Create Flashcard" onClick={handleSubmit} />
        </>
      )}
    </>
  )
}

export default App
