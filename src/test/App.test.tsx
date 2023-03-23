import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import { OrderTable } from '@/components';

const queryClient = new QueryClient();

describe(`<OrderTable />`, () => {
  it('matches snapshot', () => {
    const utils = render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <OrderTable />
        </BrowserRouter>
      </QueryClientProvider>,
    );

    const orderTh = screen.getByText('주문번호');
    const transactionTimeTh = screen.getByText('거래시간');
    const orderStatusTh = screen.getByText('주문처리상태');
    const searchBarInput = screen.getByPlaceholderText('고객 이름 검색');

    expect(orderTh).toBeInTheDocument();
    expect(transactionTimeTh).toBeInTheDocument();
    expect(orderStatusTh).toBeInTheDocument();
    expect(searchBarInput).toBeInTheDocument();

    userEvent.click(searchBarInput);
    expect(searchBarInput).toHaveFocus();

    userEvent.type(searchBarInput, '이름');
    expect(searchBarInput).toBeInTheDocument();

    expect(utils.container).toMatchSnapshot();
  });
});

describe(`<OrderTable />`, () => {
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
