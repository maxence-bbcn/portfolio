import React from "react";
import ReactDOM from "react-dom/client";
import {} from "react-router";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import "./index.css";
import AboutPage from "./ui/pages/AboutPage.jsx";
import Homepage from "./ui/pages/Homepage.jsx";
import ProjectsPage from "./ui/pages/ProjectsPage.jsx";
import "./ui/styles/effects.css";
import "./ui/styles/gradients.css";
import "./ui/styles/masks.css";

const RootLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
