import { useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import CustomButton from '@/components/CustomButton';
import Modal from '@/components/Modal';
import { getRandomExercises, shuffleArray } from '@/modules/bingo';
import { checkBingo } from '@/modules/bingoHelpers';
import { Grid, Card, CardContent } from "@mui/material";
import Head from 'next/head';
import UserXP from '@/components/UserXP';
import styles from '/styles/Home.module.css';
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
            ? 'Free space'
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
      setShowPlayAgain(true);
    }
  }, [board]);

  


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

    console.log("Available squares:", availableSquares);

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
    console.log("bingo is: " + bingo + ". set xp is: " + newXP)
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
  };

  const handleCompleted = () => {
    incrementXP(null) //Grants the user 100 XP
    setModalVisible(false);
    if (!selectedSquare) return;
    setBoard((prevBoard) => {
      const newBoard = JSON.parse(JSON.stringify(prevBoard)); // Create a deep copy

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
    playBingo();
  };

  // Ehsan
  async function saveBingoBoard(board) {
    try {
      const response = await fetch('/api/bingoBoard', {
        method: 'POST',
        body: JSON.stringify(board)
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error saving bingo board', error);
      return null;
    }
  }

  useEffect(() => {
    // commented out by Ehsan
    // if (board && checkBingo(board)) {
    //   toast("Bingo!", { className: "bingo-toast" });
    // }
    async function handleBingo() {
      if (board && checkBingo(board)) {
        incrementXP(1); //Grants the user 500 XP
        toast("Bingo!", { className: "bingo-toast" });
        //Ehsan
        await saveBingoBoard(board);
      }
    }
    handleBingo();
  }, [board]);


  const renderSquare = (column, columnIndex, rowIndex) => {
    //console.log("Rendering square:", column);

    return (
      <td
        key={columnIndex}
        className={`${styles.square} ${column.highlighted ? styles.highlighted : ''} ${column.completed ? styles.completed : ''}`}
        onClick={() => handleExerciseClick(rowIndex, columnIndex)}
      >
        {column.completed ? '✓' : column.name}
      </td>
    );
  };
  // const renderSquare = (column, columnIndex, rowIndex) => {
  //   console.log("Rendering square:", column);

  //   return (
  //     <td
  //       key={columnIndex}
  //       className={`${styles.square} ${column.highlighted ? styles.highlighted : ''} ${column.completed ? styles.completed : ''}`}
  //       onClick={() => handleExerciseClick(rowIndex, columnIndex)}
  //     >
  //       {column.completed ? '✓' : `${column.name} (${column.type})`}
  //     </td>
  //   );
  // };

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
        <UserXP xp={xp} email={props.user.email} />
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
                  <h2>{selectedSquare.name}</h2>
                  {/* API response returns "exercise" array. [0]=category, [1]=title, [2]=description, [3]=duration */}
                  Exercise Category: {exercise[0]} <br />
                  Title: {exercise[1]} <br />
                  Instructions: {exercise[2]} <br />
                  Estimated Time: {exercise[3]} minutes
                  <div>
                    <CustomButton onClick={handleCompleted}>Completed</CustomButton>
                    <CustomButton onClick={handleChooseAnother}>Choose Another</CustomButton>
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
  const prisma = new PrismaClient()
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id)
    },
  })
  return {
    props: { user }
  }
}