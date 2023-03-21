import { useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

import { OrderTable } from '@/components';
import { ORDER_KEY, QUERY_STRING, SORT_ORDER } from '@/constants';
import { useOrders } from '@/hooks';

export default function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { page, sort, order, isDone } = Object.fromEntries([...searchParams]);

  useEffect(() => {
    if (!page) searchParams.set(QUERY_STRING.page, '1');
    if (!sort) searchParams.set(QUERY_STRING.sort, ORDER_KEY.id);
    if (!order) searchParams.set(QUERY_STRING.order, SORT_ORDER.asc);
    setSearchParams(searchParams);
  }, [order, page, sort, searchParams, setSearchParams]);

  const { isLoading, isError, orderData } = useOrders({
    page,
    sort,
    order,
    isDone,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError || !orderData) return <div>Error</div>;

  return <OrderTable orderData={orderData} />;
}
