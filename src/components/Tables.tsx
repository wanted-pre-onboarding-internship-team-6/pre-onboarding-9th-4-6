import React from 'react';

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';

type Props = {
  id: number;
  transaction_time: string;
  status: boolean;
  customer_id: number;
  customer_name: string;
  currency: string;
};

const Tables: React.FC<Props> = ({
  id,
  transaction_time,
  status,
  customer_id,
  customer_name,
  currency,
}) => {
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>주문번호</Th>
            <Th>거래시간</Th>
            <Th>주문처리상태</Th>
            <Th>고객번호</Th>
            <Th>고객이름</Th>
            <Th>가격</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>{id}</Td>
            <Td>{transaction_time}</Td>
            <Td>{status}</Td>
            <Td>{customer_id}</Td>
            <Td>{customer_name}</Td>
            <Td>{currency}</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Tables;
