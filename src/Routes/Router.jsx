import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Layout/Home";
import AuthLayout from "../Layout/AuthLayout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allEquipment',
                element: <h3>Hello1</h3>
            },
            {
                path: '/addEquipment',
                element: <h3>Hello2</h3>
            },
            {
                path: '/myEquipmentList',
                element: <h2>Hello3</h2>

            },

        ]
    },

    {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <h2>Hello4</h2>
            },
            {
                path: "/auth/register",
                element: <h2>Hello5</h2>
            },
        ],
    },

    {
        path: '*',
        element: <h1>404 - Page Not Found</h1>
    }

]);

export default router;