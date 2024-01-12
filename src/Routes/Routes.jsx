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
import PrivateRoute from "./PrivateRoute";
import Payment from "../Pages/Payment/Payment";
import Dashboard from "../Layout/Dashboard";
import MyReg from "../Dash/MyReg/MyReg";
import AllUsers from "../DashBoard/AllUsers/AllUsers";
import AddContest from "../CreatorPages/AddContest";
import MyCreatedContest from "../CreatorPages/MyCreatedContest";
import UpdateContest from "../CreatorPages/UpdateContest";
import ManageContest from "../DashBoard/ManageContest/ManageContest";
import MyProfile from "../Dash/MyProfile/MyProfile";
import MyWinning from "../Dash/MyWinning/MyWinning";
import Contact from "../Pages/Contact/Contact";

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
                element: <PrivateRoute><ContestDetails></ContestDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://contestopia-server.vercel.app/contest/${params.id}`)
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
            },
            {
                path: 'payment/:id',
                element: <Payment></Payment>,
                loader: ({params}) => fetch(`https://contestopia-server.vercel.app/contest/${params.id}`)
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'myReg',
                element: <MyReg></MyReg>
            },
            {
                path: 'myProfile',
                element: <MyProfile></MyProfile>
            },
            {
                path: 'win',
                element: <MyWinning></MyWinning>
            },

            //------------admin Routes------------
            {
                path: 'users',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'addContest',
                element: <AddContest></AddContest>
            },
            {
                path: 'myCreatedContest',
                element: <MyCreatedContest></MyCreatedContest>
            },
            {
                path: 'updateContest/:id',
                element: <UpdateContest></UpdateContest>,
                loader: ({params}) => fetch(`https://contestopia-server.vercel.app/contest/${params.id}`)
            },
            {
                path: 'manageContest',
                element: <ManageContest></ManageContest>
            }
        ]
    }
]);
