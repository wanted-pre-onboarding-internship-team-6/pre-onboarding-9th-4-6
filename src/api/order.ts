import axios from 'axios';

import { ORDER_PER_PAGE, SORT_ORDER, TODAY } from '@/constants';
import { Order } from '@/types/order';

const API_URL = import.meta.env.VITE_API_URL;

interface Props {
  page: string;
  sort: string;
  order: string;
  status: string;
  userName: string;
}

export default async function getOrders({
  page,
  sort,
  order,
  userName,
  status,
}: Props) {
  const { data: orders } = await axios.get<Order[]>(API_URL);

  const todayOrders = orders.filter((order) => {
    if (status === 'true') {
      return (
        order.transaction_time.split(' ')[0] === TODAY &&
        String(order.status) === status
      );
    }

    if (status === 'false') {
      return (
        order.transaction_time.split(' ')[0] === TODAY &&
        String(order.status) === status
      );
    }

    return order.transaction_time.split(' ')[0] === TODAY;
  });

  const searchUserLists = todayOrders.filter((x) =>
    x.customer_name.toLowerCase().match(userName),
  );

  const resultsItems = searchUserLists ? searchUserLists : todayOrders;

  const totalOrder = resultsItems.length;
  const sortedOrders = resultsItems
    .sort((a: any, b: any) => {
      if (a[sort] > b[sort]) return order === SORT_ORDER.asc ? 1 : -1;
      if (a[sort] < b[sort]) return order === SORT_ORDER.asc ? -1 : 1;

      return 0;
    })
    .slice((+page - 1) * ORDER_PER_PAGE, +page * ORDER_PER_PAGE);

  return {
    totalOrder,
    orders: sortedOrders,
    searchUserLists,
  };
}
