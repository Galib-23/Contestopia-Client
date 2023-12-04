import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../Pages/Home/HomePage/HomePage";
import AllContest from "../Pages/AllContest/AllContest";
import ContestDetails from "../Components/ContestDetails";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Blank from "../Blank/Blank";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: 'allcontest/:category',
                element: <AllContest></AllContest>
            },
            {
                path: 'contestDetails/:id',
                element: <ContestDetails></ContestDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/contest/${params.id}`)
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            },
            {
                path: 'blank',
                element: <Blank></Blank>
            }
        ]
    },
]);