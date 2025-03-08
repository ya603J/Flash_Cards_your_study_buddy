import React, { useEffect,useState } from 'react';
import './Cards.css';

const Cards = ({ q, a }) => {
  const [question, setQuestion] = useState(q);
  const [answer, setAnswer] = useState(a);
  const [isBack, setIsBack] = useState(false);

  useEffect(() => {
    setQuestion(q);
    setAnswer(a);
    setIsBack(false);
  }, [q, a]);

  const handleClick = () => {
    setIsBack(!isBack);
  };

  return (
    <div className='flip-card'>
      <div onClick={handleClick} className={`flip-container ${isBack ? 'flipped' : ''}`} >
        {!isBack && <div className='flip-card-question'>
         <h2>{question}</h2>
        </div>}
        
        {isBack && <div className='flip-card-answer'>
          <h3>{answer}</h3>
        </div>}

      </div>
      
    </div>

  )
}


export default Cards;