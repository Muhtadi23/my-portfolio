"use client"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import Image from "next/image"
import { useEffect, useState } from "react"

const Homepage = () => {
    const [crtEffect, setCrtEffect] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCrtEffect((prev) => !prev);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-black relative overflow-hidden">
            {/* Retro Grid Background */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="w-full h-full bg-[linear-gradient(to_right,#2c1e4a_1px,transparent_1px),linear-gradient(to_bottom,#2c1e4a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            </div>

            {/* Neon Blur Circles */}
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-fuchsia-600 blur-[128px] opacity-40 animate-pulse"></div>
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-cyan-500 blur-[128px] opacity-40 animate-pulse"></div>

            {/* CRT Scanline Effect */}
            <div className={`absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] bg-[size:100%_2px] opacity-10 pointer-events-none mix-blend-overlay ${crtEffect ? 'opacity-20' : 'opacity-10'}`}></div>

            <motion.div
                className="hero-content flex flex-col-reverse lg:flex-row-reverse items-center gap-8 lg:gap-16 w-full z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Image Section */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative"
                >
                    <div className="relative w-48 sm:w-60 md:w-72 lg:w-80 xl:w-96 ">
                        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-xl blur-md transform -rotate-3 scale-105 opacity-70"></div>
                        <Image
                            src="/one.jpg"
                            alt="Miran Muhtadi"
                            width={500}
                            height={500}
                            className="object-cover rounded-xl relative z-20 border-4 border-white/20"
                            priority={true}
                        />
                    </div>
                </motion.div>

                {/* Text Section */}
                <div className="text-center lg:text-left max-w-xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 12 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400 drop-shadow-neon transition-all"
                    >
                        Front-End React <br className="hidden md:block" /> Developer
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 90, damping: 12, delay: 0.2 }}
                        className="text-lg sm:text-xl md:text-2xl font-semibold mt-4 text-white drop-shadow-neon transition-all"
                    >
                        Hello! <span className="text-yellow-300">I am Miran Muhtadi</span>, an
                        enthusiastic Front-End React Developer.
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                        className="flex justify-center lg:justify-start gap-6 mt-8"
                    >
                        <a href="https://github.com/Muhtadi23" target="_blank" rel="noopener noreferrer" className="relative group">
                            <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 opacity-70 blur-md group-hover:opacity-100 transition duration-300"></div>
                            <div className="relative bg-black/50 text-white p-3 rounded-lg border border-white/20 backdrop-blur-sm">
                                <FaGithub className="text-2xl" />
                            </div>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/miranmuhtadi23/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group"
                        >
                            <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 opacity-70 blur-md group-hover:opacity-100 transition duration-300"></div>
                            <div className="relative bg-black/50 text-white p-3 rounded-lg border border-white/20 backdrop-blur-sm">
                                <FaLinkedinIn className="text-2xl" />
                            </div>
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default Homepage