import { Box } from '@chakra-ui/react';
import { Table, Tag } from 'antd';
import { useSearchParams } from 'react-router-dom';

import {
  COLUMN_KEY,
  COLUMN_TITLE,
  ORDER_TYPE,
  QUERY_KEY,
  SORT_TYPE,
} from '@/constants';

import type { Order } from '@/types';
import type { ColumnsType, TableProps } from 'antd/es/table';

interface Props {
  data: Order[];
}

export default function OrderList({ data }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get(QUERY_KEY.page) ?? '1';
  const sort: string = searchParams.get(QUERY_KEY.sort) ?? '';
  const order: string = searchParams.get(QUERY_KEY.order) ?? '';

  const columns: ColumnsType<Order> = [
    {
      title: COLUMN_TITLE.id,
      dataIndex: COLUMN_KEY.id,
      key: COLUMN_KEY.id,
      sorter: (a, b) => a.id - b.id,
      defaultSortOrder:
        sort === SORT_TYPE.id
          ? order === ORDER_TYPE.ascend
            ? ORDER_TYPE.ascend
            : ORDER_TYPE.descend
          : null,
    },
    {
      title: COLUMN_TITLE.transaction_time,
      dataIndex: COLUMN_KEY.transaction_time,
      key: COLUMN_KEY.transaction_time,
      defaultSortOrder:
        sort === SORT_TYPE.transaction_time
          ? order === ORDER_TYPE.ascend
            ? ORDER_TYPE.ascend
            : ORDER_TYPE.descend
          : null,
      sorter: (a, b) =>
        new Date(a.transaction_time).getTime() -
        new Date(b.transaction_time).getTime(),
    },
    {
      title: COLUMN_TITLE.status,
      dataIndex: COLUMN_KEY.status,
      key: COLUMN_KEY.status,
      render(value, record) {
        return <Tag key={record.id}>{value.toString()}</Tag>;
      },
    },
    {
      title: COLUMN_TITLE.customer_id,
      dataIndex: COLUMN_KEY.customer_id,
      key: COLUMN_KEY.customer_id,
    },
    {
      title: COLUMN_TITLE.customer_name,
      dataIndex: COLUMN_KEY.customer_name,
      key: COLUMN_KEY.customer_name,
    },
    {
      title: COLUMN_TITLE.currency,
      dataIndex: COLUMN_KEY.currency,
      key: COLUMN_KEY.currency,
    },
  ];

  const onChange: TableProps<Order>['onChange'] = (pagination, _, sorter) => {
    if (pagination !== null) {
      const page = pagination.current?.toString() ?? '';
      searchParams.set(QUERY_KEY.page, page);
      setSearchParams(searchParams);
    }

    if (sorter !== null && !Array.isArray(sorter)) {
      const sort: any = sorter.field ?? '';
      const order: any = sorter.order ?? '';

      if (sort === '' || order === '') {
        searchParams.delete(QUERY_KEY.sort);
        searchParams.delete(QUERY_KEY.order);
      } else {
        searchParams.set(QUERY_KEY.sort, sort);
        searchParams.set(QUERY_KEY.order, order);
      }

      setSearchParams(searchParams);
    }
  };

  return (
    <Box p={8}>
      <Table<Order>
        rowKey="id"
        columns={columns}
        dataSource={data}
        onChange={onChange}
        pagination={{ current: parseInt(page), pageSize: 50 }}
      />
    </Box>
  );
}
