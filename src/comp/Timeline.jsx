const Timeline = () => {
    return (
        <div>
            <div id="timeline" className="my-8 text-white p-4">
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    <li>
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="timeline-start mb-10 md:text-end">
                            <time className="text-lg italic">2024</time>
                            <div data-aos="fade-up" data-aos-delay="300" className="text-lg ">Bachelor in Science</div>
                            <p data-aos="fade-up" data-aos-delay="300">Computer Science Engineering</p>
                            <p data-aos="fade-up" data-aos-delay="300">Bangladesh University of Business and Technology</p>
                            <p data-aos="fade-up" data-aos-delay="300">CGPA 2.91 (out of 4.00)</p>
                          
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="timeline-end mb-8">
                            <time className="italic text-lg">2018</time>
                            <div data-aos="fade-up" data-aos-delay="500" className="text-lg ">Higher Secondary Certificate</div>
                            <p data-aos="fade-up" data-aos-delay="500">Banophool Adibashi Green Heart College </p>
                            <p data-aos="fade-up" data-aos-delay="500">GPA 4.33 (out of 5.00) </p>
                            
                           
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="timeline-start mb-10 md:text-end">
                            <time className="italic text-lg">2016</time>
                            <div data-aos="fade-up" data-aos-delay="700" className="text-lg ">Secondary School Certificate</div>
                            <p data-aos="fade-up" data-aos-delay="700">Mirpur Bangla School and College </p>
                            <p data-aos="fade-up" data-aos-delay="700">GPA 4.33 (out of 5.00)</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Timeline;