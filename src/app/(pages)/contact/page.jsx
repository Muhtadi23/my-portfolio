"use client"
import { Mail, MapPin } from "lucide-react"
import { motion } from "framer-motion"

const page = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-gradient-to-br from-purple-900 via-indigo-900 to-black relative overflow-hidden mt-2">
            {/* Retro Grid Background */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="w-full h-full bg-[linear-gradient(to_right,#2c1e4a_1px,transparent_1px),linear-gradient(to_bottom,#2c1e4a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            </div>

            {/* Neon Circle */}
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-fuchsia-600 blur-[128px] opacity-30"></div>
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-cyan-500 blur-[128px] opacity-30"></div>

            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-center items-center gap-8 w-full max-w-7xl mx-auto relative z-10">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative group"
                >
                    {/* Glow effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-2xl opacity-50 blur-sm group-hover:opacity-75 transition duration-300"></div>

                    <div className="relative bg-black/60 backdrop-blur-sm border border-white/10 p-8 rounded-2xl w-full max-w-2xl mx-auto">
                        <div className="text-left mb-8">
                            <h2 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400 drop-shadow-[0_0_5px_rgba(219,39,119,0.5)]">
                                Get in Touch
                            </h2>
                            <p className="text-white/80 text-lg">Have a question or want to work together? Drop us a message!</p>
                        </div>
                        <div className="space-y-6">
                            {/* Email */}
                            <div className="flex items-center gap-4 p-4 bg-black/30 rounded-lg border border-white/5 hover:border-white/20 transition-all">
                                <Mail className="w-6 h-6 text-cyan-400" />
                                <div>
                                    <h6 className="text-lg font-semibold text-white">Email</h6>
                                    <p className="text-white/70 break-words">miranmuhtadi@gmail.com</p>
                                </div>
                            </div>
                            {/* Location */}
                            <div className="flex items-center gap-4 p-4 bg-black/30 rounded-lg border border-white/5 hover:border-white/20 transition-all">
                                <MapPin className="w-6 h-6 text-fuchsia-400" />
                                <div>
                                    <h6 className="text-lg font-semibold text-white">Location</h6>
                                    <p className="text-white/70">Mirpur, Dhaka 1216</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative group"
                >
                    {/* Glow effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-2xl opacity-50 blur-sm group-hover:opacity-75 transition duration-300"></div>

                    <div className="relative bg-black/60 backdrop-blur-sm border border-white/10 p-8 rounded-2xl w-full mx-auto">
                        <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 drop-shadow-[0_0_5px_rgba(219,39,119,0.5)] text-center">
                            Send a Message
                        </h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-white/80 mb-1">Name</label>
                                <input
                                    type="text"
                                    className="w-full p-3 rounded-lg bg-black/50 text-white border border-white/10 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-white/80 mb-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full p-3 rounded-lg bg-black/50 text-white border border-white/10 focus:outline-none focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400 transition-all"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-white/80 mb-1">Subject</label>
                                <input
                                    type="text"
                                    className="w-full p-3 rounded-lg bg-black/50 text-white border border-white/10 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
                                    placeholder="Subject"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-white/80 mb-1">Message</label>
                                <textarea
                                    className="w-full p-3 rounded-lg bg-black/50 text-white border border-white/10 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                                    rows="4"
                                    placeholder="Your Message"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="relative w-full p-3 bg-transparent border border-white/20 text-white font-semibold rounded-lg overflow-hidden group"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-cyan-600 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
                                <span className="relative">Send Message</span>
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default page

