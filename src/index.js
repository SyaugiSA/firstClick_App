import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Usertraffic from './Pages/Usertraffic';
import Useractivity from './Pages/Useractivity';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/usertraffic',
        element: <Usertraffic />,
    },
    {
        path: '/useractivity',
        element: <Useractivity />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
