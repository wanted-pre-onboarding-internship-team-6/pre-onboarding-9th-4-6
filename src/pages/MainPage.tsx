import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import delayFailRandomly from '@/utils/delayFailRandomly';

export default function MainPage() {
  useQuery({
    queryKey: ['loadData'],
    queryFn: () =>
      delayFailRandomly(() =>
        axios.get('/switch_won_mock_data.json').then((res) => res.data),
      ),
    suspense: true,
  });

  return <>Main</>;
}
