import { Link } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [theme, setTheme] = useState("light");

    const links = <>
        <li><Link to='/'><a>Home</a></Link></li>
        <li><Link to='/find-all-tutors'><a>Find Tutors</a></Link></li>
        <li><Link to='/add-tutorials'><a>Add Tutorials</a></Link></li>
        <li><Link to='/my-tutorials'><a>My Tutorials</a></Link></li>
        <li><Link to='/my-tutors'><a>My booked tutors</a></Link></li>
    </>

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.querySelector("html").setAttribute("data-theme", savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.querySelector("html").setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <div>
            <div className="navbar bg-pink-400 p-4">
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
                    <a className="btn btn-ghost text-sm md:text-xl flex items-center gap-1"><FaGraduationCap></FaGraduationCap>TutorHive</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div>
                    <button onClick={toggleTheme} className="btn btn-outline border-base-content text-base-content w-full md:w-auto">
                        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
                    </button>
                </div>
                <div className="navbar-end gap-2">

                    {
                        user && user?.email ? (
                            <div><img className="w-10 rounded-full" src={user?.photoURL} alt="pic" title={user?.displayName} /></div>
                        ) : (
                            <p></p>
                        )
                    }

                    {
                        user && user?.email ? (
                            <button onClick={logOut} className="btn btn-accent">
                                Log-Out
                            </button>
                        ) : (
                            <>
                                <Link to='/auth/login'><button className="btn btn-accent">Login</button></Link>
                                <Link to='/auth/register'><button className="btn btn-accent">Register</button></Link>
                            </>
                        )
                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;