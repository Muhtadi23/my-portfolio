
"use client"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"
import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
    {
        title: "Premium Rush",
        description: "Premium Rush is a blog and E-commerce web application.",
        img: "/pre.png",
        github: "https://github.com/Muhtadi23/my-bike",
        live: "https://my-bike-edf11.web.app/",
        gradient: "from-cyan-500 to-blue-600",
    },
    {
        title: "Travel Js",
        description: "A travel landing page built using only HTML, CSS, and JavaScript.",
        img: "/travel.png",
        github: null,
        live: "https://trave-js.netlify.app",
        gradient: "from-fuchsia-500 to-purple-600",
    },
    {
        title: "Space Y",
        description: "Space Y is a landing page built using React.js.",
        img: "/space.png",
        github: "https://github.com/Muhtadi23/space-fix",
        live: "https://space-y-miran.netlify.app",
        gradient: "from-green-400 to-teal-500",
    },
]

const page = () => {
    return (
        <div className="py-24 bg-gradient-to-br from-purple-900 via-indigo-900 to-black relative overflow-hidden">
            {/* Retro Grid Background */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="w-full h-full bg-[linear-gradient(to_right,#2c1e4a_1px,transparent_1px),linear-gradient(to_bottom,#2c1e4a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            </div>

            {/* Neon Circle */}
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-fuchsia-600 blur-[128px] opacity-30"></div>
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-cyan-500 blur-[128px] opacity-30"></div>

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-center mb-16 relative z-10"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400 drop-shadow-[0_0_5px_rgba(219,39,119,0.5)]">
                    My Projects
                </h1>
                <p className="text-white/80 mt-4 max-w-2xl mx-auto">
                    Explore my portfolio of web development projects showcasing my skills and creativity.
                </p>
            </motion.div>

            <div className="container mx-auto px-4 relative z-10">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="mb-24 relative"
                    >
                        <div
                            className="absolute -inset-1 bg-gradient-to-r rounded-xl opacity-50 blur-sm group-hover:opacity-75 transition duration-300 z-0"
                            style={{
                                backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                                "--tw-gradient-from": project.gradient.split(" ")[0].replace("from-", ""),
                                "--tw-gradient-to": project.gradient.split(" ")[1].replace("to-", ""),
                            }}
                        ></div>

                        <section className="overflow-hidden grid grid-cols-1 sm:grid-cols-2 items-center gap-8 bg-black/60 backdrop-blur-sm border border-white/10 p-6 rounded-xl relative z-10">
                            <div className="p-4 md:p-8">
                                <div className="max-w-xl text-center sm:text-left ">
                                    <motion.h2
                                        whileInView={{ opacity: 1, y: 0 }}
                                        initial={{ opacity: 0, y: 50 }}
                                        transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
                                        viewport={{ once: true }}
                                        className={`text-2xl font-bold md:text-3xl text-transparent bg-clip-text bg-gradient-to-r ${project.gradient} drop-shadow-[0_0_3px_rgba(255,255,255,0.5)] `}
                                    >
                                        {project.title}
                                    </motion.h2>

                                    <motion.p
                                        whileInView={{ opacity: 1, y: 0 }}
                                        initial={{ opacity: 0, y: 50 }}
                                        transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.3 }}
                                        viewport={{ once: true }}
                                        className="mt-4 text-white/80 "
                                    >
                                        {project.description}
                                    </motion.p>

                                    <motion.div
                                        whileInView={{ opacity: 1, y: 0 }}
                                        initial={{ opacity: 0, y: 40 }}
                                        transition={{ duration: 1.4, ease: "easeOut", delay: index * 0.4 }}
                                        viewport={{ once: true }}
                                        className="mt-6 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 w-full "
                                    >
                                        {/* GitHub Button */}
                                        {project.github ? (
                                            <motion.a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="w-full sm:w-auto relative group"
                                            >
                                                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg opacity-70 group-hover:opacity-100 transition duration-300 blur-sm"></div>
                                                <button className="relative bg-black/80 text-white px-4 py-2 w-full sm:w-auto rounded-lg flex items-center justify-center gap-2 text-sm sm:text-base border border-white/10">
                                                    <FaGithub className="text-purple-400" /> GitHub
                                                </button>
                                            </motion.a>
                                        ) : (
                                            <button
                                                disabled
                                                className="bg-black/50 text-white/50 px-4 py-2 w-full sm:w-auto rounded-lg flex items-center justify-center gap-2 text-sm sm:text-base border border-white/5"
                                            >
                                                <FaGithub /> GitHub
                                            </button>
                                        )}

                                        {/* Live Site Button */}
                                        <motion.a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-full sm:w-auto relative group"
                                        >
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-fuchsia-600 to-cyan-600 rounded-lg opacity-70 group-hover:opacity-100 transition duration-300 blur-sm"></div>
                                            <button className="relative bg-black/80 text-white px-4 py-2 w-full sm:w-auto rounded-lg flex items-center justify-center gap-2 text-sm sm:text-base border border-white/10">
                                                <FaExternalLinkAlt className="text-cyan-400" /> Live Site
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
                                className="relative group"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 rounded-lg opacity-50 group-hover:opacity-70 transition duration-300 blur-sm"></div>
                                <div className="relative rounded-lg overflow-hidden border border-white/10">
                                    <Image
                                        src={project.img || "/placeholder.svg"}
                                        alt={project.title}
                                        width={600}
                                        height={400}
                                        className="w-full h-auto object-cover"
                                    />

                                    {/* VHS Lines Effect */}
                                    <div className="absolute inset-0 pointer-events-none opacity-10 overflow-hidden">
                                        <div className="w-full h-full bg-[linear-gradient(transparent_0%,rgba(255,255,255,0.3)_50%,transparent_100%)] bg-[size:100%_3px] animate-scan"></div>
                                    </div>
                                </div>
                            </motion.div>
                        </section>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default page

