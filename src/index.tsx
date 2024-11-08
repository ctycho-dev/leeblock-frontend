import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';

import Home from './pages/home'
import About from './pages/about'
import Checkout from './pages/checkout'
import Politika from './pages/politika'
import Agreement from './pages/agreement'
import Error from './pages/error'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
    },
    {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
    },
    {
        path: "/checkout",
        element: <Checkout />,
        errorElement: <Error />,
    },
    {
        path: "/politika",
        element: <Politika />,
        errorElement: <Error />,
    },
    {
        path: "/agreement",
        element: <Agreement />,
        errorElement: <Error />,
    }
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

reportWebVitals();