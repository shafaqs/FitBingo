import axios from 'axios';

const API_BASE_URL = 'https://api-ninjas.com/api/exercises';
const API_KEY = 'zCi6MvZL0GJMuP1MnFjVtw==844Js3Jn3VN9bCeE';

export default async function handler(req, res) {
  try {
    const response = await axios.get(API_BASE_URL, {
      params: { limit: req.query.limit },
      headers: { 'x-api-key': API_KEY },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching exercises', error);
    res.status(500).json({ error: 'Error fetching exercises' });
  }
}
