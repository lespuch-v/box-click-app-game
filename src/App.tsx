import { useEffect, useState } from 'react';
import StartGame from './components/Startgame';
import './App.css';
import Boxes from './components/Boxes';
import CounterStartGame from './components/CounterStartGame';
import EndGame from './components/EndGame';

function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [score, setScore] = useState(0);
  const [countDown, setCountDown] = useState(7);
  const [numberOfBoxes, setNumberOfBoxes] = useState(9);

  const startGame = () => {
    setIsGameOn(true);
    setCountDown(7);
  };

  const stopGame = () => {
    setIsGameOn(false);
  };

  useEffect(() => {
    if (countDown > 0 && isGameOn) {
      console.log(countDown);

      const timer = setTimeout(() => {
        setCountDown(countDown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [countDown, isGameOn]);

  const handleBoxClick = (id) => {
    console.log(`Box clicked ${id}`);
  };

  const boxes = Array.from({ length: numberOfBoxes }, (_, index) => (
    <Boxes key={index} id={index} onBoxClick={handleBoxClick} isGameOn={isGameOn} />
  ));

  return (
    <>
      <main className="main-container">
        <div className="game-container">{countDown === 0 && isGameOn ? <EndGame stopGame={stopGame} /> : null}</div>
        <StartGame isGameOn={isGameOn} startGame={startGame} />
        <div className="box-container">{countDown === 0 ? boxes : null}</div>
        {isGameOn && countDown > 0 ? <CounterStartGame seconds={countDown} /> : null}
      </main>
    </>
  );
}

export default App;
