// modules/bingoHelpers.js

const BOARD_SIZE = 5;

function checkBingo(board) {
  // Check rows
  for (let row = 0; row < BOARD_SIZE; row++) {
    if (board[row].every((square) => square.clicked)) {
      return true;
    }
  }

  // Check columns
  for (let col = 0; col < BOARD_SIZE; col++) {
    if (board.every((row) => row[col].clicked)) {
      return true;
    }
  }

  // Check main diagonal
  if (board.every((row, index) => row[index].clicked)) {
    return true;
  }

  // Check secondary diagonal
  if (board.every((row, index) => row[BOARD_SIZE - index - 1].clicked)) {
    return true;
  }

  return false;
}

export function composeBingoBoardObject(board, userId) {
  const squares = board
    .flat()
    .map((square) => ({
      exerciseName: square.name,
      rowIndex: square.rowIndex,
      columnIndex: square.columnIndex,
      clicked: square.clicked,
    }));

  const bingoBoardObject = {
    userId: userId,
    bingoBoardSquares: squares,
  };

  return bingoBoardObject;
}


export { checkBingo };
