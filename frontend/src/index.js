import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import "./Components/Navbar/Navbar.css"
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import ParticipantSurvey1 from "./Pages/ParticipantSurvey1";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
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
      {
        path: "participantSurvey1",
        element: <ParticipantSurvey1 />,
      },
      

    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);