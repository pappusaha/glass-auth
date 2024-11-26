import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {createBrowserRouter,RouterProvider } from "react-router-dom";

import Root from './Root';
import Notfound from './Components/Notfound';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';


const router = createBrowserRouter([

{
  path:'/', 
  element:<Root></Root>, 
  errorElement:<Notfound></Notfound>,
  children:[
{
  path:'/',
  element:<Home></Home>
},
{

  path:'/register',
  element:<Register></Register>
},
{
  path:'/login',
  element:<Login></Login>
}


  ]
}


]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <FirebaseProvider>
    <RouterProvider router={router}> </RouterProvider>
       </FirebaseProvider>
  </StrictMode>,
)
