import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home.jsx';
import Provider from './Provider.jsx';
import Register from './Login and Register/Register.jsx';
import Login from './Login and Register/Login.jsx';
import VolunteerPosts from './Need volunteer/VolunteerPosts.jsx';
import Addvolunteer from './Add volunteer/Addvolunteer.jsx';
import Detail from './Post Detail/Detail.jsx';
import Mypost from './Manage my post/Mypost.jsx';
import Requestes from './Requests/Requestes.jsx';
import Private from './Private.jsx';
import Update from './Manage my post/Update.jsx';
import ReqForVol from './Request for volunteer/ReqForVol.jsx';
import Error from './Error page/Error.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Home/>,
        loader: () => fetch('https://volunteer-server-side-ten.vercel.app/posts',{credentials: 'include'})
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: '/need-volunteer',
        element: <VolunteerPosts/>
      },
      {
        path: '/add-volunteer',
        element: <Private><Addvolunteer/></Private>
      },
      {
        path: '/post/:id',
        element: <Private><Detail/></Private>,
        loader: ({params}) => fetch(`https://volunteer-server-side-ten.vercel.app/posts?id=${params.id}`, {credentials: 'include'})
      },
      {
        path: '/myposts',
        element: <Private><Mypost/></Private>
      },
      {
        path: '/mypost/:id',
        element: <Private><Update/></Private>,
        loader: ({params}) => fetch(`https://volunteer-server-side-ten.vercel.app/posts?id=${params.id}`, {credentials: 'include'})
      },
      {
        path: '/requestes',
        element: <Private><Requestes/></Private>
      },
      {
        path: '/requesttobevolunteer/:id',
        element: <Private><ReqForVol/></Private>,
        loader: ({params}) => fetch(`https://volunteer-server-side-ten.vercel.app/posts?id=${params.id}`, {credentials: 'include'})
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
