import React from 'react';

interface ICounterStartGame {
  seconds: number;
}

const CounterStartGame: React.FC<ICounterStartGame> = ({ seconds }) => {
  return <div>{seconds > 0 ? <h1>{seconds}</h1> : null}</div>;
};

export default CounterStartGame;
