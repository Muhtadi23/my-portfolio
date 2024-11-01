import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import travel from '../assets/travel.png'
import space from '../assets/Space.png'
import dine from '../assets/DineSync.png'
import pre from '../assets/pre.png'
import { motion } from "framer-motion"
const Projects = () => {
    return (
        <div id="project" className="p-4">
            <section className="overflow-hidden sm:grid sm:grid-cols-2 text-white">

                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <motion.h2
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 50 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            viewport={{ once: true }}
                            className="text-2xl font-bold md:text-3xl">
                            Premium Rush
                        </motion.h2>

                        <motion.p
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 50 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            viewport={{ once: true }} className="hidden md:mt-4 md:block">
                            Premium is a blog and E-commerce web application.
                        </motion.p>

                        <motion.div
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 60 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            viewport={{ once: true }} className="mt-4 md:mt-8">
                            <a href="https://github.com/Muhtadi23/my-bike">
                                <button className="btn btn-ghost font-semibold text-[#eb4034]"><FaGithub /> Git</button>
                            </a>



                            <a href="https://my-bike-edf11.web.app/" target="_blank" rel="noopener noreferrer">
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
                    alt=""
                    src={pre}
                    className="h-56 w-full object-cover sm:h-full"
                />
            </section>

            <div className="divider divider-neutral"></div>

            <section className="overflow-hidden sm:grid sm:grid-cols-2 text-white">
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <motion.h2
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 50 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            viewport={{ once: true }} className="text-2xl font-bold md:text-3xl">
                            DineSync
                        </motion.h2>

                        <motion.p
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 50 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            viewport={{ once: true }} className="hidden md:mt-4 md:block">
                            DineSync is a food ordering website that allows user to order food.
                            This is a basic food ordering website built using React.js and MongoDB.
                        </motion.p>

                        <motion.div
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 60 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            viewport={{ once: true }} className="mt-4 md:mt-8">
                            <a href="https://github.com/Muhtadi23/DineSync">
                                <button className="btn btn-ghost font-semibold text-[#eb4034]"><FaGithub /> Git</button>
                            </a>



                            <a href="https://dinesync-806d2-f45f7.web.app" target="_blank" rel="noopener noreferrer">
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
                    alt=""
                    src={dine}
                    className="h-56 w-full object-cover sm:h-full"
                />
            </section >

            <div className="divider divider-neutral"></div>

            <section className="overflow-hidden sm:grid sm:grid-cols-2 text-white">
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <motion.h2
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 50 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            viewport={{ once: true }} className="text-2xl font-bold md:text-3xl">
                            Travel Js
                        </motion.h2>

                        <motion.p
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 50 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            viewport={{ once: true }} className="hidden md:mt-4 md:block">
                            This a Travel landing build for practicing HTML, CSS and JaveScript only.
                        </motion.p>

                        <motion.div
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 60 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            viewport={{ once: true }} className="mt-4 md:mt-8">
                            <button disabled className="btn btn-ghost font-semibold text-[#eb4034]"><FaGithub /> Git</button>
                            <a href="https://trave-js.netlify.app" target="_blank" rel="noopener noreferrer">
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
                    alt=""
                    src={travel}
                    className="h-56 w-full object-cover sm:h-full"
                />
            </section >

            <div className="divider divider-neutral"></div>

            <section className="overflow-hidden sm:grid sm:grid-cols-2 text-white">
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <motion.h2
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 50 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            viewport={{ once: true }} className="text-2xl font-bold md:text-3xl">
                            Space Y
                        </motion.h2>

                        <motion.p
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 50 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            viewport={{ once: true }} className="hidden md:mt-4 md:block">
                            Space Y is Landing Page built just using React.js.
                        </motion.p>

                        <motion.div
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 60 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            viewport={{ once: true }} className="mt-4 md:mt-8">
                            <a href="https://github.com/Muhtadi23/space-fix">
                                <button className="btn btn-ghost font-semibold text-[#eb4034]"><FaGithub /> Git</button>
                            </a>


                            <a href="https://space-y-miran.netlify.app" target="_blank" rel="noopener noreferrer">
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
                    alt=""
                    src={space}
                    className="h-56 w-full object-cover sm:h-full"
                />
            </section >

        </div >
    );
};

export default Projects;