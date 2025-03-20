import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { CookiesProvider } from 'react-cookie';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Index from './routes';
import Login from './routes/login';
import Register from './routes/register';
import 'bootstrap/dist/css/bootstrap.css';
import GreenProduct from './routes/Green Products';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/green-products',
    element: <GreenProduct />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CookiesProvider>
      <RouterProvider router={router} />
    </CookiesProvider>
  </React.StrictMode>
);