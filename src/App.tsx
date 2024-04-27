import { useEffect, useState } from 'react';
import StartGame from './components/Startgame';
import './App.css';
import Boxes from './components/Boxes';
import CounterStartGame from './components/CounterStartGame';

function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [score, setScore] = useState(0);
  const [countDown, setCountDown] = useState(7);
  const [numberOfBoxes, setNumberOfBoxes] = useState(1);

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

  return (
    <>
      <main className="main-container">
        <StartGame isGameOn={isGameOn} startGame={startGame} />
        {countDown === 0 ? <Boxes isGameOn={isGameOn} stopGame={stopGame} /> : null}
        <CounterStartGame seconds={countDown} />
      </main>
    </>
  );
}

export default App;
