import React, { useState } from 'react';
import './NextButton.css';

const NextButton = ({onClick}) => {
    return (
        <button className="next-button" onClick={onClick}>
          Next
        </button>
    );
};


export default NextButton;