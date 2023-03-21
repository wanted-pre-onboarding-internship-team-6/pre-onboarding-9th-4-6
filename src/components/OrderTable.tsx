import { ChangeEvent, useEffect, useRef } from 'react';

import { useSearchParams } from 'react-router-dom';

import {
  SORT_ORDER,
  ORDER_PER_PAGE,
  QUERY_STRING,
  ORDER_KEY,
} from '@/constants';
import { OrderData } from '@/types/order';
import { debounce } from '@/utils';

interface Props {
  orderData: OrderData;
}

export default function OrderTable({ orderData }: Props) {
  const { totalOrder, orders } = orderData;

  const customerSearchRef = useRef<HTMLInputElement>(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const { page, sort, order, isDone, keyword } = Object.fromEntries([
    ...searchParams,
  ]);

  const totalPageCount = Math.ceil(totalOrder / ORDER_PER_PAGE);

  function sortOrders(sort: string) {
    const nextOrder =
      order === SORT_ORDER.asc ? SORT_ORDER.desc : SORT_ORDER.asc;

    searchParams.set(QUERY_STRING.sort, sort);
    searchParams.set(QUERY_STRING.order, nextOrder);
    setSearchParams(searchParams);
  }

  function setPage(page: number) {
    searchParams.set(QUERY_STRING.page, String(page));
    setSearchParams(searchParams);
  }

  function selectStatus(e: ChangeEvent<HTMLSelectElement>) {
    const status = e.target.value;

    if (status) searchParams.set(QUERY_STRING.isDone, status);
    else searchParams.delete(QUERY_STRING.isDone);
    setSearchParams(searchParams);
  }

  function searchCustomer(e: ChangeEvent<HTMLInputElement>) {
    const searchKeyword = e.target.value;

    if (!searchKeyword) searchParams.delete(QUERY_STRING.keyword);
    else searchParams.set(QUERY_STRING.keyword, searchKeyword);
    setSearchParams(searchParams);
  }

  const debouncedSearchCustomer = debounce(searchCustomer, 400);

  const sortIndicator = order === SORT_ORDER.asc ? '오름차순' : '내림차순';

  useEffect(() => {
    if (customerSearchRef.current && keyword) customerSearchRef.current.focus();
  }, [keyword]);

  return (
    <>
      <div>
        총 주문: {totalOrder}건
        <input
          type="text"
          ref={customerSearchRef}
          defaultValue={keyword}
          placeholder="고객 이름 검색"
          onChange={debouncedSearchCustomer}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th onClick={() => sortOrders(ORDER_KEY.id)}>
              주문번호{sort === ORDER_KEY.id && sortIndicator}
            </th>
            <th onClick={() => sortOrders(ORDER_KEY.transactionTime)}>
              거래시간{sort === ORDER_KEY.transactionTime && sortIndicator}
            </th>
            <th>
              주문처리상태
              <select onChange={selectStatus} defaultValue={isDone}>
                <option value="">전체</option>
                <option value="true">O</option>
                <option value="false">X</option>
              </select>
            </th>
            <th>고객번호</th>
            <th>고객이름</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.transaction_time}</td>
              <td>{order.status ? 'O' : 'X'}</td>
              <td>{order.customer_id}</td>
              <td>{order.customer_name}</td>
              <td>{order.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {Array.from({ length: totalPageCount }).map((_, i) => (
          <button
            key={i}
            disabled={page === String(i + 1)}
            onClick={() => setPage(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    </>
  );
}
