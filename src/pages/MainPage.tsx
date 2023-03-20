import { useState } from 'react';

import {
  VStack,
  Heading,
  Button,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';

import GetApiData from '@/api/index';

import type { OderDatas } from '@/types/data';

export default function MainPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(50);
  const [sortColumn, setSortColumn] = useState<'id' | 'transaction_time'>('id');
  const [sortDirection, setSortDirection] = useState<'up' | 'down'>('up');

  const datas = GetApiData();

  const arrayOfData = Object.entries<OderDatas>(datas).map(
    ([key, value], i) => ({
      key: i,
      id: value.id,
      transaction_time: value.transaction_time,
      status: value.status,
      customer_id: value.customer_id,
      customer_name: value.customer_name,
      currency: value.currency,
      num: key,
    }),
  );

  const sortedOrders = arrayOfData.sort((a, b) => {
    if (sortColumn === 'id') {
      if (sortDirection === 'up') {
        return a.id - b.id;
      } else {
        return b.id - a.id;
      }
    } else if (sortColumn === 'transaction_time') {
      if (sortDirection === 'up') {
        return (
          new Date(a.transaction_time).getTime() -
          new Date(b.transaction_time).getTime()
        );
      } else {
        return (
          new Date(b.transaction_time).getTime() -
          new Date(a.transaction_time).getTime()
        );
      }
    } else {
      return 0;
    }
  });

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = sortedOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(sortedOrders.length / ordersPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleSortClick = (column: 'id' | 'transaction_time') => {
    if (sortColumn === column) {
      if (sortDirection === 'up') {
        setSortDirection('down');
      } else {
        setSortDirection('up');
      }
    } else {
      setSortColumn(column);
      setSortDirection('up');
    }
  };

  return (
    <VStack mx="auto" py="30">
      <Heading>주문 목록</Heading>
      <Button>오늘 거래 보기</Button>

      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th onClick={() => handleSortClick('id')}>
                주문 번호
                {sortColumn === 'id' && sortDirection === 'up'
                  ? ' ▲'
                  : sortColumn === 'id' && sortDirection === 'down'
                  ? ' ▼'
                  : ''}
              </Th>
              <Th onClick={() => handleSortClick('transaction_time')}>
                거래 시간
                {sortColumn === 'transaction_time' && sortDirection === 'up'
                  ? ' ▲'
                  : sortColumn === 'transaction_time' &&
                    sortDirection === 'down'
                  ? ' ▼'
                  : ''}
              </Th>
              <Th>주문 처리상태</Th>
              <Th>고객 번호</Th>
              <Th>고객 이름</Th>
              <Th>가격</Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentOrders.map((data) => {
              return (
                <Tr key={`order-${data.id}`}>
                  <Td>{data.id}</Td>
                  <Td>{data.transaction_time}</Td>
                  <Td>{data.status ? 'True' : 'False'}</Td>
                  <Td>{data.customer_id}</Td>
                  <Td>{data.customer_name}</Td>
                  <Td>{data.currency}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
        <div>
          {pageNumbers.map((number) => (
            <Button key={number} onClick={() => paginate(number)} mx="2">
              {number}
            </Button>
          ))}
        </div>
      </TableContainer>
    </VStack>
  );
}
