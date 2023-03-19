import { useQuery } from '@tanstack/react-query';

import { getOrders } from '@/api';
import { OrderTable } from '@/components';

export default function App() {
  const {
    isLoading,
    isError,
    data: orders,
  } = useQuery({
    queryKey: ['orders'],
    queryFn: getOrders,
    select: (data) =>
      data.filter(
        (order) => order.transaction_time.split(' ')[0] === '2023-03-08',
      ),
    refetchInterval: 1000 * 5,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return <OrderTable orders={orders} />;
}
