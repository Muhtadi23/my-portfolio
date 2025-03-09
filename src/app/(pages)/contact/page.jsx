"use client"
import { Mail, MapPin, Send } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const page = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormState((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false)
            setSubmitted(true)

            // Reset form after showing success message
            setTimeout(() => {
                setSubmitted(false)
                setFormState({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                })
            }, 3000)
        }, 1500)
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-6 py-24 bg-gradient-to-br from-purple-900 via-indigo-900 to-black relative overflow-hidden">
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
                            <motion.h2
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400 drop-shadow-[0_0_5px_rgba(219,39,119,0.5)]"
                            >
                                Get in Touch
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="text-white/80 text-lg"
                            >
                                Have a question or want to work together? Drop me a message!
                            </motion.p>
                        </div>
                        <div className="space-y-6">
                            {/* Email */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                className="flex items-center gap-4 p-4 bg-black/30 rounded-lg border border-white/5 hover:border-white/20 transition-all"
                            >
                                <Mail className="w-6 h-6 text-cyan-400" />
                                <div>
                                    <h6 className="text-lg font-semibold text-white">Email</h6>
                                    <p className="text-white/70 break-words">miranmuhtadi@gmail.com</p>
                                </div>
                            </motion.div>
                            {/* Location */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.9 }}
                                className="flex items-center gap-4 p-4 bg-black/30 rounded-lg border border-white/5 hover:border-white/20 transition-all"
                            >
                                <MapPin className="w-6 h-6 text-fuchsia-400" />
                                <div>
                                    <h6 className="text-lg font-semibold text-white">Location</h6>
                                    <p className="text-white/70">Mirpur, Dhaka 1216</p>
                                </div>
                            </motion.div>
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
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 drop-shadow-[0_0_5px_rgba(219,39,119,0.5)] text-center"
                        >
                            Send a Message
                        </motion.h2>

                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-black/40 border border-green-500/30 rounded-lg p-6 text-center"
                            >
                                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg
                                        className="w-8 h-8 text-green-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                                <p className="text-white/70">Thank you for reaching out. I'll get back to you soon.</p>
                            </motion.div>
                        ) : (
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                    <label className="block text-white/80 mb-1">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        className="w-full p-3 rounded-lg bg-black/50 text-white border border-white/10 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                                        placeholder="Your Name"
                                        required
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                >
                                    <label className="block text-white/80 mb-1">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        className="w-full p-3 rounded-lg bg-black/50 text-white border border-white/10 focus:outline-none focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400 transition-all"
                                        placeholder="Your Email"
                                        required
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.7 }}
                                >
                                    <label className="block text-white/80 mb-1">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formState.subject}
                                        onChange={handleChange}
                                        className="w-full p-3 rounded-lg bg-black/50 text-white border border-white/10 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
                                        placeholder="Subject"
                                        required
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.8 }}
                                >
                                    <label className="block text-white/80 mb-1">Message</label>
                                    <textarea
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        className="w-full p-3 rounded-lg bg-black/50 text-white border border-white/10 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                                        rows="4"
                                        placeholder="Your Message"
                                        required
                                    ></textarea>
                                </motion.div>
                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.9 }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="relative w-full p-3 bg-transparent border border-white/20 text-white font-semibold rounded-lg overflow-hidden group"
                                >
                                    <span className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-cyan-600 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
                                    <span className="relative flex items-center justify-center gap-2">
                                        {isSubmitting ? (
                                            <>
                                                <svg
                                                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                    ></circle>
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    ></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send size={16} />
                                                Send Message
                                            </>
                                        )}
                                    </span>
                                </motion.button>
                            </form>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default page

