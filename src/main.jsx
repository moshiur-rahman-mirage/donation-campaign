import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './assets/ErrorPage';
import Home from './assets/Components/Home/Home';
import Donation from './assets/Components/Donation/Donation';
import Statistics from './assets/Components/Statistics/Statistics';
import Root from './assets/Components/Root/Root';
import Carddetails from './assets/Components/Carddetails/Carddetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/donation",
        element:<Donation/>,
        loader:()=>fetch('/json/Donation.json')
      },
      {
        path:"/statistics",
        element:<Statistics/>
      },
      {
        path:"/card/:id",
        element:<Carddetails/>,
        loader:()=>fetch('/json/Donation.json')
      },
      {
        path:"donation/card/:id",
        element:<Carddetails/>,
        loader:()=>fetch('/json/Donation.json')
        
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
