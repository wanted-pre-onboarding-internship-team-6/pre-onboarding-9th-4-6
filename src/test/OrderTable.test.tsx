import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import OrderTable from '@/components/OrderTable';

test('table rendering', () => {
  render(<OrderTable />);

  const orderTh = screen.getByText('주문번호');
  const transactionTimeTh = screen.getByText('거래시간');
  const orderStatusTh = screen.getByText('주문처리상태');
  const searchBarInput = screen.getByPlaceholderText('고객 이름 검색');

  userEvent.click(searchBarInput);
  userEvent.type(searchBarInput, '이름');

  userEvent.click(orderTh);
  userEvent.click(transactionTimeTh);
  userEvent.click(orderStatusTh);

  expect(searchBarInput).toHaveFocus();
  expect(searchBarInput).toBeInTheDocument();

  expect(orderStatusTh).toBeTruthy();
  expect(orderStatusTh).toBeFalsy();
});
