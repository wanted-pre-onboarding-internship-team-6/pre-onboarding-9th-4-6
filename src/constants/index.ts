export const INITIAL_PAGE = '1';

export const ORDER_KEY = {
  id: 'id',
  transactionTime: 'transaction_time',
} as const;

export const ORDER_PER_PAGE = 50;

export const QUERY_STRING = {
  page: 'page',
  sort: 'sort',
  order: 'order',
  isDone: 'isDone',
  keyword: 'keyword',
} as const;

export const SORT_ORDER = {
  asc: 'asc',
  desc: 'desc',
} as const;

export const TODAY = '2023-03-08';

export const QUERY_KEY = { orders: 'orders' } as const;
