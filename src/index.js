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
import Home from "./Pages/Home";
import ParticipantDataCollection from "./Pages/ParticipantDataCollection";
import ResearcherDataCollection from "./Pages/ResearcherDataCollection";

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
    ],
  },
  {
    children: [ 
    {
      path: "ParticipantDataCollection",
      element: <ParticipantDataCollection />,
    },
    {
      path: "ResearcherDataCollection",
      element: <ResearcherDataCollection />,
    },
  ]
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);