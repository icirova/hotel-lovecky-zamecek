import './global.css';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import { App } from './components/App';
import { HomePage } from './pages/HomePage/';
import { RoomDetail } from './pages/RoomDetail/RoomDetail';
import { OrderSummary } from './pages/OrderSummary/OrderSummary';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path:"/",
        element: <HomePage />,
      },
      {
        path: '/detail/:id',
        element: <RoomDetail />
      },
      {
        path: '/summary',
        element: <OrderSummary />
      }
    ] 
  },
  
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />
);