import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { describe, it } from 'vitest';

import { OrderTable } from '@/components';

import mockDatas from '../../public/mock_data.json';

const queryClient = new QueryClient();

describe(`<OrderTable />`, () => {
  it('OrderTable 컴포넌트 렌더링 상태 검사', () => {
    const utils = render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <OrderTable />
        </BrowserRouter>
      </QueryClientProvider>,
    );

    expect(utils.container).toMatchSnapshot();
  });
});

describe(`OrderTable 컴포넌트 select 요소 렌더링 상태 검사`, () => {
  it('select match', () => {
    const utils = render(
      <select data-testid="select">
        <option value="">전체</option>
        <option value="true">O</option>
        <option value="false">X</option>
      </select>,
    );
    expect(utils.container).toMatchSnapshot();
  });
});

describe('페이지네이션 버튼 작동 상태 검사', () => {
  const totalPageCount = 5;
  const setPage = vi.fn();
  const page = '3';

  beforeEach(() => {
    render(
      <>
        {Array.from({ length: totalPageCount }).map((_, i) => (
          <button
            data-testid="my-button"
            key={i}
            disabled={page === String(i + 1)}
            onClick={() => setPage(i + 1)}>
            {i + 1}
          </button>
        ))}
      </>,
    );
  });

  it('버튼 개수가 페이지 개수와 일치하는지 검사', () => {
    const buttons = screen.getAllByTestId('my-button');
    expect(buttons).toHaveLength(totalPageCount);
  });

  it('현재 페이지를 나타내는 버튼이 비활성화 되는지 검사', () => {
    const activeButton = screen.getByText(page);
    expect(activeButton).toBeDisabled();
  });

  it('사용자가 5번 페이지 버튼을 눌렀을 떄, 페이지가 5번으로 이동하는 함수가 작동하는지 검사', () => {
    const buttons = screen.getAllByTestId('my-button');

    const targetPage = 5;
    fireEvent.click(buttons[4]);

    expect(setPage).toHaveBeenCalledTimes(1);
    expect(setPage).toHaveBeenCalledWith(targetPage);
  });
});

test('mockDatas의 데이터들이 테이블 요소에 렌더링 되는지 검사', () => {
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

test('주문목록 데이터 객체의 타입 검사', () => {
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

test('mockDatas의 transaction_time에 2023-03-08이 포함 된 데이터 수 검사', () => {
  const matchingData = mockDatas.filter((data) =>
    /2023-03-08/.test(data.transaction_time),
  );

  const count = matchingData.length;
  expect(count).toBeGreaterThan(0);
  expect(count).toBe(267);
});
