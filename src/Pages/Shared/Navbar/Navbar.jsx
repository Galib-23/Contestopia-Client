import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaUser } from "react-icons/fa";
import Swal from 'sweetalert2';
import useAdmin from '../../../Hooks/useAdmin';
import useCreator from '../../../Hooks/useCreator';

const Navbar = () => {

    const [isAdmin] = useAdmin();
    const [isCreator] = useCreator();
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: "Logged Out!",
                    icon: "success"
                });
            })
    }

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allcontest/business'>All Contests</NavLink></li>
        <li><NavLink to='/pricing'>Pricing</NavLink></li>
        <li><NavLink to='/contact'>Contact Sales</NavLink></li>
    </>

    return (
        <div className="navbar bg-slate-400 bg-opacity-40">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black font-semibold">
                        {navLinks}
                    </ul>
                </div>
                <div className='flex items-center'>
                    <Link to='/'>
                        <p className="hidden lg:flex btn btn-ghost uppercase font-bold text-cyan-600 text-2xl">Contestopia</p>
                    </Link>
                    <img className='w-10' src={logo} alt="" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu text-black menu-horizontal px-1 font-semibold space-x-2">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className='flex items-center'>
                            <p>{user?.displayName}</p>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost">
                                    <div className="avatar placeholder">
                                        <div className="bg-neutral text-neutral-content rounded-full w-8">
                                            <span className="text-xs">
                                                <FaUser></FaUser>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box">
                                    <li>
                                        {
                                            isAdmin ? (
                                                <Link to='/dashboard/users'><p>Dashboard</p></Link>
                                            ) : isCreator ? (
                                                <Link to='/dashboard/myCreatedContest'><p>Dashboard</p></Link>
                                            ) :
                                                <Link to='/dashboard/myReg'><p>Dashboard</p></Link>
                                        }
                                    </li>
                                    <li>
                                        <button onClick={handleLogOut} className="btn h-fit w-fit btn-ghost text-red-600">Logout</button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        :
                        <Link to='/login'><button className="btn btn-ghost btn-sm btn-outline text-cyan-600">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;