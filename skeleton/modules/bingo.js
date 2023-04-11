import axios from 'axios';

const BASE_URL = 'https://api-ninjas.com/api/exercises';
const BOARD_SIZE = 5;

export async function getRandomExercises(numExercises) {
  try {
    const { data } = await axios.get(`${BASE_URL}?limit=${numExercises}`);
    return data.exercises;
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching exercises');
  }
}

export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

