import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainPage from '@/pages/MainPage';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <MainPage />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
