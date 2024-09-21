const GameBoard = ({ handleActivePlayer, board }) => {
  return (
    <ol id="game-board">
      {board.map((row, rowIdx) => (
        <li key={rowIdx}>
          <ol>
            {row.map((square, squareIdx) => (
              <li key={squareIdx}>
                <button
                  onClick={() => handleActivePlayer(rowIdx, squareIdx)}
                  disabled={square}
                >
                  {square}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
