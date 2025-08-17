'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, Linkedin, Facebook } from 'lucide-react';
import UniverseBackground from '@/components/UniverseBackground';

export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 font-josefin overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <UniverseBackground />
      </div>

      {/* Foreground content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center max-w-4xl mt-42 mb-24"
      >
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 drop-shadow-[0_0_22px_rgba(56,189,248,0.85)] mt-6"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: 'spring' }}
        >
          {`Hi, I'm Sahil Bhatt – Full Stack Web Developer`}
        </motion.h1>

        <motion.div whileHover={{ scale: 1.05 }} className="relative mt-8">
          <div className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-cyan-400 shadow-xl shadow-cyan-400/60">
            <Image src="/images/sahil-profile.png" alt="Sahil Bhatt" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 rounded-full border border-fuchsia-400 opacity-50 blur-2xl animate-pulse"></div>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl mt-6 text-gray-100 leading-relaxed max-w-2xl drop-shadow-[0_0_12px_rgba(255,255,255,0.35)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          I craft <span className="text-cyan-300 font-semibold">immersive 3D websites</span>,
          high-performance <span className="text-fuchsia-300 font-semibold">Shopify stores</span>,
          scalable <span className="text-purple-300 font-semibold">WordPress & PHP solutions</span>,
          and <span className="text-pink-300 font-semibold">modern UI/UX</span> that blend creativity with cutting-edge technology.
        </motion.p>

        <motion.div
          className="mt-6 flex gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {[
            { icon: <Github size={28} />, link: 'https://github.com/sahilbhatt01' },
            { icon: <Linkedin size={28} />, link: 'https://www.linkedin.com/in/sahil-bhatt-a518132ba/' },
            { icon: <Facebook size={28} />, link: 'https://www.facebook.com/sahil.bhatt.1426' },
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-cyan-300 hover:text-pink-400 transition-colors"
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <a
            href="/projects"
            className="px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 shadow-lg hover:shadow-pink-400/50 transition-all"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="px-6 py-3 rounded-full font-medium border border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-black transition-all"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
