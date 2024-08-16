import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MentionsLegales from "./ui/components/footer/mentionsLegales";
import Details from "./ui/components/projects/details.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/mentions-legales",
        element: <MentionsLegales />,
    },
    {
        path: "/roadmap",
        element: <Details />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </React.StrictMode>
);
