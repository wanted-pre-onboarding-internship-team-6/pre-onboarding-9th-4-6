import styled from '@emotion/styled';

import { useOrders } from '@/hooks';

export default function OrderTableBody() {
  const { isLoading, isError, orderData } = useOrders();

  if (isLoading) return <div>Loading...</div>;
  if (isError || !orderData) return <div>Error</div>;

  return (
    <tbody>
      {orderData.orders.map((order) => (
        <Tr key={order.id}>
          <td>{order.id}</td>
          <td>{order.transaction_time}</td>
          <td>{order.status ? 'O' : 'X'}</td>
          <td>{order.customer_id}</td>
          <td>{order.customer_name}</td>
          <td>{order.currency}</td>
        </Tr>
      ))}
    </tbody>
  );
}

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
