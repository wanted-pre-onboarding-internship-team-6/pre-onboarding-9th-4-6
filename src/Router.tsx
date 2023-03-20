import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { OrderLists } from './pages';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <OrderLists />,
    },
  ]);

  return <RouterProvider router={router} />;
}
