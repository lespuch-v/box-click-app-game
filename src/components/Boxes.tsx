import React from 'react';
import './Boxes.css';

interface IBoxes {
  isGameOn: boolean;
  canBeMarked?: boolean;
  id: number;
  onBoxClick: (id: number) => void;
}

const Boxes: React.FC<IBoxes> = ({ isGameOn, onBoxClick, id }) => {
  function boxClick() {
    onBoxClick(id);
  }

  return (
    <div>
      {isGameOn && (
        <div>
          <div onClick={boxClick} className="box"></div>
        </div>
      )}
    </div>
  );
};

export default Boxes;
