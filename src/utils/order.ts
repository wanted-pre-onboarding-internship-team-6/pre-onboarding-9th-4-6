import { OrderData } from '@/types/order';

export const makeTodayOrderList = (orderData: OrderData[]) => {
  const filteredData = orderData
    .filter((data) => data.transaction_time.includes('2023-03-08'))
    .map((el, i) => {
      el.key = i;

      return el;
    });

  return filteredData;
};
