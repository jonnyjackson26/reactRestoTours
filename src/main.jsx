import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom/client'
import Home from './pages/home/Home';
import About from './pages/about/About'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Testimonials from './pages/testimonials/Testimonials';
import Contact from './pages/contact/Contact';
import FAQ from './pages/faq/Faq';
import Tours from './pages/tours/Tours';
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
  {
    path: "/testimonials",
    element: <Testimonials />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/faq",
    element: <FAQ />,
  },
  {
    path: "/tours",
    element: <Tours />,
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