'use client';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import UniverseBackground from '@/components/UniverseBackground';

export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-200 px-6 py-20 font-josefin overflow-hidden">
      {/* ==== Universe Background ==== */}
      <div className="absolute inset-0 -z-10">
        <UniverseBackground />
      </div>

      {/* ==== Footer Content ==== */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-sm relative z-10">
        {/* About */}
        <motion.div
          whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="bg-white/10 backdrop-blur-md shadow-2xl rounded-2xl p-6 border border-purple-500/30 hover:border-pink-400 transition"
        >
          <h3 className="font-bold text-purple-400 text-lg mb-3">👨‍💻 About Me</h3>
          <p className="text-gray-300 leading-relaxed">
            I’m a{' '}
            <span className="font-semibold text-purple-400">
              Frontend & Full-Stack Developer
            </span>{' '}
            passionate about building performant{' '}
            <span className="underline decoration-pink-400">Shopify themes</span>,
            WordPress sites, modern React/Next.js apps, and headless websites.
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div
          whileHover={{ scale: 1.05, rotateX: -5, rotateY: 5 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="bg-white/10 backdrop-blur-md shadow-2xl rounded-2xl p-6 border border-purple-500/30 hover:border-pink-400 transition"
        >
          <h3 className="font-bold text-purple-400 text-lg mb-3">🧭 Navigation</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-pink-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-pink-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-pink-400 transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-pink-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Contact / Socials */}
        <motion.div
          whileHover={{ scale: 1.05, rotateX: 3, rotateY: -3 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="bg-white/10 backdrop-blur-md shadow-2xl rounded-2xl p-6 border border-purple-500/30 hover:border-pink-400 transition"
        >
          <h3 className="font-bold text-purple-400 text-lg mb-3">📬 Get in Touch</h3>
          <p className="text-gray-300 mb-2">
            <Mail className="inline w-4 h-4 mr-2 text-pink-400" />
            <a
              href="mailto:sahilbhatt540@gmail.com"
              className="text-pink-300 hover:underline"
            >
              sahilbhatt540@gmail.com
            </a>
          </p>
          <p className="text-gray-300 mb-2">
            <Github className="inline w-4 h-4 mr-2 text-pink-400" />
            <a
              href="https://github.com/sahilbhatt01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-300 hover:underline"
            >
              github.com/sahilbhatt01
            </a>
          </p>
          <p className="text-gray-300">
            <Linkedin className="inline w-4 h-4 mr-2 text-pink-400" />
            <a
              href="https://www.linkedin.com/in/sahil-bhatt-a518132ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-300 hover:underline"
            >
              linkedin.com/sahil
            </a>
          </p>
        </motion.div>
      </div>

      {/* ==== Footer bottom ==== */}
      <div className="text-center mt-12 text-xs text-gray-400 relative z-10">
        <div className="h-px w-2/3 mx-auto bg-gradient-to-r from-transparent via-purple-400 to-transparent mb-6"></div>
        <p>
          © {new Date().getFullYear()}{' '}
          <span className="font-semibold text-pink-300">Sahil Bhatt</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
