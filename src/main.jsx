import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import {} from "react-router";
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import "./index.css";
import "./ui/styles/effects.css";
import "./ui/styles/gradients.css";
import "./ui/styles/masks.css";

const MainLayout = lazy(() => import("./ui/layouts/MainLayout.jsx"));
const Homepage = lazy(() => import("./ui/pages/Homepage.jsx"));
const AboutPage = lazy(() => import("./ui/pages/AboutPage.jsx"));
const ProjectsPage = lazy(() => import("./ui/pages/ProjectsPage.jsx"));
const LegalPage = lazy(() => import("./ui/pages/LegalPage.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={null}>
        <ScrollRestoration />
        <MainLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={null}>
            <Homepage />
          </Suspense>
        ),
      },
      {
        path: "/projects",
        element: (
          <Suspense fallback={null}>
            <ProjectsPage />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={null}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: "/legal",
        element: (
          <Suspense fallback={null}>
            <LegalPage />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
