// import { useState } from 'react';

import Tables from '../components/Tables';
import useFetchData from '../hooks/useFetchData';

type Props = {
  id: number;
  transaction_time: string;
  status: boolean;
  customer_id: number;
  customer_name: string;
  currency: string;
};

export default function UserOrdersPage() {
  const { isLoading, error, datas } = useFetchData();
  // const [todayData, setTodayData] = useState([]);

  // const todayFilter = datas.filter((data: Props) =>
  //   data.transaction_time.includes('2023-03-08'),
  // );

  // setTodayData(todayFilter);

  if (isLoading) return <h1>loding...</h1>;
  if (error) return <h1>error</h1>;

  return (
    <ul>
      {datas.map((data: Props) => (
        <Tables
          key={data.id}
          id={data.id}
          transaction_time={data.transaction_time}
          status={data.status}
          customer_id={data.customer_id}
          customer_name={data.customer_name}
          currency={data.currency}
        />
      ))}
    </ul>
  );
}
