import PhoneScreen from './components/PhoneScreen/index.js';

export default [
  {
    path: '/',
    element: <PhoneScreen/>,
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
