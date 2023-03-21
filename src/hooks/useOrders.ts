import { useQuery } from '@tanstack/react-query';

import { getOrders } from '@/api';
import { QUERY_KEY } from '@/constants';

interface Params {
  page: string;
  sort: string;
  order: string;
  isDone: string;
  keyword: string;
}

export default function useOrders(params: Params) {
  const {
    isLoading,
    isError,
    data: orderData,
  } = useQuery({
    queryKey: [QUERY_KEY.orders, params],
    queryFn: () => getOrders(params),
    staleTime: 1000 * 5,
    refetchInterval: 1000 * 5,
  });

  return { isLoading, orderData, isError };
}
