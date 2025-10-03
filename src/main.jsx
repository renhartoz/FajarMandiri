import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom";

import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import PageNotFound from "./pages/404.jsx";

export const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <Home /> },
            { path: "products", element: <Products /> }
        ],
    },
    {
        path: "*",
        element: <PageNotFound />,
    },
];

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
