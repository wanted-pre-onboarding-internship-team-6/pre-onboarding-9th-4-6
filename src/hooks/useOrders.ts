import { useQuery } from '@tanstack/react-query';

import { getOrders } from '@/api';
import { QUERY_KEY } from '@/constants';

import useQueryString from './useQueryString';

export default function useOrders() {
  const { getQueryString } = useQueryString();
  const { page, sort, order, isDone, keyword } = getQueryString();

  const { data } = useQuery({
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
    suspense: true,
    retry: false,
  });

  const orderData = data ? data : { totalOrder: 0, orders: [] };

  return { orderData };
}
