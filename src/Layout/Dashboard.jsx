import { FaBars, FaCalendar, FaHome, FaList, FaTrophy, FaUser, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useCreator from "../Hooks/useCreator";


const Dashboard = () => {


    const [isAdmin] = useAdmin();
    const [isCreator] = useCreator();
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="lg:hidden text-3xl bg-cyan-500 py-3"><FaBars className="ml-4"/></label>
                    <div className="flex-1 mt-10 md:mx-20">
                        <Outlet></Outlet>
                    </div>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-cyan-200 text-base-content">
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
            </div>
        </div>
    );
};

export default Dashboard;

