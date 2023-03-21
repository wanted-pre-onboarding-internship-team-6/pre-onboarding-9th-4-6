import { ChangeEvent, useEffect, useRef } from 'react';

import styled from '@emotion/styled';
import { useSearchParams } from 'react-router-dom';

import {
  SORT_ORDER,
  ORDER_PER_PAGE,
  QUERY_STRING,
  ORDER_KEY,
  INITIAL_PAGE,
} from '@/constants';
import { useOrders } from '@/hooks';
import { debounce } from '@/utils';

import OrderTableBody from './OrderTableBody';

export default function OrderTable() {
  const { isLoading, isError, orderData } = useOrders();

  const customerSearchRef = useRef<HTMLInputElement>(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const { page, sort, order, isDone, keyword } = Object.fromEntries([
    ...searchParams,
  ]);

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
    else {
      searchParams.set(QUERY_STRING.page, INITIAL_PAGE);
      searchParams.set(QUERY_STRING.keyword, searchKeyword);
    }
    setSearchParams(searchParams);
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
            <th onClick={() => sortOrders(ORDER_KEY.id)}>
              주문번호 {sort === ORDER_KEY.id && sortIndicator}
            </th>
            <th onClick={() => sortOrders(ORDER_KEY.transactionTime)}>
              거래시간 {sort === ORDER_KEY.transactionTime && sortIndicator}
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
          </Tr>
        </Thead>
        <OrderTableBody />
      </Table>
      <Pagination>
        {Array.from({ length: totalPageCount }).map((_, i) => (
          <button
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
