import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Layout } from '@/components';
import { ErrorPage } from '@/pages';

import App from './App';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout>
          <App />
        </Layout>
      ),
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}
