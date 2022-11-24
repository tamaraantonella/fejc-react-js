import { Outlet } from 'react-router-dom';
import PhoneScreen from './components/PhoneScreen/index.js';
import { Home } from './pages/Home/Home.jsx';
import PaintingDetails from './pages/PaintingDetails/index.js';

export default [
  {
    path: '/',
    element: <PhoneScreen><Outlet/></PhoneScreen>,
    errorElement: <span>404</span>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'paintings/:paintingId',
        element: <PaintingDetails/>
      }
    ]
  }
];
