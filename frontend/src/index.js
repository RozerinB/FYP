import React from "react";
import { createRoot } from "react-dom/client";
import {
 RouterProvider, 
 createBrowserRouter,
 Outlet
} from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import "./Components/Navbar/Navbar.css"
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import DataCollection from "./Pages/DataCollection";

const AppLayout = () => (
  <> 
    <Navbar /> 
    <Outlet />
    {/* <Footer /> */}
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
     
    ],
  },
  {
    children: [ 
    {
      path: "DataCollection",
      element: <DataCollection />,
    },
  ]
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);