import React from 'react';
import './Boxes.css';

interface IBoxes {
  isGameOn: boolean;
  canBeMarked?: boolean;
  id: number;
  emoji: string;
  onBoxClick: (id: number) => void;
}

const Boxes: React.FC<IBoxes> = ({ isGameOn, onBoxClick, id, emoji }) => {
  function boxClick() {
    onBoxClick(id);
  }

  return (
    <div>
      {isGameOn && (
        <div>
          <div onClick={boxClick} className="box">
            {emoji}
          </div>
        </div>
      )}
    </div>
  );
};

export default Boxes;
