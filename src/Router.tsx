import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ErrorPage } from '@/pages';

import App from './App';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}
