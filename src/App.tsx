import { useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

import { OrderTable } from '@/components';
import { INITIAL_PAGE, ORDER_KEY, QUERY_STRING, SORT_ORDER } from '@/constants';

export default function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { page, sort, order } = Object.fromEntries([...searchParams]);

  useEffect(() => {
    if (!page) searchParams.set(QUERY_STRING.page, INITIAL_PAGE);
    if (!sort) searchParams.set(QUERY_STRING.sort, ORDER_KEY.id);
    if (!order) searchParams.set(QUERY_STRING.order, SORT_ORDER.asc);
    setSearchParams(searchParams);
  }, [order, page, sort, searchParams, setSearchParams]);

  return <OrderTable />;
}
