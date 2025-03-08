import React, { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards';
import NextButton from '../src/components/NextButton/NextButton';
import contents from "../src/assets/question-answer.json";


function App() {
  const defaultPair = contents[0];
  const [question, setQuestion] = useState(defaultPair.question);
  const [answer, setAnswer] = useState(defaultPair.answer);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * contents.length)
    const nextPair = contents[randomIndex];
    setCurrentIndex(randomIndex);
    setQuestion(nextPair.question);
    setAnswer(nextPair.answer);
  }

  return (
    <div className="App">
      <header className='App-header'>
        <h1>DS Flash Cards - Your Study Buddy for Distributed Systems!</h1>
      </header>

      <div className='description'>
        <div>Learn and test knowledge on Distributed Systems :）</div>
        <div>Click on the card to see the answer. Click on the "Next" button to see a new question.</div>

      </div>

      <div className='cards-container'>
        <Cards q={question} a={answer} />
      </div>

      <div className='next-button-container'>
        <NextButton onClick={handleNextButtonClick} />
      </div>

    </div>
  )
}

export default App
