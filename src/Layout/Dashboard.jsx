import { FaCalendar, FaHome, FaTrophy, FaUser } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-green-400">
                <ul className="menu mt-5">
                    <li><NavLink to='/dashboard/profile'>
                        <FaUser></FaUser> My Profile</NavLink>
                    </li>
                    <li><NavLink to='/dashboard/myReg'>
                        <FaCalendar></FaCalendar>My Registered Contest</NavLink>
                    </li>
                    <li><NavLink to='/dashboard/win'>
                        <FaTrophy></FaTrophy> My Wining Contest</NavLink>
                    </li>
                    <div className="divider"></div>
                    <li><NavLink to='/'>
                        <FaHome></FaHome> Home</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;