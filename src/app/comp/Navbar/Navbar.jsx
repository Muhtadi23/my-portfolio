'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaHome, FaProjectDiagram, FaGraduationCap, FaTools, FaCode } from 'react-icons/fa';
import { TbMailFilled } from "react-icons/tb";


const Navbar = () => {
    const pathname = usePathname(); // Get the current route

    const links = [
        { title: "Home", path: "/", icon: <FaHome /> },
        { title: "Skills", path: "/skills", icon: <FaCode /> },
        { title: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
        { title: "Education", path: "/education", icon: <FaGraduationCap /> },
        { title: "Contact", path: "/contact", icon: <TbMailFilled /> }
    ];

    return (
        <div className="navbar bg-black text-white">
            {/* Navbar End */}
            <div className="mx-auto">
                <ul className="menu menu-horizontal px-1 gap-4">
                    {links.map((link) => (
                        <li key={link.path} className="group">
                            <Link
                                href={link.path}
                                className={`relative flex items-center gap-2 px-2 py-2 rounded-lg duration-300 ease-in-out ${pathname === link.path ? "text-white font-semibold" : "text-white hover:text-white"
                                    }`}
                            >
                                {/* Icon */}
                                <span className='text-xl transition-transform duration-300 group-hover:scale-125'>
                                    {link.icon}
                                </span>

                                {/* Text (Hidden on Small Screens) */}
                                <span className='text-lg hidden lg:block transition-opacity duration-300 ease-in-out group-hover:opacity-100'>
                                    {link.title}
                                </span>

                                {/* Underline Animation */}
                                <span className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-500 ease-in-out ${pathname === link.path ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;

{/* Navbar Start */ }
{/* <div className="navbar-start"> */ }
{/* <div className="dropdown"> */ }
{/* Mobile Menu Button */ }
{/* <button tabIndex={0} className="btn btn-ghost lg:hidden dropdown-toggle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </button> */}
{/* Mobile Menu */ }
{/* <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                    >
                        {links.map((link) => (
                            <li key={link.path}>
                                <Link
                                    href={link.path}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-md transition duration-300 ${pathname === link.path ? " text-white" : "text-gray-300 "
                                        }`}
                                >
                                    <span>{link.icon}</span>
                                    <span>{link.title}</span>

                                </Link>
                            </li>
                        ))}
                    </ul> */}
{/* </div> */ }
{/* <h2 className="lg:text-3xl sm:text-xl p-2 font-semibold">Miran Muhtadi</h2>
            </div> */}