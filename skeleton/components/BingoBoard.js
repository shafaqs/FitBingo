import styles from '../styles/Home.module.css';

import React, { useState } from 'react';
import Modal from './Modal';

const Bingo = () => {
  const [board, setBoard] = useState([
    { id: 1, value: 'Pushups', selected: false },
    { id: 2, value: 'Squats', selected: false },
    { id: 3, value: 'Lunges', selected: false },
    { id: 4, value: 'Jumping Jacks', selected: false },
    { id: 5, value: 'Plank', selected: false },
    { id: 6, value: 'Burpees', selected: false },
    { id: 7, value: 'Situps', selected: false },
    { id: 8, value: 'Pullups', selected: false },
    { id: 9, value: 'Mountain Climbers', selected: false },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSquare, setSelectedSquare] = useState(null);

  const playBingo = () => {
    const unselectedSquares = board.filter((square) => !square.selected);
    const randomIndex = Math.floor(Math.random() * unselectedSquares.length);
    const newSelectedSquare = unselectedSquares[randomIndex];
    const newBoard = [...board];
    const squareIndex = newBoard.findIndex((square) => square.id === newSelectedSquare.id);
    newBoard[squareIndex] = { ...newSelectedSquare, selected: true };
    setBoard(newBoard);
    setSelectedSquare(newSelectedSquare);
    setModalOpen(true);
  };

  const resetBingo = () => {
    const newBoard = board.map((square) => ({ ...square, selected: false }));
    setBoard(newBoard);
    setSelectedSquare(null);
    setModalOpen(false);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className="bingo-board">
        {board.map((square) => (
          <div
            key={square.id}
            className={`bingo-square ${square.selected ? 'selected' : ''} ${selectedSquare && square.id === selectedSquare.id ? 'highlighted' : ''}`}
            onClick={() => square.selected && setModalOpen(true)}
          >
            {square.value}
          </div>
        ))}
      </div>
      <div className="bingo-buttons">
        <button onClick={playBingo}>Play Bingo</button>
        {selectedSquare && (
          <button onClick={resetBingo}>Choose Different Exercise</button>
        )}
      </div>
      {modalOpen && (
        <Modal onClose={closeModal}>
          <h2>Exercise Instructions</h2>
          <p>{selectedSquare ? selectedSquare.value : 'No square selected'}</p>
          <div>
            <button onClick={resetBingo}>Completed</button>
            <button onClick={playBingo}>Choose Different Exercise</button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Bingo;
