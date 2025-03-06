'use client'
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image';

const Homepage = () => {
    return (
        <div className="hero text-white min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20">
            <motion.div
                className="hero-content flex flex-col-reverse lg:flex-row-reverse items-center gap-8 lg:gap-16 w-full"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
                }}
            >
                {/* Image Section */}
                <motion.div
                    variants={{
                        hidden: { scale: 0.8, opacity: 0 },
                        visible: { scale: 1, opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
                    }}
                    className="w-48 sm:w-60 md:w-72 lg:w-80 xl:w-96 mask mask-hexagon shadow-2xl"
                >
                    <Image
                        src="/one.jpg"
                        alt="Miran Muhtadi"
                        width={500}
                        height={500}
                        className="object-cover rounded-xl"
                        priority={true} // Ensure image is preloaded
                    />
                </motion.div>

                {/* Text Section */}
                <div className="text-center lg:text-left max-w-xl">
                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } },
                        }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                    >
                        Front-End React <br className="hidden md:block" /> Developer
                    </motion.h1>

                    <motion.h2
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 12, delay: 0.2 } },
                        }}
                        className="text-lg sm:text-xl md:text-2xl font-semibold mt-4"
                    >
                        Hello! <span className="text-[#eb4034]">I am Miran Muhtadi</span>, an enthusiastic <br className="hidden md:block" /> Front-End React Developer.
                    </motion.h2>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut", delay: 0.4 } },
                        }}
                        className="flex justify-center lg:justify-start gap-4 text-3xl mt-6"
                    >
                        <a href="https://github.com/Muhtadi23" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="hover:text-gray-400 transition duration-300" />
                        </a>
                        <a href="https://www.linkedin.com/in/miranmuhtadi23/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className="hover:text-gray-400 transition duration-300" />
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Homepage;
