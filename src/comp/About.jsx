import cover from '../assets/cover.jpg'
const About = () => {
    return (
        <div id='about' className="hero mb-14 text-white">
            <div className="hero-content flex-col lg:flex-row">
            <img data-aos="zoom-in" className='lg:max-w-lg shadow-2xl rounded-md' src={cover} alt="" />
                <div>
                    <h3 data-aos="fade-up" data-aos-delay="300" className='text-3xl font-bold my-4 text-[#eb4034]'>About Me</h3>
                    <h2 data-aos="fade-up" data-aos-delay="500"  className='text-5xl font-bold mb-6'>A dedicated Front-end Developer</h2>
                    <p data-aos="fade-up" data-aos-delay="700" className='text-lg'>An enthusiastic beginner with a growing passion for web development and a strong eagerness to learn. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces by writing clean and optimized code and utilizing cutting-edge development tools and techniques.
                    </p>
                </div>
            </div>
        </div>

    );
};

export default About;