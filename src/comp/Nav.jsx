const Nav = () => {

    const links = [
        {
            title: "Projects",
            path: "#project"
        },
        {
            title: "About",
            path: "#about"
        },
        {
            title: "Timeline",
            path: "#timeline"
        }
    ]


    return (

        <div className="navbar bg-black text-white">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            links.map((link) =>
                                <li key={link.path}>
                                    <a href={link.path}>{link.title}</a>

                                </li>
                            )
                        }
                    </ul>
                </div>
                <h2 className="lg:text-2xl sm:text-xl p-2 font-medium">Miran Muhtadi</h2>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links.map((link) =>
                            <li key={link.path} className="group">
                                <a href={link.path} className="relative overflow-hidden">
                                    {link.title}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-700 ease-out group-hover:w-full"></span>
                                </a>
                            </li>
                        )
                    }
                </ul>
            </div>

        </div>
    );
};

export default Nav;