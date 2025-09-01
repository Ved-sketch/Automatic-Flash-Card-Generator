import {useState, useEffect} from 'react';
import './FlashCard.css';

export default function FlashCard({notes, onBack}) {
    const [flipped, setFlipped] = useState(false);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    
    // Split notes into individual cards (assuming they're separated by double newlines)
    const splitNotes = notes.split('\n\n').filter(card => card.trim() !== '');

    // creating proper card pairs
    const cards = [];
    for(let i = 0;i < splitNotes.length; i+=2){
        if(splitNotes[i] && splitNotes[i+1]){
            cards.push({
                "question": splitNotes[i].replace(/^Q:\s*/, ''),
                "answer": splitNotes[i+1].replace(/^A:\s*/, '')
            });
        }
    }

    const currentCard = cards[currentCardIndex];

    useEffect(() => {
        document.getElementById("root").style.backgroundColor = "#6009bdff";
        
        // Cleanup when component unmounts
        return () => {
            document.getElementById("root").style.backgroundColor = "#454545";
        };
    }, []);

    const handleFlip = () =>{
        setFlipped(!flipped);
    }

    const handleNext = () => {
        if (currentCardIndex < cards.length - 1) {
            setCurrentCardIndex(currentCardIndex + 1);
            setFlipped(false); // Reset flip state when moving to next card
        }
    }

    const handlePrevious = () => {
        if (currentCardIndex > 0) {
            setCurrentCardIndex(currentCardIndex - 1);
            setFlipped(false); // Reset flip state when moving to previous card
        }
    }

    return(
        <>
            <div className='flashcard-container'>
                <div className='card' onClick={handleFlip}>
                    {!flipped ? (
                        <div>
                            <p>Question:</p>
                            <p>{currentCard?.question}</p>
                        </div>
                    ) : (
                        <div>
                            <p>Answer:</p>
                            <p>{currentCard?.answer}</p>
                        </div>
                    )}
                </div>
            </div>
            
            <div className='navigation-controls-outside'>
                <div className='navigation-controls'>
                    <button 
                        className='nav-button' 
                        onClick={handlePrevious}
                        disabled={currentCardIndex === 0}
                    >
                        Previous
                    </button>
                    
                    <span className='card-counter'>
                        {currentCardIndex + 1} / {cards.length}
                    </span>
                    
                    <button 
                        className='nav-button' 
                        onClick={handleNext}
                        disabled={currentCardIndex === cards.length - 1}
                    >
                        Next
                    </button>
                </div>

                <button className='back-button' onClick={onBack}>
                    Back to Input
                </button>
            </div>
        </>
    )
}