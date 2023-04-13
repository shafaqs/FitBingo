import { useState } from 'react';

export default function HomePage() {
  //Sets the currently selected exercise
  const [exercise, setExercise] = useState('');
  const category = "cardio"

  //Requests API to fetch a random exercise of the desired category
  const handleButtonClick = async () => {
    const response = await fetch(`/api/exercises/${category}`); //Change category to anything
    const data = await response.json();
    setExercise(data);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Get Random {category} Exercise</button>
      <div dangerouslySetInnerHTML={{ __html: exercise.category }}></div>
      <div dangerouslySetInnerHTML={{ __html: exercise.title }}></div>
      <div dangerouslySetInnerHTML={{ __html: exercise.description }}></div>
      <div dangerouslySetInnerHTML={{ __html: exercise.duration }}></div>
    </div>
  );
}


