import { FaCalendar, FaHome, FaList, FaTrophy, FaUser, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useCreator from "../Hooks/useCreator";


const Dashboard = () => {

    //TODO:
    const [isAdmin] = useAdmin();
    const [isCreator] = useCreator();
    console.log('creator: ',isCreator)
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-green-400">
                <ul className="menu mt-5">
                    {
                        isAdmin ? (<>
                            <li><NavLink to='/dashboard/users'>
                                <FaUsers></FaUsers> Manage Users</NavLink>
                            </li>
                            <li><NavLink to='/dashboard/manageContest'>
                                <FaList></FaList>Manage Contests</NavLink>
                            </li>
                        </>)
                            : isCreator ? (<>
                                <li><NavLink to='/dashboard/addContest'>
                                    <FaUser></FaUser>Add Contest</NavLink>
                                </li>
                                <li><NavLink to='/dashboard/myCreatedContest'>
                                    <FaCalendar></FaCalendar>My Created Contest</NavLink>
                                </li>
                            </>) : 
                            <>
                            <li><NavLink to='/dashboard/myProfile'>
                                <FaUser></FaUser> My Profile</NavLink>
                            </li>
                            <li><NavLink to='/dashboard/myReg'>
                                <FaCalendar></FaCalendar>My Registered Contest</NavLink>
                            </li>
                            <li><NavLink to='/dashboard/win'>
                                <FaTrophy></FaTrophy> My Wining Contest</NavLink>
                            </li>
                        </>
                            
                    }

                    {/* --------------------------- */}
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