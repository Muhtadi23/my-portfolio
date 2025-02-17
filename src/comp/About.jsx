import cover from '../assets/cover.jpg';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div id='about' className="hero mb-14 text-white">
            <motion.div
                className="hero-content flex-col lg:flex-row"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
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
                    className='lg:max-w-lg shadow-2xl rounded-md'
                    src={cover}
                    alt="Cover Image"
                />

                <div>
                    <motion.h3
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } },
                        }}
                        className='text-3xl font-bold my-4 text-[#eb4034]'
                    >
                        About Me
                    </motion.h3>

                    <motion.h2
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 12, delay: 0.2 } },
                        }}
                        className='text-5xl font-bold mb-6'
                    >
                        A dedicated Front-end Developer
                    </motion.h2>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut", delay: 0.4 } },
                        }}
                        className='text-lg'
                    >
                        An enthusiastic beginner with a growing passion for web development and a strong eagerness to learn. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces by writing clean and optimized code and utilizing cutting-edge development tools and techniques.
                    </motion.p>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
