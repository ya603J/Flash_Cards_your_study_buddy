import React from 'react';
import './ShuffleButton.css';

function ShuffleButton({ onClick }) {
  return (
    <button className="shuffle-button" onClick={onClick}>
      Shuffle
    </button>
  );
}

export default ShuffleButton;
