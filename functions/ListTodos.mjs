import axios from 'axios';

export const handler = async (event) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3');
    const todos = response.data;
    return {
      statusCode: 200,
      body: JSON.stringify(todos)
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to fetch data', error: error.message })
    };
  }
};