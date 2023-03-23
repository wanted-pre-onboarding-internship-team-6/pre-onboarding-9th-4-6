import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { describe, it } from 'vitest';

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

describe('Pagination component', () => {
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

  it('should render correct number of buttons', () => {
    const buttons = screen.getAllByTestId('my-button');

    expect(buttons).toHaveLength(totalPageCount);
  });

  it('should disable the current page button', () => {
    const activeButton = screen.getByText(page);
    expect(activeButton).toBeDisabled();
  });

  it('should call setPage when a button is clicked', () => {
    const buttons = screen.getAllByTestId('my-button');

    const targetPage = 5;
    fireEvent.click(buttons[4]);

    expect(setPage).toHaveBeenCalledTimes(1);
    expect(setPage).toHaveBeenCalledWith(targetPage);
  });
});
