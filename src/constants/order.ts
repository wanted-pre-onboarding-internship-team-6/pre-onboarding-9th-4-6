export const QUERY_KEY = {
  page: 'page',
  sort: 'sort',
  order: 'order',
};

export const SORT_TYPE = {
  id: 'id',
  transaction_time: 'transaction_time',
};

export const ORDER_TYPE = {
  ascend: 'ascend',
  descend: 'descend',
} as const;

export const COLUMN_KEY = {
  id: 'id',
  transaction_time: 'transaction_time',
  status: 'status',
  customer_id: 'customer_id',
  customer_name: 'customer_name',
  currency: 'currency',
};

export const COLUMN_TITLE = {
  id: '주문번호',
  transaction_time: '거래시간',
  status: '주문처리상태',
  customer_id: '고객번호',
  customer_name: '고객이름',
  currency: '가격',
};
