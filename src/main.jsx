import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './Root';
import Home from './components/Home/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Pages/Login';
import AddCraft from './components/Card/AddCraft';
import AllCraft from './components/Pages/AllCraft';
import ViewCard from './components/Card/ViewCard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Page404 from './404/Page404';
import "../src/App.css"
import AuthProvider from './components/Pages/AuthProvider';
import Register from './components/Pages/Register';
import About from './components/Pages/About';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyCartPage from './components/Pages/MyCartPage';
import UpdateCart from './components/Pages/UpdateCart';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Page404></Page404>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://art-craft-server-black.vercel.app/crafts')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: '/allCraft',
        element: <PrivateRoute>
          <AllCraft></AllCraft>
        </PrivateRoute>,
        loader: () => fetch('https://art-craft-server-black.vercel.app/crafts')
      },
      {
        path: '/addCraft',
        element: <PrivateRoute>
          <AddCraft></AddCraft>
        </PrivateRoute>
      },
      {
        path: '/myCart',
        element:<PrivateRoute>
           <MyCartPage></MyCartPage>
        </PrivateRoute>,
      },
      {
        path: '/crafts/:id',
        element:<PrivateRoute>
           <UpdateCart></UpdateCart>
        </PrivateRoute>,
         loader: ({params}) => fetch(`https://art-craft-server-black.vercel.app/crafts/${params.id}`)

      },
      {
        path: '/cardDet/:id',
        element: <PrivateRoute>
          <ViewCard></ViewCard>
        </PrivateRoute>,
        loader: () => fetch('https://art-craft-server-black.vercel.app/crafts')
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>

  </React.StrictMode>,
)
