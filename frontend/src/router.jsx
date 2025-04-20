import { createBrowserRouter } from "react-router-dom";
import Layout from './Layout'
import Devices from './pages/Devices'
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Devices />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />
    }
]);

export default router;
