import { useEffect, useState } from 'react';
import StartGame from './components/Startgame';
import './App.css';
import Boxes from './components/Boxes';
import CounterStartGame from './components/CounterStartGame';
import Levels from './components/Levels';
import EndGame from './components/EndGame';
import Timer from './components/Timer';
import Score from './components/Score';

function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [score, setScore] = useState(0);
  const [lavel, setLevel] = useState(0);
  const [countToStartDown, setCountToStartDown] = useState(7);
  const [numberOfBoxes, setNumberOfBoxes] = useState(9);

  const startGame = () => {
    setIsGameOn(true);
    setCountToStartDown(7);
  };

  const stopGame = () => {
    setIsGameOn(false);
  };

  useEffect(() => {
    if (countToStartDown > 0 && isGameOn) {
      console.log(countToStartDown);

      const timer = setTimeout(() => {
        setCountToStartDown(countToStartDown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [countToStartDown, isGameOn]);

  const handleBoxClick = (id) => {
    console.log(`Box clicked ${id}`);
  };

  const boxes = Array.from({ length: numberOfBoxes }, (_, index) => (
    <Boxes key={index} id={index} onBoxClick={handleBoxClick} isGameOn={isGameOn} />
  ));

  return (
    <>
      <main className="main-container">
        <div className="game-container">
          {countToStartDown === 0 && isGameOn ? (
            <div className='container-game-stats'>
              <EndGame stopGame={stopGame} />
              <Timer isGameOn={isGameOn} />
              <Score score={score} />
            </div>
          ) : null}
        </div>
        <StartGame isGameOn={isGameOn} startGame={startGame} />
        <div>
          <div className="box-container">{countToStartDown === 0 ? boxes : null}</div>
          {countToStartDown === 0 && isGameOn ? <Levels level={lavel} /> : null}
        </div>

        {isGameOn && countToStartDown > 0 ? <CounterStartGame seconds={countToStartDown} /> : null}
      </main>
    </>
  );
}

export default App;
