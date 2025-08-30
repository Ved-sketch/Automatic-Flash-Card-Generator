import {useState} from 'react';
import './FlashCard.css';

export default function FlashCard({notes}) {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () =>{
        setFlipped(!flipped);
    }

    return(
        <>
            <div className='card' onClick={handleFlip}>
                {!flipped ? <p>Question:</p> : <p>{notes}</p>}
            </div>
        </>
    )
}