import { useState } from 'react'
import './App.css'
import FlashCard from './FlashCard'
import AiMode from './AiMode'

function App() {
  
  const [inputText, setInputText] = useState("")
  const [cards, setCards] = useState([]) // Store cards array instead of notes string
  const [showFlashCard, setShowFlashCard] = useState(false);
  const [aiMode, setAiMode] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const parseNotesToCards = (notes) => {
    const splitNotes = notes.split('\n\n').filter(card => card.trim() !== '');
    const parsedCards = [];
    
    for(let i = 0; i < splitNotes.length; i += 2) {
      if(splitNotes[i] && splitNotes[i+1]) {
        parsedCards.push({
          question: splitNotes[i].replace(/^Q:\s*/, ''),
          answer: splitNotes[i+1].replace(/^A:\s*/, '')
        });
      }
    }
    return parsedCards;
  }

  const handleSubmit = () => {
    let newCards = [];
    
    if(aiMode) {
      if(inputText.trim() === ""){
        alert("Please add some text first!!");
        return;
      }
      newCards = parseNotesToCards(inputText);
    } else {
      if(question.trim() === "" || answer.trim() === ""){
        alert("Please fill both question and answer fields!!");
        return;
      }
      // Create a single card from question and answer
      newCards = [{
        question: question.trim(),
        answer: answer.trim()
      }];
    }
    
    // Add new cards to existing cards
    setCards(prevCards => [...prevCards, ...newCards]);
    setInputText("");
    setQuestion("");
    setAnswer("");
    setShowFlashCard(true);
    console.log("Submitted cards:", newCards);
  }

  const handleBackToInput = () => {
    setShowFlashCard(false);
    // Don't clear the cards, keep them persistent
    setInputText("");
    setQuestion("");
    setAnswer("");
  }

  const handleAddCard = () => {
    setShowFlashCard(false);
    // Keep existing cards, just go back to input to add more
  }

  const toggleMode = () => {
    setAiMode(!aiMode);
    // Clear inputs when switching modes
    setInputText("")
    setQuestion("")
    setAnswer("")
  }

  if (showFlashCard && cards.length > 0) {
    return (
      <FlashCard 
        cards={cards} 
        onBack={handleBackToInput} 
        onAddCard={handleAddCard}
      />
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
