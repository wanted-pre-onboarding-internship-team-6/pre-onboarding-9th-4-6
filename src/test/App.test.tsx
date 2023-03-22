import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
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
