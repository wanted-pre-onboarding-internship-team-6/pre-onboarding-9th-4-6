import axios from 'axios';

import { Order } from '@/types/order';

const API_URL = import.meta.env.VITE_API_URL;

export default async function getOrders(): Promise<Order[]> {
  return await axios.get(API_URL).then((res) => res.data);
}
