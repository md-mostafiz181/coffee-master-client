import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Root from './components/Root/Root';

// import Home from './components/Home/Home';
import AddCoffee from './components/AddCoffee/AddCoffee';
import UpdateCoffee from './components/UpdateCoffee/UpdateCoffee';
// import Coffees from './components/Coffees/Coffees';
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:()=>fetch("http://localhost:5000/coffees"),
    
    children:[

      {
        path:"/addCoffee",
        element:<AddCoffee></AddCoffee>
      },
      {
        path:"/updateCoffee",
        element:<UpdateCoffee></UpdateCoffee>
      },

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
