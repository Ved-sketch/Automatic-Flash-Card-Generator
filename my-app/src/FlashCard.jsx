import {useState, useEffect} from 'react';
import "/src/assets/Gemini_Generated_Image_d8cvc2d8cvc2d8cv.png"
import './FlashCard.css';

export default function FlashCard({cards, onBack, onAddCard}) {
    const [flipped, setFlipped] = useState(false);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

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

    const addNewCard = () => {
        // Call the parent's onAddCard function to go back to input
        if (onAddCard) {
            onAddCard();
        } else {
            onBack(); // Fallback
        }
    }

    return(
        <>

            <img src="/src/assets/Gemini_Generated_Image_d8cvc2d8cvc2d8cv.png" alt="Background" style={{
                width: '100%',
                height: '100vh',
                objectFit: 'cover',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: -1
            }} />

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

                <div className='buttons-container'>
                    <button className='back-button' onClick={onBack}>
                        Back to Input
                    </button>

                    <button className="add-button" onClick={addNewCard}>Add Card</button>
                </div>
            </div>
        </>
    )
}