import { Suspense, useEffect } from 'react';

import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';

import {
  OrderTable,
  OrderTableErrorFallback,
  OrderTableLoader,
} from '@/components';
import { INITIAL_PAGE, ORDER_KEY, SORT_ORDER } from '@/constants';
import { useQueryString } from '@/hooks';

export default function App() {
  const { getQueryString, setQueryString } = useQueryString();
  const { page, sort, order } = getQueryString();
  const { reset } = useQueryErrorResetBoundary();

  useEffect(() => {
    if (!page) setQueryString({ page: INITIAL_PAGE });
    if (!sort) setQueryString({ sort: ORDER_KEY.id });
    if (!order) setQueryString({ order: SORT_ORDER.asc });
  }, [order, page, sort, setQueryString]);

  return (
    <ErrorBoundary
      onReset={reset}
      fallbackRender={({ error, resetErrorBoundary }) => (
        <OrderTableErrorFallback
          error={error}
          resetErrorBoundary={resetErrorBoundary}
        />
      )}>
      <Suspense fallback={<OrderTableLoader />}>
        <OrderTable />
      </Suspense>
    </ErrorBoundary>
  );
}
