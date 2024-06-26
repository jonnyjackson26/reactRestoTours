import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/home/Home';
import About from './pages/about/About'
import { createHashRouter, RouterProvider } from 'react-router-dom'
//import NavBar from './components/NavBar'




const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about-us",
    element: <About />,
  },
])

export const Context = React.createContext();

function Main() {


  return (
    <Context.Provider>
      <RouterProvider router={router} />
    </Context.Provider>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <Main />
)