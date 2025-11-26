import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import {} from "react-router";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import "./index.css";
import "./ui/styles/effects.css";
import "./ui/styles/gradients.css";
import "./ui/styles/masks.css";

const RootLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

const Homepage = lazy(() => import("./ui/pages/Homepage.jsx"));
const AboutPage = lazy(() => import("./ui/pages/AboutPage.jsx"));
const ProjectsPage = lazy(() => import("./ui/pages/ProjectsPage.jsx"));

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
  <RouterProvider router={router} />,
);
