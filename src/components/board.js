import React from "react";
import Button from "./button";
import Winner from "./winner";

const Board = ({ isPlayerIsX, squares, onPlay }) => {
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (isPlayerIsX) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  };

  const winner = calculateWinner(squares);

  return (
    <div>
      <div className="board-wrapper">
        <div className="board-row">
          <Button buttonClass="button" label={squares[0]} handleClick={() => handleClick(0)} />
          <Button buttonClass="button" label={squares[1]} handleClick={() => handleClick(1)} />
          <Button buttonClass="button" label={squares[2]} handleClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Button buttonClass="button" label={squares[3]} handleClick={() => handleClick(3)} />
          <Button buttonClass="button" label={squares[4]} handleClick={() => handleClick(4)} />
          <Button buttonClass="button" label={squares[5]} handleClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Button buttonClass="button" label={squares[6]} handleClick={() => handleClick(6)} />
          <Button buttonClass="button" label={squares[7]} handleClick={() => handleClick(7)} />
          <Button buttonClass="button" label={squares[8]} handleClick={() => handleClick(8)} />
        </div>
      </div>
      {winner && <Winner winner={winner} />}
    </div>
  );
};

export default Board;
