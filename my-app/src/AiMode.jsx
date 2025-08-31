import {useState, useEffect} from 'react';
import "./AiMode.css"

export default function AiMode({onAiSubmit, onBack}) {

    const [inputText,setInputText] = useState("")
      const [submittedNotes, setSubmittedNotes] = useState("")
      const [showFlashCard,setShowFlashCard] = useState(false);
      const [aiMode,setAiMode] = useState(false);
    
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

    return(
        <>
            <div id='ai-header'>
                <strong id='ai-greeting'>What do you want to memorize?</strong>
                <p id='ai-sub-greeting'>Capture your thoughts and make them stick</p>
            </div>
            <textarea 
                id='ai-input-field' 
                placeholder="Add notes here" 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />

            <input id='ai-submit-button' type="submit" value="Submit" onClick={handleSubmit} />
        </>
    );
}