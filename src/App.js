import { useState } from "react";
import "./App.css";
import Board from "./components/board";
import Heading from "./components/heading";
import Button from "./components/button";

function App() {
  const [isPlayerIsX, setIsPlayerIsX] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setIsPlayerIsX(!isPlayerIsX);
  }
  return (
    <div className="App">
      <Heading />
      <Board
        isPlayerIsX={isPlayerIsX}
        squares={currentSquares}
        onPlay={handlePlay}
      />
      <div className="reset">
        <Button
          buttonClass="reset-btn"
          label="Reset"
          handleClick={() => setHistory([Array(9).fill(null)])}
        />
      </div>
    </div>
  );
}

export default App;
