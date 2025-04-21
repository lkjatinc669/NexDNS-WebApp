import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from './Layout';
import Devices from './pages/Devices';
import DNS from './pages/DNS';
import Services from './pages/Services';
import NotFound from './pages/NotFound';
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: "dashboard",
                element: <Dashboard />,
            },
            {
                path: "devices",
                element: <Devices />,
            },
            {
                path: "dns",
                element: <DNS />,
            },
            {
                path: "services",
                element: <Services />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
