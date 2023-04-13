import { useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import CustomButton from '@/components/CustomButton';
import Modal from '@/components/Modal';

import { getRandomExercises, shuffleArray } from '@/modules/bingo';
import { checkBingo } from '/modules/bingoHelpers';

import styles from '../styles/Home.module.css';

const BOARD_SIZE = 5;

async function generateBingoBoard() {
  const numExercises = BOARD_SIZE * BOARD_SIZE - 1;
  try {
    let exercises = await getRandomExercises(numExercises) || [];
    const shuffledExercises = shuffleArray(exercises);
    const rows = [];

    for (let i = 0; i < BOARD_SIZE; i++) {
      const row = [];
      for (let j = 0; j < BOARD_SIZE; j++) {
        const exercise = {
          ...(i === Math.floor(BOARD_SIZE / 2) && j === Math.floor(BOARD_SIZE / 2)
            ? { name: 'Fit Bingo' }
            : shuffledExercises.pop() || { name: `Exercise ${i * BOARD_SIZE + j + 1}` }),
          rowIndex: i,
          columnIndex: j,
          clicked: i === Math.floor(BOARD_SIZE / 2) && j === Math.floor(BOARD_SIZE / 2),
          highlighted: false,
        };
        row.push(exercise);
      }
      rows.push(row);
    }

    return rows;
  } catch (error) {
    console.error('Error fetching exercises', error);
    return null;
  }
}
function getDefaultBoard() {
  return Array.from({ length: BOARD_SIZE }, (_, rowIndex) =>
    Array.from({ length: BOARD_SIZE }, (_, columnIndex) => {
      return {
        name:
          rowIndex === Math.floor(BOARD_SIZE / 2) && columnIndex === Math.floor(BOARD_SIZE / 2)
            ? 'Free space'
            : `Exercise ${rowIndex * BOARD_SIZE + columnIndex + 1}`,
        clicked: rowIndex === Math.floor(BOARD_SIZE / 2) && columnIndex === Math.floor(BOARD_SIZE / 2),
      };
    })
  );
}


export default function Bingo() {
  const [board, setBoard] = useState(null);
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    async function updateBoard() {
      if (!board) {
        setBoard(getDefaultBoard());
      } else {
        const newBoard = await generateBingoBoard();
        setBoard(newBoard);
      }
    }
    updateBoard();
  }, []);



  const playBingo = () => {
    if (!board) return;

    const flattenedBoard = board.flat();
    const availableSquares = flattenedBoard.filter(
      (square, index) =>
        !square.clicked &&
        !square.highlighted &&
        index !==
        BOARD_SIZE * Math.floor(BOARD_SIZE / 2) + Math.floor(BOARD_SIZE / 2)
    );

    if (availableSquares.length === 0) {
      alert("All exercises have been completed!");
      return;
    }

    const randomIndex = Math.floor(Math.random() * availableSquares.length);
    const randomSquare = availableSquares[randomIndex];
    randomSquare.highlighted = true;

    // Remove the completed square from the availableSquares array
    availableSquares.splice(randomIndex, 1);

    setBoard((prevBoard) => {
      const newBoard = prevBoard.map((row, rowIndex) =>
        row.map((col, colIndex) => {
          if (
            rowIndex === randomSquare.rowIndex &&
            colIndex === randomSquare.columnIndex
          ) {
            return { ...col, highlighted: true };
          }
          return col;
        })
      );
      return newBoard;
    });
  };




  const handleExerciseClick = (rowIndex, columnIndex) => {
    const clickedSquare = board[rowIndex][columnIndex];
    if (!clickedSquare.highlighted) return;

    setSelectedSquare(clickedSquare);
    setModalVisible(true);

    // Clear the highlighted state
    setBoard(prevBoard => {
      const newBoard = JSON.parse(JSON.stringify(prevBoard)); // Create a deep copy
      newBoard[rowIndex][columnIndex].highlighted = false;
      return newBoard;
    });
  };

  const handleCompleted = () => {
    setModalVisible(false);
    if (!selectedSquare) return;
    setBoard((prevBoard) => {
      const newBoard = JSON.parse(JSON.stringify(prevBoard)); // Create a deep copy

      // Check if the selectedSquare's row and column are defined
      if (
        newBoard[selectedSquare.rowIndex] &&
        newBoard[selectedSquare.rowIndex][selectedSquare.columnIndex]
      ) {
        newBoard[selectedSquare.rowIndex][selectedSquare.columnIndex].highlighted = false;
        newBoard[selectedSquare.rowIndex][selectedSquare.columnIndex].clicked = true;
      }

      return newBoard;
    });

    setSelectedSquare(null);
  };

  const handleChooseAnother = () => {
    setModalVisible(false);
    playBingo();
  };

  useEffect(() => {
    if (board && checkBingo(board)) {
      toast("Bingo!", { className: "bingo-toast" });
    }
  }, [board]);


  const renderSquare = (column, columnIndex, rowIndex) => {

    return (
      <td
        key={columnIndex}
        className={`${styles.square} ${column.clicked ? styles.checked : ''} ${column.highlighted ? styles.highlighted : ''}`}
        onClick={() => handleExerciseClick(rowIndex, columnIndex)}
      >
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
        clicked: rowIndex === Math.floor(BOARD_SIZE / 2) && columnIndex === Math.floor(BOARD_SIZE / 2),
      };
    })
  );

  return (
    <div className={styles.container}>
      <div className={styles.boardContainer}>
        <table className={styles.board}>
          <tbody>
            {/* Render each row and column of the bingo board */}
            {board ? board.map(renderRow) : defaultBoard.map(renderRow)}
          </tbody>
        </table>
        <CustomButton sx={{ marginTop: "50px" }} onClick={playBingo}>
          Play Bingo
        </CustomButton>



      </div>


      {selectedSquare && (
        <Modal visible={modalVisible}>
          <h2>{selectedSquare.name}</h2>
          <p>Exercise description goes here...</p>
          <div>
            <CustomButton onClick={handleCompleted}>Completed</CustomButton>
            <CustomButton onClick={handleChooseAnother}>Choose Another</CustomButton>
          </div>
        </Modal>
      )}
      <ToastContainer />
    </div>
  );
}