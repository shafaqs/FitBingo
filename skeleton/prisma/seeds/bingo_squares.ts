import { formLabelClasses } from "@mui/material";
import { Bingo_Square } from "@prisma/client";

const bingo_squares: Bingo_Square[] = [
  {
    "id": 1,
    "bingoBoardId": 1,
    "position": 1,
    "exerciseId": 1,
    "isCompleted": true,
    "inProgress": false,
    "createAt": new Date("2023-01-10"),
    "endAt": new Date("2023-01-10"),
  },
  {
    "id": 2,
    "bingoBoardId": 1,
    "position": 2,
    "exerciseId": 2,
    "isCompleted": true,
    "inProgress": false,
    "createAt": new Date("2023-01-11"),
    "endAt": new Date("2023-01-11")
  },
  {
    "id": 3,
    "bingoBoardId": 1,
    "position": 3,
    "exerciseId": 3,
    "isCompleted": true,
    "inProgress": false,
    "createAt": new Date("2023-01-12"),
    "endAt": new Date("2023-01-12")
  },
  {
    "id": 4,
    "bingoBoardId": 1,
    "position": 4,
    "exerciseId": 4,
    "isCompleted": true,
    "inProgress": false,
    "createAt": new Date("2023-02-13"),
    "endAt": new Date("2023-02-13")
  },
  {
    "id": 5,
    "bingoBoardId": 1,
    "position": 5,
    "exerciseId": 5,
    "isCompleted": true,
    "inProgress": false,
    "createAt": new Date("2023-02-14"),
    "endAt": new Date("2023-02-14")
  },
  {
    "id": 6,
    "bingoBoardId": 1,
    "position": 6,
    "exerciseId": 6,
    "isCompleted": true,
    "inProgress": false,
    "createAt": new Date("2023-02-15"),
    "endAt": new Date("2023-02-15")
  },
  {
    "id": 7,
    "bingoBoardId": 1,
    "position": 7,
    "exerciseId": 7,
    "isCompleted": true,
    "inProgress": false,
    "createAt": new Date("2023-02-16"),
    "endAt": new Date("2023-02-16")
  },
  {
    "id": 8,
    "bingoBoardId": 1,
    "position": 8,
    "exerciseId": 8,
    "isCompleted": true,
    "inProgress": false,
    "createAt": new Date("2023-02-17"),
    "endAt": new Date("2023-02-17")
  },
  {
    "id": 9,
    "bingoBoardId": 1,
    "position": 9,
    "exerciseId": 9,
    "isCompleted": true,
    "inProgress": false,
    "createAt": new Date("2023-02-18"),
    "endAt": new Date("2023-02-18")
  },
  {
    "id": 10,
    "bingoBoardId": 1,
    "position": 10,
    "exerciseId": 10,
    "isCompleted": true,
    "inProgress": false,
    "createAt": new Date("2023-02-19"),
    "endAt": new Date("2023-02-19")
  },
  {
    "id": 11,
    "bingoBoardId": 1,
    "position": 11,
    "exerciseId": 11,
    "isCompleted": true,
    "inProgress": false,
    "createAt": new Date("2023-02-20"),
    "endAt": new Date("2023-02-20")
  },
  {
    "id": 12,
    "bingoBoardId": 1,
    "position": 12,
    "exerciseId": 12,
    "isCompleted": true,
    "inProgress": false,
    "createAt": new Date("2023-03-21"),
    "endAt": new Date("2023-03-21")
  },
  {
    "id": 13,
    "bingoBoardId": 1,
    "position": 13,
    "exerciseId": 13,
    "isCompleted": true,
    "inProgress": false,
    "createAt": new Date("2023-03-22"),
    "endAt": new Date("2023-03-22")
  },
  {
    "id": 14,
    "bingoBoardId": 1,
    "position": 14,
    "exerciseId": 14,
    "isCompleted": true,
    "inProgress": false,
    "createAt": new Date("2023-03-23"),
    "endAt": new Date("2023-03-23")
  },
  {
    "id": 15,
    "bingoBoardId": 1,
    "position": 15,
    "exerciseId": 15,
    "isCompleted": true,
    "inProgress": false,
    "createAt": new Date("2023-03-24"),
    "endAt": new Date("2023-03-24")
  },
  {
    "id": 16,
    "bingoBoardId": 1,
    "position": 16,
    "exerciseId": 16,
    "isCompleted": true,
    "inProgress": false,
    "createAt": new Date("2023-03-25"),
    "endAt": new Date("2023-03-25")
  },
  {
    "id": 17,
    "bingoBoardId": 1,
    "position": 17,
    "exerciseId": 17,
    "isCompleted": true,
    "inProgress": false,
    "createAt": new Date("2023-03-26"),
    "endAt": new Date("2023-03-26")
  },
  {
    "id": 18,
    "bingoBoardId": 1,
    "position": 18,
    "exerciseId": 18,
    "isCompleted": true,
    "inProgress": false,
    "createAt": new Date("2023-04-20"),
    "endAt": new Date("2023-04-20")
  },
  {
    "id": 19,
    "bingoBoardId": 1,
    "position": 19,
    "exerciseId": 19,
    "isCompleted": true,
    "inProgress": false,
    "createAt": new Date("2023-04-20"),
    "endAt": new Date("2023-04-20")
  },
  {
    "id": 20,
    "bingoBoardId": 1,
    "position": 20,
    "exerciseId": 20,
    "isCompleted": true,
    "inProgress": false,
    "createAt": new Date("2023-04-20"),
    "endAt": new Date("2023-04-20")
  },
  {
    "id": 21,
    "bingoBoardId": 1,
    "position": 21,
    "exerciseId": 21,
    "isCompleted": true,
    "inProgress": false,
    "createAt": new Date("2023-04-23"),
    "endAt": new Date("2023-04-23")
  },
  {
    "id": 22,
    "bingoBoardId": 1,
    "position": 22,
    "exerciseId": 22,
    "isCompleted": true,
    "inProgress": false,
    "createAt": new Date("2023-04-23"),
    "endAt": new Date("2023-04-23")
  },
  {
    "id": 23,
    "bingoBoardId": 1,
    "position": 23,
    "exerciseId": 23,
    "isCompleted": true,
    "inProgress": false,
    "createAt": new Date("2023-04-24"),
    "endAt": new Date("2023-04-24")
  },
  {
    "id": 24,
    "bingoBoardId": 1,
    "position": 24,
    "exerciseId": 24,
    "isCompleted": true,
    "inProgress": false,
    "createAt": new Date("2023-04-26"),
    "endAt": new Date("2023-04-26")
  },
  {
    "id": 25,
    "bingoBoardId": 2,
    "position": 1,
    "exerciseId": 1,
    "isCompleted": true,
    "inProgress": false,
    "createAt": new Date("2023-01-10"),
    "endAt": new Date("2023-01-10"),
  },
  {
    "id": 26,
    "bingoBoardId": 2,
    "position": 2,
    "exerciseId": 2,
    "isCompleted": true,
    "inProgress": false,
    "createAt": new Date("2023-01-11"),
    "endAt": new Date("2023-01-11")
  },
  {
    "id": 27,
    "bingoBoardId": 2,
    "position": 3,
    "exerciseId": 3,
    "isCompleted": true,
    "inProgress": false,
    "createAt": new Date("2023-01-12"),
    "endAt": new Date("2023-01-12")
  },
  {
    "id": 28,
    "bingoBoardId": 2,
    "position": 4,
    "exerciseId": 4,
    "isCompleted": true,
    "inProgress": false,
    "createAt": new Date("2023-01-13"),
    "endAt": new Date("2023-01-13")
  },
  {
    "id": 29,
    "bingoBoardId": 2,
    "position": 5,
    "exerciseId": 5,
    "isCompleted": true,
    "inProgress": false,
    "createAt": new Date("2023-02-14"),
    "endAt": new Date("2023-02-14")
  },
  {
    "id": 30,
    "bingoBoardId": 2,
    "position": 6,
    "exerciseId": 6,
    "isCompleted": true,
    "inProgress": false,
    "createAt": new Date("2023-03-16"),
    "endAt": new Date("2023-03-16")
  },
  {
    "id": 31,
    "bingoBoardId": 2,
    "position": 7,
    "exerciseId": 7,
    "isCompleted": true,
    "inProgress": false,
    "createAt": new Date("2023-03-16"),
    "endAt": new Date("2023-03-16")
  },
  {
    "id": 32,
    "bingoBoardId": 2,
    "position": 8,
    "exerciseId": 8,
    "isCompleted": true,
    "inProgress": false,
    "createAt": new Date("2023-04-16"),
    "endAt": new Date("2023-04-16")
  },
  {
    "id": 33,
    "bingoBoardId": 2,
    "position": 9,
    "exerciseId": 9,
    "isCompleted": true,
    "inProgress": false,
    "createAt": new Date("2023-04-17"),
    "endAt": new Date("2023-04-17")
  },
  {
    "id": 34,
    "bingoBoardId": 2,
    "position": 10,
    "exerciseId": 10,
    "isCompleted": true,
    "inProgress": false,
    "createAt": new Date("2023-04-18"),
    "endAt": new Date("2023-04-18")
  },
  {
    "id": 35,
    "bingoBoardId": 2,
    "position": 11,
    "exerciseId": 11,
    "isCompleted": true,
    "inProgress": false,
    "createAt": new Date("2023-04-18"),
    "endAt": new Date("2023-04-18")
  },
  {
    "id": 36,
    "bingoBoardId": 2,
    "position": 12,
    "exerciseId": 12,
    "isCompleted": true,
    "inProgress": false,
    "createAt": new Date("2023-04-18"),
    "endAt": new Date("2023-04-18")
  },
  {
    "id": 37,
    "bingoBoardId": 2,
    "position": 13,
    "exerciseId": 13,
    "isCompleted": true,
    "inProgress": false,
    "createAt": new Date("2023-04-18"),
    "endAt": new Date("2023-04-18")
  },
  {
    "id": 38,
    "bingoBoardId": 2,
    "position": 14,
    "exerciseId": 14,
    "isCompleted": true,
    "inProgress": false,
    "createAt": new Date("2023-04-18"),
    "endAt": new Date("2023-04-18")
  },
  {
    "id": 39,
    "bingoBoardId": 2,
    "position": 15,
    "exerciseId": 15,
    "isCompleted": false,
    "inProgress": false,
    "createAt": new Date("1970-01-01"),
    "endAt": new Date("1970-01-01")
  },
  {
    "id": 40,
    "bingoBoardId": 2,
    "position": 16,
    "exerciseId": 16,
    "isCompleted": false,
    "inProgress": false,
    "createAt": new Date("1970-01-01"),
    "endAt": new Date("1970-01-01")
  },
  {
    "id": 41,
    "bingoBoardId": 2,
    "position": 17,
    "exerciseId": 17,
    "isCompleted": false,
    "inProgress": false,
    "createAt": new Date("1970-01-01"),
    "endAt": new Date("1970-01-01")
  },
  {
    "id": 42,
    "bingoBoardId": 2,
    "position": 18,
    "exerciseId": 18,
    "isCompleted": false,
    "inProgress": false,
    "createAt": new Date("1970-01-01"),
    "endAt": new Date("1970-01-01")
  },
  {
    "id": 43,
    "bingoBoardId": 2,
    "position": 19,
    "exerciseId": 19,
    "isCompleted": false,
    "inProgress": false,
    "createAt": new Date("1970-01-01"),
    "endAt": new Date("1970-01-01")
  },
  {
    "id": 44,
    "bingoBoardId": 2,
    "position": 20,
    "exerciseId": 20,
    "isCompleted": false,
    "inProgress": false,
    "createAt": new Date("1970-01-01"),
    "endAt": new Date("1970-01-01")
  },
  {
    "id": 45,
    "bingoBoardId": 2,
    "position": 21,
    "exerciseId": 21,
    "isCompleted": false,
    "inProgress": false,
    "createAt": new Date("1970-01-01"),
    "endAt": new Date("1970-01-01")
  },
  {
    "id": 46,
    "bingoBoardId": 2,
    "position": 22,
    "exerciseId": 22,
    "isCompleted": false,
    "inProgress": false,
    "createAt": new Date("1970-01-01"),
    "endAt": new Date("1970-01-01")
  },
  {
    "id": 47,
    "bingoBoardId": 2,
    "position": 23,
    "exerciseId": 23,
    "isCompleted": false,
    "inProgress": false,
    "createAt": new Date("1970-01-01"),
    "endAt": new Date("1970-01-01")
  },
  {
    "id": 48,
    "bingoBoardId": 2,
    "position": 24,
    "exerciseId": 24,
    "isCompleted": false,
    "inProgress": false,
    "createAt": new Date("1970-01-01"),
    "endAt": new Date("1970-01-01")
  }
];

export default bingo_squares;