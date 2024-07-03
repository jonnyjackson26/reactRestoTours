import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom/client'
import Home from './pages/home/Home';
import About from './pages/about/About'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Testimonials from './pages/testimonials/Testimonials';
import Contact from './pages/contact/Contact';
import FAQ from './pages/faq/Faq';
import Tours from './pages/tours/Tours';
import { tour1 } from './assets/tourInfoFiles/tourInfo';
import { tour2 } from './assets/tourInfoFiles/tourInfo';
import { tour3 } from './assets/tourInfoFiles/tourInfo';
import TourInfo from './pages/tourInfo/TourInfo';
import Register from './pages/register/Register';

import emailjs from 'emailjs-com';
emailjs.init('RvRZJ8_KLtjGvgQgy');


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
  {
    path: "tours/tour1",
    element: <TourInfo agenda={tour1.agenda} />,
  },
  {
    path: "tours/tour2",
    element: <TourInfo agenda={tour2.agenda} />,
  },
  {
    path: "tours/tour3",
    element: <TourInfo agenda={tour3.agenda} />,
  },
  {
    path: "/register",
    element: <Register />,
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