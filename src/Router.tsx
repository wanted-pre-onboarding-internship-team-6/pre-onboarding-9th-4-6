import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Layout } from './components';
import { MainPage } from './pages';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout>
          <MainPage />
        </Layout>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
