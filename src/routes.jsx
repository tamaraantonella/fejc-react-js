import { Outlet } from 'react-router-dom';
import PhoneScreen from './components/PhoneScreen/index.js';

export default [
  {
    path: '/',
    element: <PhoneScreen><Outlet/></PhoneScreen>,
    errorElement: <span>404</span>,
    children: [
      {
        path: '/',
        element: <span>Home!</span>
      },
      {
        path: 'paintings/:paintingId',
        element: <span>Painting placeholder!</span>
      }
    ]
  }
];
