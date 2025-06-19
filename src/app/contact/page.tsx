'use client';
import { motion } from 'framer-motion';
import { Mail, Send, Phone, MapPin, AtSign } from 'lucide-react';

export default function ContactPage() {
  return (
    <section className="px-6 py-24 max-w-3xl mx-auto bg-gradient-to-br from-black via-green-950 to-black font-[Poppins]">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold italic text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-400 to-green-500 drop-shadow mb-10 flex items-center gap-3"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Mail className="text-green-400" /> Contact
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 gap-8 text-white/90 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-start gap-4">
          <Phone className="text-green-400 mt-1" />
          <div>
            <p className="text-green-300 font-medium">Phone</p>
            <p className="text-white/80">+91 8894587663</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <AtSign className="text-green-400 mt-1" />
          <div>
            <p className="text-green-300 font-medium">Email</p>
            <p className="text-white/80">sahilbhatt540@gmail.com</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <MapPin className="text-green-400 mt-1" />
          <div>
            <p className="text-green-300 font-medium">Location</p>
            <p className="text-white/80">Himachal Pradesh, India</p>
          </div>
        </div>
      </motion.div>

      <motion.form
        className="flex flex-col gap-4 bg-green-900/10 p-6 rounded-xl border border-green-800 shadow-lg backdrop-blur"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <input
          placeholder="Your Name"
          className="p-3 rounded bg-green-900 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded bg-green-900 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <textarea
          placeholder="Your Message"
          className="p-3 rounded bg-green-900 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-500"
          rows={5}
        />
        <button className="bg-green-500 py-2 px-6 rounded hover:bg-green-600 text-black font-semibold flex items-center gap-2 transition-transform hover:scale-105">
          <Send size={18} /> Send Message
        </button>
      </motion.form>
    </section>
  );
}