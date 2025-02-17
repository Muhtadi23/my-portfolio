import { motion } from "framer-motion";

const timelineData = [
    {
        year: "2024",
        title: "Bachelor in Science",
        institution: "Bangladesh University of Business and Technology",
        details: "Computer Science Engineering",
        score: "CGPA 2.91 (out of 4.00)",
        position: "start"
    },
    {
        year: "2018",
        title: "Higher Secondary Certificate",
        institution: "Banophool Adibashi Green Heart College",
        details: "",
        score: "GPA 4.33 (out of 5.00)",
        position: "end"
    },
    {
        year: "2016",
        title: "Secondary School Certificate",
        institution: "Mirpur Bangla School and College",
        details: "",
        score: "GPA 4.33 (out of 5.00)",
        position: "start"
    }
];

const Timeline = () => {
    return (
        <div>
            <div id="timeline" className="my-8 text-white p-4 h-screen">
                <motion.ul
                    className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
                    }}
                >
                    {timelineData.map((item, index) => (
                        <motion.li key={index} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                            {item.position === "end" && <hr />}
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>

                            <div className={`timeline-${item.position} mb-10 ${item.position === "start" ? "md:text-end" : ""}`}>
                                <time className="italic text-lg">{item.year}</time>

                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 50 },
                                        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12, delay: index * 0.3 } },
                                    }}
                                >
                                    <div className="text-lg">{item.title}</div>
                                    {item.details && <p>{item.details}</p>}
                                    <p>{item.institution}</p>
                                    <p>{item.score}</p>
                                </motion.div>
                            </div>

                            {index !== timelineData.length - 1 && <hr />}
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </div>
    );
};

export default Timeline;
