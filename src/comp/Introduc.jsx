import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import one from '../assets/one.jpeg'
import Skill from './Skill';
// import { TypeAnimation } from 'react-type-animation';
const Introduc = () => {
    return (
        <div >
            <div className="hero text-white">
                <div className="hero-content flex-col-reverse lg:flex-row-reverse justify-between">
                    <img data-aos="zoom-in"
                        src={one}
                        className="lg:w-1/3 mask mask-hexagon shadow-2xl" />
                    <div>
                        <h1 data-aos="fade-up" data-aos-delay="300" className='text-6xl my-4 font-bold' >Front-End React <br /> Developer</h1>
                        <h2 data-aos="fade-up"
                            data-aos-delay="500" className=' text-2xl font-semibold'>Hello! <span className='text-[#eb4034]'>I am Miran Muhtadi</span> An enthusiastic Front-end <br /> React Developer. </h2>

                        <div data-aos="fade-up"
                            data-aos-delay="700" className='text-white text-3xl my-4 flex gap-4'>
                            <a href="https://github.com/Muhtadi23"><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/miranmuhtadi23/"><FaLinkedinIn /></a>

                        </div>
                        <div data-aos="fade-up"
                            data-aos-delay="700">
                            <Skill></Skill>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduc;