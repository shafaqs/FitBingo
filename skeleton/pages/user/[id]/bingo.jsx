import { React, useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import CustomButton from '@/components/CustomButton';
import Modal from '@/components/Modal';
import { Button } from "@mui/material";


import { getRandomExercises, shuffleArray } from '@/modules/bingo';
import { composeBingoBoardObject, checkBingo } from '@/modules/bingoHelpers';

import styles from "../../../styles/Home.module.css";
import LogoImage from "../../../assets/images/logos/Logo_fix.png";

import { Grid, Card, CardContent } from "@mui/material";
import Head from 'next/head';
import UserXP from '@/components/UserXP';
import { useRouter } from 'next/router';
import { PrismaClient } from '@prisma/client';

const BOARD_SIZE = 5;

//Hard coded for now - Can refactor to fetch all categories from database instead.
const exerciseCategories = ["Cardio", "Strength", "Calisthetics"];

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
            : shuffledExercises.pop() || { name: `${exerciseCategories[Math.floor(Math.random() * exerciseCategories.length)]}` }),
          rowIndex: i,
          columnIndex: j,
          clicked: i === Math.floor(BOARD_SIZE / 2) && j === Math.floor(BOARD_SIZE / 2),
          highlighted: false,
        };
        row.push(exercise);
      }
      rows.push(row);
    }
    console.log('rows', rows);
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
            ? LogoImage
            : `${exerciseCategories[Math.floor(Math.random() * exerciseCategories.length)]}`,
        clicked: rowIndex === Math.floor(BOARD_SIZE / 2) && columnIndex === Math.floor(BOARD_SIZE / 2),
        rowIndex,
        columnIndex,
      };

    })
  );
}



export default function Bingo(props) {
  const [board, setBoard] = useState(null);
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [showPlayAgain, setShowPlayAgain] = useState(false);
  const [exercise, setExercise] = useState('');
  const [timer, setTimer] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [xp, setXP] = useState(props.user.experience_points);

  const router = useRouter();

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

  useEffect(() => {
    if (board && checkBingo(board)) {
      incrementXP(true) //Add 500xp upon bingo
      toast("Bingo!", { className: "bingo-toast" });
      setShowPlayAgain(true);
    }
  }, [board]);
  useEffect(() => {
    let timerInterval;

    if (timerRunning) {
      timerInterval = setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timerInterval);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [timerRunning]);
  const startTimer = () => {
    setTimerRunning(true);
  };

  const stopTimer = () => {
    setTimerRunning(false);
  };


  // Calculate the user's current level based on the total experience points
  const level = Math.floor(xp / 1000) + 1;

  function allExercisesCompleted(board) {
    const flattenedBoard = board.flat();
    return flattenedBoard.every(
      (square, index) =>
        square.clicked ||
        index === BOARD_SIZE * Math.floor(BOARD_SIZE / 2) + Math.floor(BOARD_SIZE / 2) ||
        square.name === 'Free space'
    );
  }
  const resetBoard = async () => {
    const newBoard = await generateBingoBoard();
    setBoard(newBoard);
    setShowPlayAgain(false);
  };


  const playBingo = () => {
    if (!board) return;

    if (allExercisesCompleted(board)) {
      toast("No more available squares!", { className: "no-squares-toast" });
      return;
    }

    const flattenedBoard = board.flat();
    const availableSquares = flattenedBoard.filter(
      (square, index) =>
        !square.clicked &&
        index !== BOARD_SIZE * Math.floor(BOARD_SIZE / 2) + Math.floor(BOARD_SIZE / 2)
    );



    const randomIndex = Math.floor(Math.random() * availableSquares.length);
    const randomSquare = availableSquares[randomIndex];

    console.log("Random square:", randomSquare);

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
      console.log('newBoard', newBoard);
      return newBoard;
    });

    setSelectedSquare(randomSquare);
  };

  //Gives +100 XP when a user completes an exercise, or 500 upon a bingo
  async function incrementXP(bingo) {

    //If the argument is null, +100XP, if not null, +500 for the completed bingo
    const xpAmount = bingo ? 500 : 100;
    const newXP = xp + xpAmount;

    //Initatiates an PUT request to the api
    const updateResponse = await fetch(`/api/getUserXP`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ experience_points: newXP, userId: router.query.id, }),
    });

    if (updateResponse.ok) {
      setXP(newXP);
    }
  }

  //Requests API to fetch a random exercise displayed on the square
  const handleButtonClick = async () => {
    if (!selectedSquare) return;

    const response = await fetch(`/api/exercises/${selectedSquare.name}`);
    const data = await response.json();
    setExercise(data);
  };


  const handleExerciseClick = (rowIndex, columnIndex) => {
    handleButtonClick();
    const clickedSquare = board[rowIndex][columnIndex];

    if (!clickedSquare.highlighted) return;

    setSelectedSquare(clickedSquare);
    setModalVisible(true);
    setTimer(0);
  };

  const handleCompleted = () => {
    incrementXP(null); //Grants the user 100 XP
    setModalVisible(false);
    setTimerRunning(false);
    setTimer(0);
    if (!selectedSquare) return;
    console.log('selectedSquare', selectedSquare);
    setBoard((prevBoard) => {
      const newBoard = JSON.parse(JSON.stringify(prevBoard)); // 

      // Check if the selectedSquare's row and column are defined
      if (
        newBoard[selectedSquare.rowIndex] &&
        newBoard[selectedSquare.rowIndex][selectedSquare.columnIndex]
      ) {
        newBoard[selectedSquare.rowIndex][selectedSquare.columnIndex].clicked = true;
        newBoard[selectedSquare.rowIndex][selectedSquare.columnIndex].completed = true;
      }

      return newBoard;
    });

    setSelectedSquare(null);
  };
  const handleChooseAnother = () => {
    setModalVisible(false);
    setTimerRunning(false);
    setTimer(0);
    playBingo();
  };


  const renderSquare = (column, columnIndex, rowIndex) => {
    const isMiddleSquare = rowIndex === Math.floor(BOARD_SIZE / 2) && columnIndex === Math.floor(BOARD_SIZE / 2);

    return (
      <td
        key={columnIndex}
        className={`${styles.square} ${column.highlighted ? styles.highlighted : ''} ${column.completed ? styles.completed : ''}`}
        onClick={() => handleExerciseClick(rowIndex, columnIndex)}
      >
        {column.completed ? '✓' : isMiddleSquare ? <div className={styles.logoContainer}></div> : column.name}
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
    <Grid container spacing={0}>
      <Head>
        <title>BingoFit</title>
      </Head>
      <Grid item xs={12} lg={12}>
        <UserXP
          xp={xp}
          email={props.user.email}
          level={level}
        />
        <Card>
          <CardContent>
            <div className={styles.container}>
              <div className={styles.boardContainer}>
                <table className={styles.board}>
                  <tbody>
                    {/* Render each row and column of the bingo board */}
                    {board ? board.map(renderRow) : defaultBoard.map(renderRow)}
                  </tbody>
                </table>
                {!showPlayAgain && (
                  <CustomButton sx={{ marginTop: "50px" }} onClick={playBingo}>
                    Play Bingo
                  </CustomButton>
                )}


                {/* Add the "Play Again" button */}
                {showPlayAgain && (
                  <CustomButton sx={{ marginTop: "10px" }} onClick={resetBoard}>
                    Play Again
                  </CustomButton>
                )}
              </div>

              {selectedSquare && (
                <Modal visible={modalVisible}>
                  <div>
                    <h2>{selectedSquare.name}</h2>
                    <div className="modal-section">
                      <h3>Exercise Category:</h3>
                      <p>{exercise[0]}</p>
                    </div>
                    <div className="modal-section">
                      <h3>Title:</h3>
                      <p>{exercise[1]}</p>
                    </div>
                    <div className="modal-section">
                      <h3>Instructions:</h3>
                      <p>{exercise[2]}</p>
                    </div>
                    <div className="modal-section">
                      <h3>Estimated Time:</h3>
                      <p>{exercise[3]} minutes</p>
                    </div>
                    <p>
                      Time: {Math.floor(timer / 60)}:{timer % 60 < 10 ? "0" + (timer % 60) : timer % 60}
                    </p>
                    <div>
                      <CustomButton color="primary" onClick={startTimer}>
                        Start Timer
                      </CustomButton>
                      <CustomButton color="secondary" onClick={stopTimer}>
                        Stop Timer
                      </CustomButton>
                    </div>
                    <div>
                      <Button color="success" onClick={handleCompleted}>
                        Completed
                      </Button>
                      <Button color="secondary" onClick={handleChooseAnother}>
                        Choose Another
                      </Button>
                    </div>
                  </div>
                </Modal>
              )}
              <ToastContainer />
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

//Gets the infor for a user from the params
export async function getServerSideProps({ params }) {
  const prisma = new PrismaClient();
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id)
    },
  });
  return {
    props: { user }
  };
}