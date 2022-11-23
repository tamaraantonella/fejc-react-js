import App from './App.jsx';

export default [
  {
    path: '/',
    element: <App/>,
    errorElement: <span> 404 </span>,
    children: [
      {
        path: '/',
        element: <span> Home! </span>
      },
      {
        path: 'paintings/:paintingId',
        element: <span> Painting placeholder!</span>
      }
    ]
  }
];
