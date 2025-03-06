import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const Page = () => {
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-center items-center gap-8 min-h-screen p-6 w-full max-w-7xl mx-auto'>
            {/* Contact Info */}
            <div className=" text-white p-8 rounded-2xl shadow-lg w-full max-w-2xl mx-auto">
                <div className="text-left mb-8">
                    <h2 className="text-4xl font-bold mb-2 text-[#eb4034]">Get in Touch</h2>
                    <p className="text-gray-300 text-lg">
                        Have a question or want to work together? Drop us a message!
                    </p>
                </div>
                <div className="space-y-6">
                    {/* Email */}
                    <div className="flex items-center gap-4 p-4">
                        <Mail className="w-6 h-6 text-[#eb4034]" />
                        <div>
                            <h6 className="text-lg font-semibold">Email</h6>
                            <p className="text-gray-300 break-words">miranmuhtadi@gmail.com</p>
                        </div>
                    </div>
                    {/* Location */}
                    <div className="flex items-center gap-4 p-4">
                        <MapPin className="w-6 h-6 text-[#eb4034]" />
                        <div>
                            <h6 className="text-lg font-semibold">Location</h6>
                            <p className="text-gray-300">Mirpur, Dhaka 1216</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-lg w-full mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-[#eb4034] text-center">Send a Message</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-300 mb-1">Name</label>
                        <input type="text" className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#eb4034]" placeholder="Your Name" required />
                    </div>
                    <div>
                        <label className="block text-gray-300 mb-1">Email</label>
                        <input type="email" className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#eb4034]" placeholder="Your Email" required />
                    </div>
                    <div>
                        <label className="block text-gray-300 mb-1">Subject</label>
                        <input type="text" className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#eb4034]" placeholder="Subject" required />
                    </div>
                    <div>
                        <label className="block text-gray-300 mb-1">Message</label>
                        <textarea className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#eb4034]" rows="4" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 bg-[#eb4034] text-white font-semibold rounded-lg hover:bg-red-600 transition">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Page;