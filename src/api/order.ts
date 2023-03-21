import axios from 'axios';

import { ORDER_PER_PAGE, SORT_ORDER, TODAY } from '@/constants';
import { Order } from '@/types/order';

const API_URL = import.meta.env.VITE_API_URL;

interface Props {
  page: string;
  sort: string;
  order: string;
  isDone: string;
  keyword: string;
}

export default async function getOrders({
  page,
  sort,
  order,
  isDone,
  keyword,
}: Props) {
  // const config = { params: { page, sort, order } };
  // const { data } = await axios.get<Order[]>(API_URL, config);

  const { data: orders } = await axios.get<Order[]>(API_URL);

  let filteredOrders;

  filteredOrders = orders.filter((order) =>
    order.transaction_time.includes(TODAY),
  );

  if (isDone !== undefined)
    filteredOrders = filteredOrders.filter(
      (order) => order.status === JSON.parse(isDone),
    );

  if (keyword) {
    const keywordPattern = new RegExp(keyword, 'i');
    filteredOrders = filteredOrders.filter((order) =>
      keywordPattern.test(order.customer_name),
    );
  }

  const totalOrder = filteredOrders.length;

  const sortedOrders = filteredOrders
    .sort((a: any, b: any) => {
      if (a[sort] > b[sort]) return order === SORT_ORDER.asc ? 1 : -1;
      if (a[sort] < b[sort]) return order === SORT_ORDER.asc ? -1 : 1;

      return 0;
    })
    .slice((+page - 1) * ORDER_PER_PAGE, +page * ORDER_PER_PAGE);

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
