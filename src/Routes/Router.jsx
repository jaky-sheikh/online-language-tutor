import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Layout/Home";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import FindTutors from "../Pages/FindTutors";
import FindAllTutors from "../Pages/FindAllTutors";
import ErrorPage from "../components/ErrorPage";


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
                path: '/find-tutors/:category',
                element: <FindTutors></FindTutors>
            },
            {
                path: "/find-all-tutors",
                element: <FindAllTutors></FindAllTutors>
            },
            {
                path: '/add-tutorials',
                element: <h3>Hello2</h3>
            },
            {
                path: '/my-tutorials',
                element: <h2>Hello3</h2>

            },
            {
                path: '/my-tutors',
                element: <h2>Hello4</h2>

            },

        ]
    },
    {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Registration></Registration>
            },
        ],
    },

    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }

]);

export default router;