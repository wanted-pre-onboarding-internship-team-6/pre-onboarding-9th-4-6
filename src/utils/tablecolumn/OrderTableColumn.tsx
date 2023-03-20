import { Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';

import { OrderData } from '@/types/order';

const OrderTableColumn = (): ColumnsType<OrderData> => {
  return [
    {
      title: '주문번호',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: '거래시간',
      dataIndex: 'transaction_time',
      key: 'transaction_time',
      sorter: (a, b) => {
        const date1 = Number(new Date(a.transaction_time));
        const date2 = Number(new Date(b.transaction_time));

        return date1 - date2;
      },
    },
    {
      title: '주문처리상태',
      dataIndex: 'status',
      key: 'status',
      render: (_, record: OrderData) => {
        const color = record.status ? 'geekblue' : 'red';
        const status = `${record.status}`.toUpperCase();

        return <Tag color={color}>{status}</Tag>;
      },
      filters: [
        {
          text: 'True',
          value: true,
        },
        {
          text: 'False',
          value: false,
        },
      ],
      onFilter: (value, record) => {
        return record.status === value;
      },
    },
    {
      title: '고객번호',
      dataIndex: 'customer_id',
      key: 'customer_id',
    },
    {
      title: '고객이름',
      dataIndex: 'customer_name',
      key: 'customer_name',
    },
    {
      title: '가격',
      dataIndex: 'currency',
      key: 'currency',
    },
  ];
};

export default OrderTableColumn;
