import React from 'react';
import './CounterStartGame.css'

interface ICounterStartGame {
  seconds: number;
}

const CounterStartGame: React.FC<ICounterStartGame> = ({ seconds }) => {
  return <div className='counter-container'>{seconds > 0 ? <h1 className='counter-Heading'>{seconds}</h1> : null}</div>;
};

export default CounterStartGame;
