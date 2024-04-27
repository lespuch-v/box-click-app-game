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
          <button
            onClick={stopGame}
            type="button"
            className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
          >
            Stop Game!
          </button>
          <div className="box"></div>
        </div>
      )}
    </div>
  );
};

export default Boxes;
