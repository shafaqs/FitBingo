import { useState } from 'react';
import BingoBoard from '@/components/BingoBoard';
import { getExercises } from '@/lib/exercises';

export default function DifficultySelection() {
  const [difficulty, setDifficulty] = useState(null);
  const [exercises, setExercises] = useState(null);

  const selectDifficulty = async (level) => {
    setDifficulty(level);
    const data = await getExercises(level);
    setExercises(data);
  };

  return (
    <div>
      <h2>Choose Difficulty:</h2>
      <button onClick={() => selectDifficulty('easy')}>Easy</button>
      <button onClick={() => selectDifficulty('medium')}>Medium</button>
      <button onClick={() => selectDifficulty('hard')}>Hard</button>
      {exercises && <BingoBoard exercises={exercises} />}
    </div>
  );
}
