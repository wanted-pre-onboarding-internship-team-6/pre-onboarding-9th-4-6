import { Table } from 'antd';

import SearchBar from '@/components/SearchBar';
import { useOrderDatas } from '@/hooks';
import OrderTableColumn from '@/utils/tablecolumn/OrderTableColumn';

const OrderPage = () => {
  const { isLoading, orderDatas, error, countDown } = useOrderDatas();

  const pageSize = 50;
  const columns = OrderTableColumn();

  return (
    <>
      <div>오더페이지 입니다.</div>
      <div>새로고침 타이머 : {countDown}</div>
      <SearchBar />
      {error && <div>주문목록을 불러오는데 에러가 발생했습니다.</div>}

      <Table
        dataSource={orderDatas}
        loading={isLoading}
        columns={columns}
        pagination={{
          pageSize,
          position: ['bottomCenter'],
          showSizeChanger: false,
        }}
      />
    </>
  );
};

export default OrderPage;
