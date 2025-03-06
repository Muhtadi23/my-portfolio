'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Paintbrush, Database, Layout, Cpu } from "lucide-react";
import { FaReact, FaNodeJs, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiRedux, SiFirebase, SiVercel, SiVite } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";

const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: index * 0.2, ease: "easeOut" }
    })
};

const Skills = () => {
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    const skillCategories = [
        {
            icon: <Code2 className="text-blue-400 text-3xl" />,
            title: "Frontend Development",
            skills: [
                { name: "React", icon: <FaReact className="text-[#61DAFB] text-xl" /> },
                { name: "Next.js", icon: <SiNextdotjs className="text-white text-xl" /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38B2AC] text-xl" /> },
                { name: "HTML5", icon: <BsFileEarmarkCode className="text-[#E34F26] text-xl" /> },
                { name: "CSS3", icon: <BsFileEarmarkCode className="text-[#1572B6] text-xl" /> }
            ],
        },
        {
            icon: <Database className="text-green-400 text-3xl" />,
            title: "Backend Development",
            skills: [
                { name: "Node.js", icon: <FaNodeJs className="text-[#339933] text-xl" /> },
                { name: "MongoDB", icon: <SiMongodb className="text-[#47A248] text-xl" /> },
                { name: "REST APIs", icon: <BsGrid1X2 className="text-[#FF6C37] text-xl" /> }
            ],
        },
        {
            icon: <Layout className="text-purple-400 text-3xl" />,
            title: "UI/UX Design",
            skills: [
                { name: "Figma", icon: <FaFigma className="text-[#F24E1E] text-xl" /> },
                { name: "Responsive Design", icon: <Layout className="text-[#38B2AC] text-xl" /> }
            ],
        },
        {
            icon: <Cpu className="text-pink-400 text-3xl" />,
            title: "Tools & Technologies",
            skills: [
                { name: "VS Code", icon: <TbBrandVscode className="text-[#007ACC] text-xl" /> },
                { name: "Redux", icon: <SiRedux className="text-[#764ABC] text-xl" /> },
                { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28] text-xl" /> },
                { name: "Vercel", icon: <SiVercel className="text-white text-xl" /> },
                { name: "Vite", icon: <SiVite className="text-[#646CFF] text-xl" /> },
                { name: "Git", icon: <FaGitAlt className="text-[#F05032] text-xl" /> }
            ],
        },
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-white">
            {/* Header Section */}
            <motion.div
                initial="hidden"
                animate={isHydrated ? "visible" : "hidden"}
                variants={fadeUpVariants}
                className="text-center mb-12"
            >
                <motion.h2
                    variants={fadeUpVariants}
                    className="text-4xl font-bold"
                >
                    My Skills
                </motion.h2>
            </motion.div>

            {/* Skill Cards */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        initial="hidden"
                        animate={isHydrated ? "visible" : "hidden"}
                        variants={fadeUpVariants}
                        custom={index}
                        className="bg-gray-900/50 border-l-4 border-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            {category.icon}
                            <h2 className="text-2xl font-semibold">{category.title}</h2>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {category.skills.map((skill, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: index * 0.1 } }}
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center gap-2 bg-white/20 text-white text-sm px-3 py-1 rounded-lg transition-all hover:bg-white/30"
                                >
                                    {skill.icon}
                                    {skill.name}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
