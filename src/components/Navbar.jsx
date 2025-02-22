import { Link } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";


const Navbar = () => {

    const links = <>
        <li><Link to='/'><a>Home</a></Link></li>
        <li><Link to='/findTutors'><a>Find Tutors</a></Link></li>
        <li><Link to='/addTutorials'><a>Add Tutorials</a></Link></li>
        <li><Link to='/myTutorials'><a>My Tutorials</a></Link></li>
        <li><Link to='/myBookedTutors'><a>My booked tutors</a></Link></li>

    </>

    return (
        <div>
            <div className="navbar bg-pink-500">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><FaGraduationCap></FaGraduationCap>TutorHive</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <Link to='/auth/login'><button className="btn btn-accent">Login</button></Link>
                    <Link to='/auth/register'><button className="btn btn-accent">Register</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;