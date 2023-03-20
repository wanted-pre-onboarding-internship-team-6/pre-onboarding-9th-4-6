import axios from 'axios';

import { ORDER_PER_PAGE, SORT_ORDER, TODAY } from '@/constants';
import { Order } from '@/types/order';

const API_URL = import.meta.env.VITE_API_URL;

interface Props {
  page: string;
  sort: string;
  order: string;
  filter: string | undefined;
}

export default async function getOrders({ page, sort, order, filter }: Props) {
  // const config = { params: { page, sort, order } };
  // const { data } = await axios.get<Order[]>(API_URL, config);

  const { data: orders } = await axios.get<Order[]>(API_URL);

  const todayOrders = orders.filter(
    (order) => order.transaction_time.split(' ')[0] === TODAY,
  );

  let totalOrder = todayOrders.length;

  let sortedOrders = todayOrders.sort((a: any, b: any) => {
    if (a[sort] > b[sort]) return order === SORT_ORDER.asc ? 1 : -1;

    if (a[sort] < b[sort]) return order === SORT_ORDER.asc ? -1 : 1;

    return 0;
  });

  if (filter !== undefined) {
    sortedOrders = sortedOrders.filter(
      (order) => order.status === JSON.parse(filter),
    );
    totalOrder = sortedOrders.length;
  }

  sortedOrders = sortedOrders.slice(
    (+page - 1) * ORDER_PER_PAGE,
    +page * ORDER_PER_PAGE,
  );

  return { totalOrder, orders: sortedOrders };
}

// axios interceptor 타이핑 시도
// axios.interceptors.response.use((res) => {
//   const { page, sort, order } = res.config.params as Props;

//   const todayOrders = res.data.filter(
//     (order: any) => order.transaction_time.split(' ')[0] === '2023-03-08',
//   );

//   const totalOrder = todayOrders.length;

//   const sortedOrders = todayOrders
//     .sort((a: Order, b: Order) => {
//       if (a[sort] > b[sort]) return order === ORDER.asc ? 1 : -1;

//       if (a[sort] < b[sort]) return order === ORDER.asc ? -1 : 1;

//       return 0;
//     })
//     .slice((+page - 1) * 50, +page * 50);

//   return { totalOrder, orders: sortedOrders };
// });
