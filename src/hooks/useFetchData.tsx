import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function useFetchData() {
  const {
    isLoading,
    error,
    data: datas,
  } = useQuery(
    ['orders'],
    async () => {
      const res = await axios.get('data/mock_data.json');

      return res.data;
    },
    {
      staleTime: 1000 * 60 * 5,
    },
  );

  return { isLoading, error, datas };
}
