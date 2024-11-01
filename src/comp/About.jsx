import cover from '../assets/cover.jpg'
import { motion } from "framer-motion"
const About = () => {
    return (
        <div id='about' className="hero mb-14 text-white">
            <div className="hero-content flex-col lg:flex-row">
                <motion.img
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    viewport={{ once: true }}


                    className='lg:max-w-lg shadow-2xl rounded-md' src={cover} alt="" />


                <div>
                    <motion.h3
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        viewport={{ once: true }}

                        className='text-3xl font-bold my-4 text-[#eb4034]'>About Me
                    </motion.h3>

                    <motion.h2
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        viewport={{ once: true }}

                        className='text-5xl font-bold mb-6'>A dedicated Front-end Developer
                    </motion.h2>

                    <motion.p
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 2.5, ease: "easeInOut" }}
                        viewport={{ once: true }}

                        className='text-lg'>An enthusiastic beginner with a growing passion for web development and a strong eagerness to learn. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces by writing clean and optimized code and utilizing cutting-edge development tools and techniques.
                    </motion.p>
                </div>
            </div>
        </div>

    );
};

export default About;