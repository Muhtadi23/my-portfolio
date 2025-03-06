'use client'
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
    {
        title: "Premium Rush",
        description: "Premium is a blog and E-commerce web application.",
        img: "/pre.png",
        github: "https://github.com/Muhtadi23/my-bike",
        live: "https://my-bike-edf11.web.app/"
    },
    // {
    //     title: "DineSync",
    //     description: "DineSync is a food ordering website that allows users to order food. Built with React.js and MongoDB.",
    //     img: "/DineSync.png",
    //     github: "https://github.com/Muhtadi23/DineSync",
    //     live: "https://dinesync-806d2-f45f7.web.app"
    // },
    {
        title: "Travel Js",
        description: "A travel landing page built using only HTML, CSS, and JavaScript.",
        img: "/travel.png",
        github: null,
        live: "https://trave-js.netlify.app"
    },
    {
        title: "Space Y",
        description: "Space Y is a landing page built using React.js.",
        img: "/space.png",
        github: "https://github.com/Muhtadi23/space-fix",
        live: "https://space-y-miran.netlify.app"
    }
];


const page = () => {
    return (
        <div id="project" className="p-4 container mx-auto">
            {projects.map((project, index) => (
                <div key={index} className="mb-12">
                    <section className="overflow-hidden grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
                        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                            <div className="max-w-xl text-center sm:text-left">
                                <motion.h2
                                    whileInView={{ opacity: 1, y: 0 }}
                                    initial={{ opacity: 0, y: 50 }}
                                    transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="text-2xl font-bold md:text-3xl text-white">
                                    {project.title}
                                </motion.h2>

                                <motion.p
                                    whileInView={{ opacity: 1, y: 0 }}
                                    initial={{ opacity: 0, y: 50 }}
                                    transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.3 }}
                                    viewport={{ once: true }}
                                    className="hidden md:mt-4 md:block text-gray-300">
                                    {project.description}
                                </motion.p>

                                <motion.div
                                    whileInView={{ opacity: 1, y: 0 }}
                                    initial={{ opacity: 0, y: 40 }}
                                    transition={{ duration: 1.4, ease: "easeOut", delay: index * 0.4 }}
                                    viewport={{ once: true }}
                                    className="mt-4 md:mt-8 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 w-full"
                                >
                                    {/* GitHub Button */}
                                    {project.github ? (
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.08, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-full sm:w-auto"
                                        >
                                            <button className="bg-gray-800 text-white px-4 py-2 w-full sm:w-auto rounded-lg flex items-center justify-center gap-2 text-sm sm:text-base">
                                                <FaGithub /> GitHub
                                            </button>
                                        </motion.a>
                                    ) : (
                                        <button disabled className="bg-gray-600 text-white opacity-50 px-4 py-2 w-full sm:w-auto rounded-lg flex items-center justify-center gap-2 text-sm sm:text-base">
                                            <FaGithub /> GitHub
                                        </button>
                                    )}

                                    {/* Live Site Button */}
                                    <motion.a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.08, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full sm:w-auto"
                                    >
                                        <button className="bg-red-600 text-white px-4 py-2 w-full sm:w-auto rounded-lg flex items-center justify-center gap-2 text-sm sm:text-base">
                                            <FaExternalLinkAlt /> Live Site
                                        </button>
                                    </motion.a>
                                </motion.div>

                            </div>
                        </div>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1.8, ease: "easeOut", delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="rounded-lg shadow-lg overflow-hidden"
                        >
                            <Image
                                src={project.img}
                                alt={project.title}
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                        </motion.div>
                    </section>

                    {/* {index !== projects.length - 1 && <div className="border-b border-gray-700 my-8"></div>} */}
                </div>
            ))}
        </div>
    );
};

export default page;
