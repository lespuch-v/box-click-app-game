import React from 'react';
import './Boxes.css';

interface IBoxes {
  isGameOn: boolean;
  canBeMarked?: boolean;
  stopGame: () => void;
}

const Boxes: React.FC<IBoxes> = ({ isGameOn, stopGame, canBeMarked }) => {
  return (
    <div>
      {isGameOn && (
        <div>
          <div className="box"></div>
        </div>
      )}
    </div>
  );
};

export default Boxes;
