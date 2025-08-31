import {useState} from 'react';
import './FlashCard.css';

export default function FlashCard({notes}) {
    const [flipped, setFlipped] = useState(false);

    // const activateFlashcardMode = () => {
    //     document.getElementById("root").style.backgroundColor = "purple";
    // };

    {document.getElementById("root").style.backgroundColor = "#6009bdff";}

    const handleFlip = () =>{
        setFlipped(!flipped);
    }

    return(
        <>
            <div className='card' onClick={() => {handleFlip();}}>
                {!flipped ? <p>Question:</p> : <p>{notes}</p>}
            </div>
        </>
    )
}