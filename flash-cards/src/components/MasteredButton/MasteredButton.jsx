import React from 'react';
import './MasteredButton.css';

const MasteredButton = ({onClick}) => {
  return (
    <button className="mastered-button" onClick={onClick}>
      Mark as Mastered
    </button>
  );
};


export default MasteredButton;