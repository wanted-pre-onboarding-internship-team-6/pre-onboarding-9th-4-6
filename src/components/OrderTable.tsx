import { ChangeEvent, useEffect, useRef } from 'react';

import styled from '@emotion/styled';

import {
  SORT_ORDER,
  ORDER_PER_PAGE,
  QUERY_STRING,
  ORDER_KEY,
  INITIAL_PAGE,
} from '@/constants';
import { useOrders, useQueryString } from '@/hooks';
import { debounce } from '@/utils';

import OrderTableBody from './OrderTableBody';

export default function OrderTable() {
  const { isLoading, isError, orderData } = useOrders();
  const { getQueryString, setQueryString, deleteQueryString } =
    useQueryString();

  const customerSearchRef = useRef<HTMLInputElement>(null);

  const { page, sort, order, isDone, keyword } = getQueryString();

  function sortOrders(nextSort: string, currOrder: string) {
    const nextOrder =
      currOrder === SORT_ORDER.asc ? SORT_ORDER.desc : SORT_ORDER.asc;
    setQueryString({ sort: nextSort, order: nextOrder });
  }

  function setPage(page: number) {
    setQueryString({ page: page.toString() });
  }

  function selectStatus(e: ChangeEvent<HTMLSelectElement>) {
    const status = e.target.value;

    if (status) setQueryString({ page: INITIAL_PAGE, isDone: status });
    else deleteQueryString([QUERY_STRING.isDone]);
  }

  function searchCustomer(e: ChangeEvent<HTMLInputElement>) {
    const searchKeyword = e.target.value;

    if (!searchKeyword) deleteQueryString([QUERY_STRING.keyword]);
    else setQueryString({ page: INITIAL_PAGE, keyword: searchKeyword });
  }

  const debouncedSearchCustomer = debounce(searchCustomer, 400);

  const sortIndicator = order === SORT_ORDER.asc ? '▲' : '▼';

  useEffect(() => {
    if (customerSearchRef.current && keyword) customerSearchRef.current.focus();
  }, [keyword]);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !orderData) return <div>Error</div>;

  const totalPageCount = Math.ceil(orderData.totalOrder / ORDER_PER_PAGE);

  return (
    <>
      <SearchBar>
        총 주문: {orderData.totalOrder}건
        <input
          type="text"
          ref={customerSearchRef}
          defaultValue={keyword}
          placeholder="고객 이름 검색"
          onChange={debouncedSearchCustomer}
        />
      </SearchBar>
      <Table>
        <Thead>
          <Tr>
            <th onClick={() => sortOrders(ORDER_KEY.id, order)}>
              주문번호 {sort === ORDER_KEY.id && sortIndicator}
            </th>
            <th onClick={() => sortOrders(ORDER_KEY.transactionTime, order)}>
              거래시간 {sort === ORDER_KEY.transactionTime && sortIndicator}
            </th>
            <th>
              주문처리상태
              <select
                onChange={selectStatus}
                defaultValue={isDone}
                data-testid="select">
                <option value="">전체</option>
                <option value="true">O</option>
                <option value="false">X</option>
              </select>
            </th>
            <th>고객번호</th>
            <th>고객이름</th>
            <th>가격</th>
          </Tr>
        </Thead>
        <OrderTableBody />
      </Table>
      <Pagination>
        {Array.from({ length: totalPageCount }).map((_, i) => (
          <button
            data-testid="my-button"
            key={i}
            disabled={page === String(i + 1)}
            onClick={() => setPage(i + 1)}>
            {i + 1}
          </button>
        ))}
      </Pagination>
    </>
  );
}

const SearchBar = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'end',
  fontSize: '20px',
  fontWeight: 'bold',
  paddingTop: '48px',
  marginBottom: '20px',

  input: {
    width: '223px',
    height: '48px',
    fontSize: '24px',
    fontWeight: 'bold',
    paddingLeft: '11px',
  },
});

const Table = styled.table({
  display: 'block',
  width: '100%',
  height: '580px',
  overflowY: 'scroll',
  border: '1px solid #000000',
  marginBottom: '48px',
});

const Thead = styled.thead({
  width: '100%',
});

const Tr = styled.tr({
  display: 'grid',
  gridTemplateColumns: '1fr 2fr 1fr 1fr 2fr 1fr',
  height: '48px',

  td: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Pagination = styled.div`
  display: flex;
  justify-content: center;

  button {
    width: 48px;
    height: 48px;
    margin: 0 12px;
  }
`;
