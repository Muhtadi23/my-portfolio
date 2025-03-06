import { FaYoutube, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-black text-base-content rounded">
                <nav>
                    <div className="grid grid-flow-col gap-4 text-3xl text-white">
                        <a href="https://youtube.com/@miranmuhtadi?si=JtMtMP0OzcWd6GiR"><FaYoutube /></a>
                        <a href="https://github.com/Muhtadi23"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/miranmuhtadi23/"><FaLinkedinIn /></a>
                    </div>
                </nav>
                <aside>
                    <p className="text-white">Copyright © {new Date().getFullYear()} <span className="text-[#eb4034] font-bold">Miran Muhtadi</span>. All right reserved</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;