import Square from "./Square";
import styles from "/styles/Board.module.css";
import { useState, useEffect } from "react";


export default function Board() {

  const [values, setValues] = useState([]);

  useEffect(() => {
    generateSquareValues().then(setValues);
  }, []);

  return (
    <div className={styles.board}>
      {values.map((value, index) => (
        <Square key={index} value={value} />
      ))}
    </div>
  );
}


const generateSquareValues = async () => {
  // Generate 25 random numbers for the values of the squares for now
  // Update with exercises when ready
  const values = Array(25).fill().map(() => Math.floor(Math.random() * 100));
  return values;
}

