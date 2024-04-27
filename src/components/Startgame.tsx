import React from 'react';

interface IStartGame {
  isGameOn: boolean;
  startGame: () => void;
}

const StartGame: React.FC<IStartGame> = ({ isGameOn, startGame }) => {
  const heading = (
    <div>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
        Start<span className="text-blue-600 dark:text-blue-500"> Game #1</span>
      </h1>
      <button
        onClick={startGame}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Start
      </button>
    </div>
  );

  return <div>{!isGameOn && heading}</div>;
};

export default StartGame;
