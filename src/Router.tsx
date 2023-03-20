import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { OrderPage } from '@/pages';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <OrderPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}
