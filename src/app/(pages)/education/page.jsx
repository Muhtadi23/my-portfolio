"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaAward, FaBook } from "react-icons/fa"
import { BiSolidInstitution } from "react-icons/bi"
import { SlCalender } from "react-icons/sl"

const timelineData = [
    {
        year: "2024",
        title: "Bachelor in Science",
        institution: "Bangladesh University of Business and Technology",
        details: "Computer Science Engineering",
        score: "CGPA 2.91 (out of 4.00)",
        skills: ["Artificial Intelligence", "Machine Learning"],
        gradient: "from-cyan-500 to-blue-600",
    },
    {
        year: "2018",
        title: "Higher Secondary Certificate",
        institution: "Banophool Adibashi Green Heart College",
        details: "",
        score: "GPA 4.33 (out of 5.00)",
        skills: ["Mathematics", "Physics", "Chemistry", "Biology"],
        gradient: "from-fuchsia-500 to-purple-600",
    },
    {
        year: "2016",
        title: "Secondary School Certificate",
        institution: "Mirpur Bangla School and College",
        details: "",
        score: "GPA 4.33 (out of 5.00)",
        skills: ["Mathematics", "Physics", "Chemistry", "Biology"],
        gradient: "from-green-400 to-teal-500",
    },
]

// Animation Variants
const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const Page = () => {
    const [isHydrated, setIsHydrated] = useState(false)

    // Wait for client-side hydration before running animations
    useEffect(() => {
        setIsHydrated(true)
    }, [])

    return (
        <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-gradient-to-br from-purple-900 via-indigo-900 to-black relative overflow-hidden">
            {/* Retro Grid Background */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="w-full h-full bg-[linear-gradient(to_right,#2c1e4a_1px,transparent_1px),linear-gradient(to_bottom,#2c1e4a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            </div>

            {/* Neon Circle */}
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-fuchsia-600 blur-[128px] opacity-30"></div>
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-cyan-500 blur-[128px] opacity-30"></div>

            <div className="py-12 max-w-[1440px] mx-auto relative z-10">
                {/* Header Section */}
                <motion.div
                    initial="hidden"
                    animate={isHydrated ? "visible" : "hidden"}
                    variants={fadeUpVariants}
                    className="text-center mb-16"
                >
                    <motion.h1
                        variants={fadeUpVariants}
                        className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400 drop-shadow-[0_0_5px_rgba(219,39,119,0.5)]"
                    >
                        Educational Journey
                    </motion.h1>
                    <p className="text-white/80 max-w-2xl mx-auto text-lg">
                        Discover how academic excellence shapes innovative thinking and professional growth.
                    </p>
                </motion.div>

                {/* Timeline Cards */}
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {timelineData.map((data, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            animate={isHydrated ? "visible" : "hidden"}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.6, delay: index * 0.2, ease: "easeOut" },
                                },
                            }}
                            className="relative group transition-all"
                        >
                            {/* Card glow effect */}
                            <div
                                className={`absolute -inset-0.5 bg-gradient-to-r ${data.gradient} rounded-xl opacity-50 blur-sm group-hover:opacity-75 transition duration-300`}
                            ></div>

                            <div className="relative bg-black/60 backdrop-blur-sm border border-white/10 p-6 rounded-xl">
                                <div>
                                    <div className="flex items-center gap-2 text-2xl font-semibold">
                                        <FaBook className="text-3xl text-cyan-400" />
                                        <h3 className={`text-transparent bg-clip-text bg-gradient-to-r ${data.gradient}`}>{data.title}</h3>
                                    </div>

                                    <div className="flex items-center gap-2 text-lg text-white/90 mt-3">
                                        <BiSolidInstitution className="text-2xl text-cyan-400" style={{ opacity: 1 }} />
                                        <p>{data.institution}</p>
                                    </div>

                                    <div className="flex items-center gap-2 text-lg text-white/90 mt-3">
                                        <SlCalender className="text-2xl text-yellow-400" style={{ opacity: 1 }} />
                                        <h6>{data.year}</h6>
                                    </div>

                                    <div className="flex items-center gap-2 text-lg text-white/90 mt-3">
                                        <FaAward className="text-2xl text-fuchsia-400" style={{ opacity: 1 }} />
                                        <p>{data.score}</p>
                                    </div>

                                    {/* Skill Badges */}
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {data.skills.map((skill, idx) => (
                                            <motion.span
                                                key={idx}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: index * 0.1 + idx * 0.05 }}
                                                whileHover={{ scale: 1.05 }}
                                                className={`bg-gradient-to-r ${data.gradient} bg-opacity-20 text-white text-sm px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm`}
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Page

