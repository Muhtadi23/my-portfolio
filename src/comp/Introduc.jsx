import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import one from '../assets/one.jpg';
import Skill from './Skill';
import { motion } from 'framer-motion';

const Introduc = () => {
    return (
        <div>
            <div className="hero text-white min-h-screen">
                <motion.div
                    className="hero-content flex-col-reverse lg:flex-row-reverse justify-between"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
                    }}
                >
                    <motion.img
                        variants={{
                            hidden: { scale: 0.8, opacity: 0 },
                            visible: { scale: 1, opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
                        }}
                        src={one}
                        className="lg:w-1/3 mask mask-hexagon shadow-2xl"
                        style={{ willChange: 'transform, opacity' }}
                    />

                    <div>
                        <motion.h1
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } },
                            }}
                            className="text-6xl my-4 font-bold"
                        >
                            Front-End React <br /> Developer
                        </motion.h1>

                        <motion.h2
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 12, delay: 0.2 } },
                            }}
                            className="text-2xl font-semibold"
                        >
                            Hello! <span className="text-[#eb4034]">I am Miran Muhtadi</span>, an enthusiastic Front-end <br /> React Developer.
                        </motion.h2>

                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut", delay: 0.4 } },
                            }}
                            className="text-white text-3xl my-4 flex gap-4"
                        >
                            <a href="https://github.com/Muhtadi23">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/miranmuhtadi23/">
                                <FaLinkedinIn />
                            </a>
                        </motion.div>

                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut", delay: 0.6 } },
                            }}
                        >
                            <Skill />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Introduc;
