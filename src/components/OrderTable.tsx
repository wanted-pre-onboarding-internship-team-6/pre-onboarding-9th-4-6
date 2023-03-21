import { useSearchParams } from 'react-router-dom';

import {
  SORT_ORDER,
  ORDER_PER_PAGE,
  QUERY_STRING,
  ORDER_KEY,
  DEFALUT,
} from '@/constants';
import { OrderData } from '@/types/order';

interface Props {
  orderData: OrderData;
}

export default function OrderTable({ orderData }: Props) {
  const { totalOrder, orders } = orderData;

  const [searchParams, setSearchParams] = useSearchParams();
  const { page, sort, order } = Object.fromEntries([...searchParams]);

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

  function setFilter(filter: boolean | string) {
    searchParams.set(QUERY_STRING.filter, String(filter));
    setSearchParams(searchParams);
  }

  const sortIndicator = order === SORT_ORDER.asc ? '오름차순' : '내림차순';

  return (
    <>
      <div>총 주문수: {totalOrder}</div>
      <form action="/">
        <input type="text" placeholder="고객이름" name="name" />
        <button type="submit">검색</button>
      </form>
      <button onClick={() => setFilter(true)}>주문 처리 상태 O</button>
      <button onClick={() => setFilter(false)}>주문 처리 상태 X</button>
      <button onClick={() => setFilter(DEFALUT)}>초기화</button>

      <table>
        <thead>
          <tr>
            <th onClick={() => sortOrders(ORDER_KEY.id)}>
              주문번호{sort === ORDER_KEY.id && sortIndicator}
            </th>
            <th onClick={() => sortOrders(ORDER_KEY.transactionTime)}>
              거래시간{sort === ORDER_KEY.transactionTime && sortIndicator}
            </th>
            <th>주문처리상태</th>
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
