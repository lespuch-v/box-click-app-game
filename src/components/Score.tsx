import React from 'react';
import './Score.css';

interface IScore {
  score: number;
}

const Score: React.FC<IScore> = ({ score }) => {
  return (
    <div className="score-container">
      <h1 className="score-heading">{score}</h1>
    </div>
  );
};

export default Score;
