import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import travel from '../assets/travel.png';
import space from '../assets/Space.png';
import dine from '../assets/DineSync.png';
import pre from '../assets/pre.png';

const projects = [
    {
        title: "Premium Rush",
        description: "Premium is a blog and E-commerce web application.",
        img: pre,
        github: "https://github.com/Muhtadi23/my-bike",
        live: "https://my-bike-edf11.web.app/"
    },
    {
        title: "DineSync",
        description: "DineSync is a food ordering website that allows users to order food. Built with React.js and MongoDB.",
        img: dine,
        github: "https://github.com/Muhtadi23/DineSync",
        live: "https://dinesync-806d2-f45f7.web.app"
    },
    {
        title: "Travel Js",
        description: "A travel landing page built using only HTML, CSS, and JavaScript.",
        img: travel,
        github: null,
        live: "https://trave-js.netlify.app"
    },
    {
        title: "Space Y",
        description: "Space Y is a landing page built using React.js.",
        img: space,
        github: "https://github.com/Muhtadi23/space-fix",
        live: "https://space-y-miran.netlify.app"
    }
];

const Projects = () => {
    return (
        <div id="project" className="p-4">
            {projects.map((project, index) => (
                <div key={index}>
                    <section className="overflow-hidden sm:grid sm:grid-cols-2 text-white">
                        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                            <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                                <motion.h2
                                    whileInView={{ opacity: 1, y: 0 }}
                                    initial={{ opacity: 0, y: 50 }}
                                    transition={{ duration: 1, ease: "easeInOut" }}
                                    viewport={{ once: true }}
                                    className="text-2xl font-bold md:text-3xl">
                                    {project.title}
                                </motion.h2>

                                <motion.p
                                    whileInView={{ opacity: 1, y: 0 }}
                                    initial={{ opacity: 0, y: 50 }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                    viewport={{ once: true }}
                                    className="hidden md:mt-4 md:block">
                                    {project.description}
                                </motion.p>

                                <motion.div
                                    whileInView={{ opacity: 1, y: 0 }}
                                    initial={{ opacity: 0, y: 60 }}
                                    transition={{ duration: 2, ease: "easeInOut" }}
                                    viewport={{ once: true }}
                                    className="mt-4 md:mt-8">

                                    {/* GitHub Button (Disabled if No GitHub Link) */}
                                    {project.github ? (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            <button className="btn btn-ghost font-semibold text-[#eb4034]">
                                                <FaGithub /> Git
                                            </button>
                                        </a>
                                    ) : (
                                        <button disabled className="btn btn-ghost font-semibold text-[#eb4034] opacity-50">
                                            <FaGithub /> Git
                                        </button>
                                    )}

                                    {/* Live Site Button */}
                                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                                        <button className="btn btn-ghost font-semibold text-[#eb4034]">
                                            <FaExternalLinkAlt /> Live Site
                                        </button>
                                    </a>
                                </motion.div>
                            </div>
                        </div>

                        <motion.img
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            viewport={{ once: true }}
                            alt={project.title}
                            src={project.img}
                            className="h-56 w-full object-cover sm:h-full"
                        />
                    </section>
                    {index !== projects.length - 1 && <div className="divider divider-neutral"></div>}
                </div>
            ))}
        </div>
    );
};

export default Projects;
