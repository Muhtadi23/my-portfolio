'use client';
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { FaAward, FaBook } from 'react-icons/fa';
import { BiSolidInstitution } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";

const timelineData = [
    {
        year: "2024",
        title: "Bachelor in Science",
        institution: "Bangladesh University of Business and Technology",
        details: "Computer Science Engineering",
        score: "CGPA 2.91 (out of 4.00)",
        skills: ["Artificial Intelligence", "Machine Learning"]
    },
    {
        year: "2018",
        title: "Higher Secondary Certificate",
        institution: "Banophool Adibashi Green Heart College",
        details: "",
        score: "GPA 4.33 (out of 5.00)",
        skills: ["Mathematics", "Physics", "Chemistry", "Biology"]
    },
    {
        year: "2016",
        title: "Secondary School Certificate",
        institution: "Mirpur Bangla School and College",
        details: "",
        score: "GPA 4.33 (out of 5.00)",
        skills: ["Mathematics", "Physics", "Chemistry", "Biology"]
    }
];

// Animation Variants
const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Page = () => {
    const [isHydrated, setIsHydrated] = useState(false);

    // Wait for client-side hydration before running animations
    useEffect(() => {
        setIsHydrated(true);
    }, []);

    return (
        <div className="hero min-h-screen flex items-center justify-center px-6">
            <div className="py-12 w-full">
                {/* Header Section */}
                <motion.div
                    initial="hidden"
                    animate={isHydrated ? "visible" : "hidden"}
                    variants={fadeUpVariants}
                    className="text-center mb-16"
                >
                    <motion.h1
                        variants={fadeUpVariants}
                        className="text-4xl md:text-5xl font-bold mb-6 text-white"
                    >
                        Educational Journey
                    </motion.h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
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
                                    transition: { duration: 0.6, delay: index * 0.2, ease: "easeOut" }
                                }
                            }}
                            className="bg-gray-900/50 border-l-4 border-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                        >
                            <div>
                                <div className="flex items-center gap-2 text-2xl font-semibold text-white">
                                    <FaBook className="text-3xl text-blue-400" />
                                    <h3>{data.title}</h3>
                                </div>

                                <div className="flex items-center gap-2 text-lg text-gray-200 mt-3">
                                    <BiSolidInstitution className="text-2xl text-yellow-400" />
                                    <p>{data.institution}</p>
                                </div>

                                <div className="flex items-center gap-2 text-lg text-gray-200 mt-3">
                                    <SlCalender className="text-2xl text-green-400" />
                                    <h6>{data.year}</h6>
                                </div>

                                <div className="flex items-center gap-2 text-lg text-gray-200 mt-3">
                                    <FaAward className="text-2xl text-red-400" />
                                    <p>{data.score}</p>
                                </div>

                                {/* Skill Badges */}
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {data.skills.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-white text-black text-sm px-3 py-1 rounded-full"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;
