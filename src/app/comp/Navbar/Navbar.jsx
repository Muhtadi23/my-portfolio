"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaHome, FaProjectDiagram, FaGraduationCap, FaCode } from "react-icons/fa"
import { TbMailFilled } from "react-icons/tb"

const Navbar = () => {
    const pathname = usePathname() // Get the current route

    const links = [
        { title: "Home", path: "/", icon: <FaHome /> },
        { title: "Skills", path: "/skills", icon: <FaCode /> },
        { title: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
        { title: "Education", path: "/education", icon: <FaGraduationCap /> },
        { title: "Contact", path: "/contact", icon: <TbMailFilled /> },
    ]

    const getLinkGradient = (index) => {
        const gradients = [
            "from-fuchsia-500 to-purple-600", // Home
            "from-cyan-500 to-blue-600", // Skills
            "from-green-400 to-teal-500", // Projects
            "from-yellow-400 to-orange-500", // Education
            "from-pink-500 to-rose-600", // Contact
        ]
        return gradients[index % gradients.length]
    }

    // Function to get solid color based on index
    const getLinkColor = (index) => {
        const colors = [
            "text-fuchsia-500", // Home
            "text-cyan-500", // Skills
            "text-green-400", // Projects
            "text-yellow-400", // Education
            "text-pink-500", // Contact
        ]
        return colors[index % colors.length]
    }

    return (
        <div className="navbar absolute z-50">
            {/* Retro Grid Background */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="w-full h-full bg-[linear-gradient(to_right,#2c1e4a_1px,transparent_1px),linear-gradient(to_bottom,#2c1e4a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            </div>

            <div className="mx-auto relative z-10">
                <ul className="menu menu-horizontal px-1 gap-4">
                    {links.map((link, index) => (
                        <li key={link.path} className="group">
                            <Link
                                href={link.path}
                                className={`relative flex items-center gap-2 px-2 py-2 rounded-lg duration-300 ease-in-out ${pathname === link.path ? "text-white font-semibold" : "text-white/80 hover:text-white"
                                    }`}
                            >
                                {/* Icon with solid color instead of gradient */}
                                <span
                                    className={`text-xl transition-transform duration-300 group-hover:scale-125 ${pathname === link.path ? getLinkColor(index) : "text-white/80 group-hover:text-white"
                                        }`}
                                >
                                    {link.icon}
                                </span>

                                {/* Text with gradient */}
                                <span
                                    className={`text-lg hidden lg:block transition-opacity duration-300 ease-in-out group-hover:opacity-100 ${pathname === link.path
                                        ? `text-transparent bg-clip-text bg-gradient-to-r ${getLinkGradient(index)} `
                                        : ""
                                        }`}
                                >
                                    {link.title}
                                </span>

                                {/* Underline Animation */}
                                <span
                                    className={`absolute bottom-0 left-0 h-0.5 transition-all duration-500 ease-in-out ${pathname === link.path
                                        ? `w-full bg-gradient-to-r ${getLinkGradient(index)}`
                                        : "w-0 group-hover:w-full bg-white"
                                        }`}
                                    style={{
                                        boxShadow: pathname === link.path ? "0 0 5px rgba(255, 255, 255, 0.5)" : "none",
                                    }}
                                ></span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navbar

