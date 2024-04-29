import React from 'react';
import './Timer.css';

interface ITimer {
  isGameOn: boolean;
}

const Timer: React.FC<ITimer> = ({ isGameOn }) => {
    

  return (
    isGameOn && (
      <div className='timer-container'>
        <h1 className='timer-heading'>0:00</h1>
      </div>
    )
  );
};

export default Timer;
