import { useEffect, useState } from 'react';

import { OrderData } from '@/types/order';
import { makeTodayOrderList } from '@/utils/order';

export default function useOrderDatas() {
  const [isLoading, setIsLoading] = useState(true);
  const [orderDatas, setOrderDatas] = useState<OrderData[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [countDown, setCountDown] = useState(5);
  useEffect(() => {
    async function fetchOrderDatas() {
      try {
        const res = await fetch('/mock_data.json');

        if (!res.ok) throw new Error('네트워크 에러');
        const response = await res.json();

        const orderDatas = makeTodayOrderList(response);

        setOrderDatas(orderDatas);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    }

    if (orderDatas.length === 0) setTimeout(() => fetchOrderDatas(), 3000);
    // if (orderDatas.length === 0)
    //   setInterval(async () => {
    //     if (countDown === 0) {
    //       await setCountDown(5);

    //       return fetchOrderDatas();
    //     } else {
    //       await setCountDown((prev) => prev - 1);
    //     }
    //   }, 1000);
  }, [orderDatas.length]);

  return { isLoading, orderDatas, error, countDown };
}
