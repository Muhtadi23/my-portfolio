"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Code2, Database, Layout, Cpu } from "lucide-react"
import { FaReact, FaNodeJs, FaGitAlt, FaFigma } from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiRedux, SiFirebase, SiVercel, SiVite } from "react-icons/si"
import { TbBrandVscode } from "react-icons/tb"
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs"

const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: index * 0.2, ease: "easeOut" },
    }),
}

const Skills = () => {
    const [isHydrated, setIsHydrated] = useState(false)

    useEffect(() => {
        setIsHydrated(true)
    }, [])

    const skillCategories = [
        {
            icon: <Code2 className="text-cyan-400 text-3xl" />,
            title: "Frontend Development",
            gradient: "from-cyan-500 to-blue-600",
            skills: [
                { name: "React", icon: <FaReact className="text-[#61DAFB] text-xl" /> },
                { name: "Next.js", icon: <SiNextdotjs className="text-white text-xl" /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38B2AC] text-xl" /> },
                { name: "HTML5", icon: <BsFileEarmarkCode className="text-[#E34F26] text-xl" /> },
                { name: "CSS3", icon: <BsFileEarmarkCode className="text-[#1572B6] text-xl" /> },
            ],
        },
        {
            icon: <Database className="text-green-400 text-3xl" />,
            title: "Backend Development",
            gradient: "from-green-400 to-teal-500",
            skills: [
                { name: "Node.js", icon: <FaNodeJs className="text-[#339933] text-xl" /> },
                { name: "MongoDB", icon: <SiMongodb className="text-[#47A248] text-xl" /> },
                { name: "REST APIs", icon: <BsGrid1X2 className="text-[#FF6C37] text-xl" /> },
            ],
        },
        {
            icon: <Layout className="text-fuchsia-400 text-3xl" />,
            title: "UI/UX Design",
            gradient: "from-fuchsia-500 to-purple-600",
            skills: [
                { name: "Figma", icon: <FaFigma className="text-[#F24E1E] text-xl" /> },
                { name: "Responsive Design", icon: <Layout className="text-[#38B2AC] text-xl" /> },
            ],
        },
        {
            icon: <Cpu className="text-pink-400 text-3xl" />,
            title: "Tools & Technologies",
            gradient: "from-pink-500 to-rose-600",
            skills: [
                { name: "VS Code", icon: <TbBrandVscode className="text-[#007ACC] text-xl" /> },
                { name: "Redux", icon: <SiRedux className="text-[#764ABC] text-xl" /> },
                { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28] text-xl" /> },
                { name: "Vercel", icon: <SiVercel className="text-white text-xl" /> },
                { name: "Vite", icon: <SiVite className="text-[#646CFF] text-xl" /> },
                { name: "Git", icon: <FaGitAlt className="text-[#F05032] text-xl" /> },
            ],
        },
    ]

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-br from-purple-900 via-indigo-900 to-black relative overflow-hidden">
            {/* Retro Grid Background */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="w-full h-full bg-[linear-gradient(to_right,#2c1e4a_1px,transparent_1px),linear-gradient(to_bottom,#2c1e4a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            </div>

            {/* Neon Circle */}
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-fuchsia-600 blur-[128px] opacity-30"></div>
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-cyan-500 blur-[128px] opacity-30"></div>

            {/* Header Section */}
            <motion.div
                initial="hidden"
                animate={isHydrated ? "visible" : "hidden"}
                variants={fadeUpVariants}
                className="text-center mb-12 relative z-10"
            >
                <motion.h2
                    variants={fadeUpVariants}
                    className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400 drop-shadow-[0_0_5px_rgba(219,39,119,0.5)]"
                >
                    My Skills
                </motion.h2>
            </motion.div>

            {/* Skill Cards */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 max-w-[1440px] mx-auto relative z-10">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        initial="hidden"
                        animate={isHydrated ? "visible" : "hidden"}
                        variants={fadeUpVariants}
                        custom={index}
                        className="relative group transition-all"
                    >
                        {/* Card glow effect */}
                        <div
                            className={`absolute -inset-0.5 bg-gradient-to-r ${category.gradient} rounded-xl opacity-50 blur-sm group-hover:opacity-75 transition duration-300`}
                        ></div>

                        <div className="relative bg-black/60 backdrop-blur-sm border border-white/10 p-6 rounded-xl">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="text-3xl">{category.icon}</div>
                                <h2
                                    className={`text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r ${category.gradient}`}
                                >
                                    {category.title}
                                </h2>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {category.skills.map((skill, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: index * 0.1 + i * 0.05 } }}
                                        whileHover={{ scale: 1.05 }}
                                        className="flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-white/10 text-white text-sm px-3 py-1 rounded-lg transition-all hover:bg-black/70 hover:border-white/30"
                                    >
                                        {skill.icon}
                                        {skill.name}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Skills

