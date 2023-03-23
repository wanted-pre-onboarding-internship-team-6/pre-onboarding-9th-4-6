import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { OrderTable } from '@/components';

import mockDatas from '../../public/mock_data.json';

const queryClient = new QueryClient();

test('앱 전체 요소가 동일한지 검사하기', () => {
  const utils = render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <OrderTable />
      </BrowserRouter>
    </QueryClientProvider>,
  );
  expect(utils.container).toMatchSnapshot();
});

test(`<OrderTable /> 컴포넌트에 해당 요소가 있는지 체크`, () => {
  const utils = render(
    <select data-testid="select">
      <option value="">전체</option>
      <option value="true">O</option>
      <option value="false">X</option>
    </select>,
  );
  expect(utils.container).toMatchSnapshot();
});

test('데이터 렌더링 검사', () => {
  const utils = render(
    <tbody>
      {mockDatas.map((order) => (
        <tr key={order.id}>
          <td>{order.id}</td>
          <td>{order.transaction_time}</td>
          <td>{order.status ? 'O' : 'X'}</td>
          <td>{order.customer_id}</td>
          <td>{order.customer_name}</td>
          <td>{order.currency}</td>
        </tr>
      ))}
    </tbody>,
  );
  expect(utils.container).toMatchSnapshot();
});

test('mockDatas 타입 체크', () => {
  expect(mockDatas).toContainEqual(
    expect.objectContaining({
      id: expect.any(Number),
      transaction_time: expect.any(String),
      status: expect.any(Boolean),
      customer_id: expect.any(Number),
      customer_name: expect.any(String),
      currency: expect.any(String),
    }),
  );
});

test('mockDatas 중에 transaction_time이 2023-03-08을 포함하는 데이터 개수', () => {
  const matchingData = mockDatas.filter((data) =>
    /2023-03-08/.test(data.transaction_time),
  );

  const count = matchingData.length;
  expect(count).toBeGreaterThan(0);
  expect(count).toBe(267);
});
