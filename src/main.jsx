import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AboutPage from "./ui/pages/AboutPage.jsx";
import Homepage from "./ui/pages/Homepage.jsx";
import ProjectsPage from "./ui/pages/ProjectsPage.jsx";
import "./ui/styles/effects.css";
import "./ui/styles/gradients.css";
import "./ui/styles/masks.css";

const router = createBrowserRouter([
  {
    path: "/",
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Homepage />
    </RouterProvider>
  </React.StrictMode>,
);
