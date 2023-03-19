import { Order } from '@/types/order';

interface Props {
  orders: Order[];
}

export default function OrderTable({ orders }: Props) {
  return (
    <table>
      <thead>
        <th>주문번호</th>
        <th>거래시간</th>
        <th>주문처리상태</th>
        <th>고객번호</th>
        <th>고객이름</th>
        <th>가격</th>
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
  );
}
