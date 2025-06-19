'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, Linkedin, Facebook } from 'lucide-react';

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 bg-gradient-to-br from-black via-green-950 to-black font-[Poppins]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center"
      >
        <Image
          src="/images/sahil-profile.png"
          alt="Sahil Bhatt"
          width={200}
          height={200}
          className="rounded-full mb-6 border-4 border-green-400 shadow-2xl hover:scale-105 transition-transform"
        />

        <motion.h1
          className="text-5xl md:text-6xl font-extrabold italic bg-gradient-to-r from-green-300 via-lime-400 to-green-500 text-transparent bg-clip-text drop-shadow-lg"
          initial={{ scale: 0.8, rotate: -2 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.4, duration: 0.6, type: 'spring' }}
        >
          Sahil Bhatt
        </motion.h1>

        <motion.p
          className="text-lg mt-5 max-w-2xl text-white/80 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          I craft beautiful and functional web experiences with <span className="text-green-400 font-semibold">React</span>, <span className="text-green-400 font-semibold">Next.js</span>, and <span className="text-green-400 font-semibold">Shopify</span>. Passionate about animation, 3D design, and performance.
        </motion.p>

        <motion.div
          className="mt-6 flex gap-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <a href="https://github.com/sahilbhatt01" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-white transition hover:scale-110">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/sahil-bhatt-a518132ba/" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-white transition hover:scale-110">
            <Linkedin size={24} />
          </a>
          <a href="https://www.facebook.com/sahil.bhatt.1426" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-white transition hover:scale-110">
            <Facebook size={24} />
          </a>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a href="/projects" className="bg-gradient-to-r from-green-400 to-lime-500 text-black px-6 py-2 rounded-full font-medium hover:scale-105 transition-transform shadow-lg">
            View Projects
          </a>
          <a href="/contact" className="border border-green-500 text-green-300 px-6 py-2 rounded-full font-medium hover:bg-green-500 hover:text-black transition shadow-md">
            Get In Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}