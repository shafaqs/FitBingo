import { Bingo_Board } from "@prisma/client"; 

const bingo_boards: Bingo_Board[] = [
  {
    id: 1,
    userId: 1,
    squares: 25,
    isCompleted: true,
    difficultyLevel: 0
  },
  {
    id: 2,
    userId: 1,
    squares: 25,
    isCompleted: true,
    difficultyLevel: 0
  },
  {
    id: 3,
    userId: 1,
    squares: 25,
    isCompleted: false,
    difficultyLevel: 0
  },
  {
    id: 4,
    userId: 2,
    squares: 25,
    isCompleted: false,
    difficultyLevel: 0
  },
  {
    id: 5,
    userId: 3,
    squares: 25,
    isCompleted: false,
    difficultyLevel: 0
  },
  {
    id: 6,
    userId: 4,
    squares: 25,
    isCompleted: true,
    difficultyLevel: 0
  },
  {
    id: 7,
    userId: 4,
    squares: 25,
    isCompleted: true,
    difficultyLevel: 0
  },
  {
    id: 8,
    userId: 4,
    squares: 25,
    isCompleted: true,
    difficultyLevel: 0
  },
  {
    id: 9,
    userId: 4,
    squares: 25,
    isCompleted: true,
    difficultyLevel: 0
  }
];

export default bingo_boards