import styled from '@emotion/styled';

import { Order } from '@/types/order';

interface Props {
  orders: Order[];
}

export default function OrderTableBody({ orders }: Props) {
  return (
    <tbody>
      {orders.length === 0 ? (
        <NoOrder>
          <td>주문이 없습니다.</td>
        </NoOrder>
      ) : (
        orders.map((order) => (
          <Tr key={order.id}>
            <td>{order.id}</td>
            <td>{order.transaction_time}</td>
            <td>{order.status ? 'O' : 'X'}</td>
            <td>{order.customer_id}</td>
            <td>{order.customer_name}</td>
            <td>{order.currency}</td>
          </Tr>
        ))
      )}
    </tbody>
  );
}

const Tr = styled.tr`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 2fr 1fr;
  height: 48px;
  &:nth-of-type(2n-1) {
    background-color: #e2e2e2;
  }

  td {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const NoOrder = styled.tr({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '528px',
  fontSize: '32px',
  fontWeight: 'bold',
});
