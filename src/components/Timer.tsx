import React from 'react';
import './Timer.css';

interface ITimer {
  isGameOn: boolean;
}

const Timer: React.FC<ITimer> = ({ isGameOn }) => {
    

  return (
    isGameOn && (
      <div>
        <h1>0:00</h1>
      </div>
    )
  );
};

export default Timer;
