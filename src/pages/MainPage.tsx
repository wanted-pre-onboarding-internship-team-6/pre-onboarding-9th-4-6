import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

import { OrderList } from '@/components';
import { QUERY_KEY } from '@/constants';
import delayFailRandomly from '@/utils/delayFailRandomly';

import type { Order } from '@/types';

export default function MainPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    function initSetting() {
      if (!searchParams.has(QUERY_KEY.page)) {
        searchParams.append(QUERY_KEY.page, '1');
        setSearchParams(searchParams);
      }
    }
    initSetting();
  }, [searchParams, setSearchParams]);

  const { data } = useQuery({
    queryKey: ['loadData'],
    queryFn: () =>
      delayFailRandomly(() =>
        axios
          .get('/switch_won_mock_data.json')
          .then((res) =>
            res.data.filter((item: Order) =>
              /2023-03-08/.test(item.transaction_time),
            ),
          ),
      ),
    suspense: true,
    refetchInterval: 5000,
  });

  return <OrderList data={data} />;
}
