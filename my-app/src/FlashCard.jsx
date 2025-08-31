import {useState, useEffect} from 'react';
import './FlashCard.css';

export default function FlashCard({notes}) {
    const [flipped, setFlipped] = useState(false);

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

    return(
        <>
            <div className='card' onClick={() => {handleFlip();}}>
                {!flipped ? <p>Question:</p> : <p>{notes}</p>}
            </div>
        </>
    )
}