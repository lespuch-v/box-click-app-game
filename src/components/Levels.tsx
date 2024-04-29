import React from 'react';
import './Levels.css';

interface ILevel {
  level: number;
}

const Levels: React.FC<ILevel> = ({ level }) => {
  return (
    <div className="level-container">
      <h1 className="level-heading">Level: {level}</h1>
    </div>
  );
};

export default Levels;
