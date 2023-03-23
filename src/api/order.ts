import axios from 'axios';

import { ORDER_PER_PAGE, SORT_ORDER, TODAY } from '@/constants';
import { Order } from '@/types/order';
import { delay, throwErrorAtChance } from '@/utils';

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
  await delay(1000);
  throwErrorAtChance(10);

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
