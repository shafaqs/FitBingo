import axios from 'axios';

export default async function handler(req, res) {
  try {
    const { data } = await axios.get('https://api-ninjas.com/api/exercises');
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching exercises' });
  }
}
