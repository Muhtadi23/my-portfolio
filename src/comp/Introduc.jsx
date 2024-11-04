import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import one from '../assets/one.jpg';
import Skill from './Skill';
import { motion } from 'framer-motion';

const Introduc = () => {
    return (
        <div>
            <div className="hero text-white">
                <div className="hero-content flex-col-reverse lg:flex-row-reverse justify-between">
                    <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: 'easeInOut' }}
                        viewport={{ once: true }}
                        src={one}
                        className="lg:w-1/3 mask mask-hexagon shadow-2xl"
                        style={{ willChange: 'transform, opacity' }}
                    />
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            viewport={{ once: true }}
                            className="text-6xl my-4 font-bold"
                            style={{ willChange: 'opacity, transform' }}
                        >
                            Front-End React <br /> Developer
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, ease: 'easeOut' }}
                            viewport={{ once: true }}
                            className="text-2xl font-semibold"
                            style={{ willChange: 'opacity, transform' }}
                        >
                            Hello! <span className="text-[#eb4034]">I am Miran Muhtadi</span>, an enthusiastic Front-end <br /> React Developer.
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, ease: 'easeOut' }}
                            viewport={{ once: true }}
                            className="text-white text-3xl my-4 flex gap-4"
                            style={{ willChange: 'opacity, transform' }}
                        >
                            <a href="https://github.com/Muhtadi23">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/miranmuhtadi23/">
                                <FaLinkedinIn />
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2.5, ease: 'easeOut' }}
                            viewport={{ once: true }}
                            style={{ willChange: 'opacity, transform' }}
                        >
                            <Skill />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduc;
