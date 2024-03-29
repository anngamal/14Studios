import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import Service from './Service';
import Contactus from './Contactus';
import Navbar from './Navbar';
import Portfolio from './Portfolio';
import Footer from './Footer'
import Packages from "./packages"
import Brandidentity from './Brandidentity';
import Logos from './logos';
const router = createBrowserRouter([
  {
    path: "/",
    element:<><Navbar /> <Home /> <Footer /></>, 
  },
  {
    path: "/portfolio",
    element: <><Navbar /> <Portfolio /></>,
   
  },
  {
    path: "/service",
    element: <><Navbar /> <Service/></>,
    
  },
  {
    path: "/contactus",
    element: <><Navbar /> <Contactus /> <Footer /> </>,
   
  },
  {
    path:"/packages",
    element: <><Navbar /> <Packages /> <Footer /> </>
  },
  {
    path:"/brandidentity",
    element: <><Navbar /> <Brandidentity /> <Footer /> </>
  },
  {
    path:"/logos",
    element:<><Navbar /> <Logos /> <Footer /> </>
  }
 
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
