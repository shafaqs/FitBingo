import * as React from "react";
import Head from 'next/head';
import { Grid } from "@mui/material";
import BaseCard from "@/src/components/baseCard/BaseCard";
import { useState } from 'react';

export default function Progress() {
  const [boards, setBoards] = useState([
    { 
      id: 1,
      squares: [
        ["Cardio", "Strength", "Cardio", "Strength", "Cardio"],
        ["Cardio", "Cardio", "Cardio", "Strength", "Strength"],
        ["Cardio", "Strength", "Free Space", "Cardio", "Strength"],
        ["Cardio", "Cardio", "Strength", "Cardio", "Strength"],
        ["Cardio", "Cardio", "Cardio", "Cardio", "Strength"]
      ],
      completed: true
    },
    { 
      id: 2,
      squares: [
        ["Cardio", "Strength", "Cardio", "Strength", "Cardio"],
        ["Cardio", "Cardio", "Cardio", "Strength", "Strength"],
        ["Cardio", "Strength", "Free Space", "Cardio", "Strength"],
        ["Cardio", "Cardio", "Strength", "Cardio", "Strength"],
        ["Cardio", "Cardio", "Cardio", "Cardio", "Strength"]
      ],
      completed: true
    },
    { 
      id: 3,
      squares: [
        ["Cardio", "Strength", "Cardio", "Strength", "Cardio"],
        ["Cardio", "Cardio", "Cardio", "Strength", "Strength"],
        ["Cardio", "Strength", "Free Space", "Cardio", "Strength"],
        ["Cardio", "Cardio", "Strength", "Cardio", "Strength"],
        ["Cardio", "Cardio", "Cardio", "Cardio", "Strength"]
      ],
      completed: true
    }
  ]);

  return (
    <Grid container spacing={0}>
      <Head>
        <title>BingoFit</title>
      </Head>
      {/* ------------------------- row 1 ------------------------- */}
      <Grid item xs={12} lg={12}>
        <BaseCard title="Completed Bingo Boards">
        <div style={{ display: 'flex' }}>
      {boards.map(board => (
        <div key={board.id} style={{ marginRight: '20px' }}>
          <h4>Board {board.id}</h4>
          <table>
            <tbody>
              {board.squares.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((square, colIndex) => (
                    <td
                      key={colIndex}
                      style={{ 
                        backgroundColor: board.completed ? '#03c9d7' : 'white', 
                        color: board.completed ? 'white' : 'black'
                      }}
                    >
                      {square}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
        </BaseCard>
      </Grid>
    </Grid>
  );
}
