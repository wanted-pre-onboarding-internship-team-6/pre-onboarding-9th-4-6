import axios from 'axios';

export const fetchOrderLists = async () => {
  const response = await axios.post('/mock_data.json');

  return response.data;
};
