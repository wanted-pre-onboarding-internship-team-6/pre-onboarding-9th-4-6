import { useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

import { OrderTable } from '@/components';
import { ORDER_KEY, QUERY_STRING, SORT_ORDER } from '@/constants';
import { useOrders, useSearch } from '@/hooks';

export default function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { page, sort, order, filter, search } = Object.fromEntries([
    ...searchParams,
  ]);

  useEffect(() => {
    if (!page) searchParams.set(QUERY_STRING.page, '1');
    if (!sort) searchParams.set(QUERY_STRING.sort, ORDER_KEY.id);
    if (!order) searchParams.set(QUERY_STRING.order, SORT_ORDER.asc);
    setSearchParams(searchParams);
  }, [order, page, sort, filter, search, searchParams, setSearchParams]);

  const { isLoading, isError, orderData } = useOrders({
    page,
    sort,
    order,
    filter,
    search,
  });

  const { name, onChange, onClick, onReset } = useSearch();

  if (isLoading) return <div>Loading...</div>;
  if (isError || !orderData) return <div>Error</div>;

  return (
    <>
      <input
        type="text"
        onChange={onChange}
        value={name}
        placeholder="사용자 검색"
      />
      <button onClick={onClick}>검색</button>
      <button onClick={onReset}>초기화</button>
      <OrderTable orderData={orderData} />
    </>
  );
}
