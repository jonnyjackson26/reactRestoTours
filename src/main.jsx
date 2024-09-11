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

import ToursTable from './pages/newTours/newTours';

import emailjs from 'emailjs-com';
import TheKirtlandExperience from './pages/tours2/the-kirtland-experience/The-Kirtland-Experience';
import LandsOfTheRestoration from './pages/tours2/Lands-Of-The-Restoration/Lands-Of-The-Restoration';
import OnTheShores from './pages/tours2/on-the-shores/On-The-Shores';
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
  {
    path: "/new-tours",
    element: <ToursTable />,
  },
  {
    path: "/the-kirtland-experience",
    element: <TheKirtlandExperience />,
  },
  {
    path: "/lands-of-the-restoration",
    element: <LandsOfTheRestoration />,
  },
  {
    path: "/on-the-shores",
    element: <OnTheShores />,
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