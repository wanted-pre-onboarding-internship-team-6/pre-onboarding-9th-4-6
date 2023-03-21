import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

import { getOrders } from '@/api';
import { QUERY_KEY } from '@/constants';

export default function useOrders() {
  const [searchParams] = useSearchParams();
  const { page, sort, order, isDone, keyword } = Object.fromEntries([
    ...searchParams,
  ]);

  const {
    isLoading,
    isError,
    data: orderData,
  } = useQuery({
    queryKey: [QUERY_KEY.orders, { page, sort, order, isDone, keyword }],
    queryFn: () =>
      getOrders({
        page,
        sort,
        order,
        isDone,
        keyword,
      }),
    staleTime: 1000 * 5,
    refetchInterval: 1000 * 5,
  });

  return { isLoading, orderData, isError };
}
