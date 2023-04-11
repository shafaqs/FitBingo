import { useEffect, useState } from 'react';
import { getRandomExercises, shuffleArray } from '@/modules/bingo';
import styles from '../styles/Home.module.css';

const BOARD_SIZE = 5;

async function generateBingoBoard() {
  const numExercises = BOARD_SIZE * BOARD_SIZE - 1; // Subtract 1 for the free space
  try {
    let exercises = await getRandomExercises(numExercises) || [];
    // Shuffle the exercises randomly using Fisher-Yates algorithm
    const shuffledExercises = shuffleArray(exercises);
    // Split the exercises into rows and columns
    const rows = [];
    for (let i = 0; i < BOARD_SIZE; i++) {
      const row = [];
      for (let j = 0; j < BOARD_SIZE; j++) {
        if (i === Math.floor(BOARD_SIZE / 2) && j === Math.floor(BOARD_SIZE / 2)) {
          row.push({ name: 'Fit Bingo' });
        } else {
          row.push(shuffledExercises.pop() || { name: `Exercise ${i * BOARD_SIZE + j + 1}` });
        }
      }
      rows.push(row);
    }
    return rows;
  } catch (error) {
    console.error('Error fetching exercises', error);
    return null;
  }
}

export default function Bingo() {
  const [board, setBoard] = useState(null);

  useEffect(() => {
    async function updateBoard() {
      const newBoard = await generateBingoBoard();
      setBoard(newBoard);
    }
    updateBoard();
  }, []);

  const toggleChecked = (rowIndex, columnIndex) => {
    setBoard(prevBoard => {
      const newBoard = [...prevBoard];
      newBoard[rowIndex][columnIndex].checked = !newBoard[rowIndex][columnIndex].checked;
      return newBoard;
    });
  };

  const renderSquare = (column, columnIndex, rowIndex) => {
    return (
      <td
        key={columnIndex}
        className={`${styles.square} ${column.checked ? styles.checked : ''}`}
        onClick={() => toggleChecked(rowIndex, columnIndex)}
      >
        {/* Render the exercise name or "Free space" */}
        {column.name}
      </td>
    );
  };

  const renderRow = (row, rowIndex) => {
    return (
      <tr key={rowIndex}>
        {row.map((column, columnIndex) => renderSquare(column, columnIndex, rowIndex))}
      </tr>
    );
  };

  // Render a default board initially
  const defaultBoard = Array.from({ length: BOARD_SIZE }, (_, rowIndex) =>
    Array.from({ length: BOARD_SIZE }, (_, columnIndex) => {
      return {
        name: rowIndex === Math.floor(BOARD_SIZE / 2) && columnIndex === Math.floor(BOARD_SIZE / 2) ? 'Free space' : `Exercise ${rowIndex * BOARD_SIZE + columnIndex + 1}`,
        checked: rowIndex === Math.floor(BOARD_SIZE / 2) && columnIndex === Math.floor(BOARD_SIZE / 2),
      };
    })
  );

  return (
    <div className={styles.container}>
      <table className={styles.board}>
        <tbody>
          {/* Render each row and column of the bingo board */}
          {board ? board.map(renderRow) : defaultBoard.map(renderRow)}
        </tbody>
      </table>
    </div>
  );
}