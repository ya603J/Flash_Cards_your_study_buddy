import React, {useState} from 'react'
import './App.css'
import Cards from './components/Cards/Cards';
import NextButton from '../src/components/NextButton/NextButton';
import BackButton from '../src/components/BackButton/BackButton';
import ShuffleButton from '../src/components/ShuffleButton/ShuffleButton';
import contents from "../src/assets/question-answer.json";
import MasteredButton from "./components/MasteredButton/MasteredButton.jsx";
import SubmitButton from "./components/SubmitButton/SubmitButton.jsx";


function App() {
  const [cards, setCards] = useState(contents);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userGuess, setUserGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [masteredCards, setMasteredCards] = useState([]);

  const currentCard = cards.length > 0 ? cards[currentIndex] : null;

  const handleNextButtonClick = () => {
    if (cards.length > 0) {
      if (currentIndex < cards.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0);
      }
      setUserGuess('');
      setFeedback('');
    }
  };

  const handleBackButtonClick = () => {
    if (cards.length > 0) {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else {
        setCurrentIndex(cards.length - 1);
      }
      setUserGuess('');
      setFeedback('');
    }
  };

  const handleShuffle = () => {
    const shuffled = [...cards];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setCards(shuffled);
    setCurrentIndex(0);
    setUserGuess('');
    setFeedback('');
  };

  const handleGuessSubmit = () => {
    if (userGuess.trim() !== '' && currentCard) {
      const correctAnswer = currentCard.answer.toLowerCase();
      const guess = userGuess.toLowerCase();
      if (correctAnswer.includes(guess)) {
        setFeedback('Correct!');
        const newStreak = currentStreak + 1;
        setCurrentStreak(newStreak);
        if (newStreak > longestStreak) {
          setLongestStreak(newStreak);
        }
      } else {
        setFeedback('Incorrect!');
        setCurrentStreak(0);
      }
    }
  };

  const handleMastered = () => {
    if (cards.length > 0) {
      const masteredCard = cards[currentIndex];
      setMasteredCards([...masteredCards, masteredCard]);
      const updatedCards = cards.filter((_, idx) => idx !== currentIndex);
      setCards(updatedCards);
      if (updatedCards.length > 0) {
        setCurrentIndex(0);
      }
      setUserGuess('');
      setFeedback('');
    }
  };

  return (
    <div className="App">
      <header className='App-header'>
        <h1>DS Flash Cards - Your Study Buddy for Distributed Systems!</h1>
      </header>
      <div className='description'>
        <div>Ready to learn and test knowledge on Distributed Systems? :）</div>
        <div>Click on the card to see the answer. Click on the "Next" button to see a new question.</div>
        <p>Number of Cards: {cards.length}</p>
        <p>Current Streak: {currentStreak}</p>
        <p>Longest Streak: {longestStreak}</p>
        <p>Mastered: {masteredCards.length}</p>
      </div>

      {cards.length > 0 ? (
        <div className='cards-container'>
          <Cards q={currentCard.question} a={currentCard.answer}/>
        </div>
      ) : (
        <div className='cards-container'>
          <p>No more cards left!</p>
        </div>
      )}

      <div className='input-container'>
        <input
          className='input-panel'
          type='text'
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
          placeholder='Enter your guess'
        />
        <SubmitButton onClick={handleGuessSubmit}/>
        <p>{feedback}</p>
      </div>

      <div className='next-button-container'>
        <BackButton onClick={handleBackButtonClick}/>
        <NextButton onClick={handleNextButtonClick}/>
        <ShuffleButton onClick={handleShuffle}/>
      </div>

      <div className='mastered-button-container'>
        {cards.length > 0 && <MasteredButton onClick={handleMastered}/>}
      </div>
    </div>
  )
}

export default App
