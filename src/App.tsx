import { useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

import { OrderTable } from '@/components';
import { ORDER_KEY, QUERY_STRING, SORT_ORDER } from '@/constants';
import { useOrders } from '@/hooks';

import SearchBar from './components/SearchBar';

export default function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { page, sort, order, name } = Object.fromEntries([...searchParams]);

  useEffect(() => {
    if (!page) searchParams.set(QUERY_STRING.page, '1');
    if (!sort) searchParams.set(QUERY_STRING.sort, ORDER_KEY.id);
    if (!order) searchParams.set(QUERY_STRING.order, SORT_ORDER.asc);
    if (!name) searchParams.set(QUERY_STRING.name, '');
    setSearchParams(searchParams);
  }, [order, page, sort, name, searchParams, setSearchParams]);

  const { isLoading, isError, orderData } = useOrders({
    page,
    sort,
    order,
    name,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError || !orderData) return <div>Error</div>;

  return (
    <>
      <SearchBar page={page} sort={sort} order={order} />
      <OrderTable orderData={orderData} />;
    </>
  );
}
