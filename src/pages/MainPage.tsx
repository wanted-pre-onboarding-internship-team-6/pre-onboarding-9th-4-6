import { useState } from 'react';

import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons';
import * as C from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function MainPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 50; // 최대 게시물 수
  const TODAY = '2023-03-08';
  const [length, setLength] = useState(0);

  const { data, isLoading, isError } = useQuery(
    [`page`, currentPage],
    async () => {
      const url = `/db.json`;
      const { data } = await axios(url);
      setLength(data.length);
      const todaydata = data.filter(
        (data: any) => data.transaction_time.split(' ')[0] === TODAY,
      );
      setLength(todaydata.length);
      const offset = (currentPage - 1) * limit;

      return todaydata.slice(offset, offset + limit);
    },
    { staleTime: 5000 },
  );

  if (isError) return <h3>ERROR!</h3>;
  if (isLoading) return <h3>Loading...</h3>;

  return (
    <>
      <C.TableContainer style={{ margin: '100px' }}>
        <C.Table variant="striped" colorScheme="teal">
          <C.TableCaption>{TODAY} 주문 목록 페이지</C.TableCaption>
          <C.Thead>
            <C.Tr>
              <C.Th>No.</C.Th>
              <C.Th>주문번호</C.Th>
              <C.Th>거래일 & 거래시간</C.Th>
              <C.Th>주문처리상태</C.Th>
              <C.Th>고객번호</C.Th>
              <C.Th>고객이름</C.Th>
              <C.Th>가격</C.Th>
            </C.Tr>
          </C.Thead>
          <C.Tbody>
            {data
              .sort((a: any, b: any) => a.id - b.id)
              .map((product: any, idx: number) => (
                <C.Tr key={product.id}>
                  <C.Td>{idx}</C.Td>
                  <C.Td>{product.id}</C.Td>
                  <C.Td>{product.transaction_time}</C.Td>
                  <C.Td>{product.status ? '완료' : '진행중'}</C.Td>
                  <C.Td>{product.customer_id}</C.Td>
                  <C.Td>{product.customer_name}</C.Td>
                  <C.Td>{product.currency}</C.Td>
                </C.Tr>
              ))}
          </C.Tbody>
        </C.Table>
        <C.Stack>
          <C.HStack spacing="24px">
            <C.IconButton
              aria-label="previous"
              isActive={currentPage <= 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              icon={<ChevronLeftIcon />}></C.IconButton>
            {Array(Math.ceil(length / limit))
              .fill(0)
              .map((_, i) => (
                <C.Button
                  key={i}
                  variant={currentPage === i + 1 ? 'outline' : 'solid'}
                  onClick={() => setCurrentPage(i + 1)}>
                  {i + 1}
                </C.Button>
              ))}
            <C.IconButton
              aria-label="next"
              isActive={currentPage >= Math.ceil(length / limit)}
              onClick={() => setCurrentPage(currentPage + 1)}
              icon={<ChevronRightIcon />}></C.IconButton>
          </C.HStack>
        </C.Stack>
      </C.TableContainer>
    </>
  );
}
