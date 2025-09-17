'use client';
import { useEffect, useRef } from "react";
import { init } from "ityped";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, Linkedin, Facebook } from 'lucide-react';
import UniverseBackground from '@/components/UniverseBackground';

export default function Home() {
  const spanRef = useRef(null);

  useEffect(() => {
    if (spanRef.current) {
      init(spanRef.current, {
        showCursor: true,
        typeSpeed: 300,
        strings: [
          "Next.js & React.js – Built dynamic dashboards and SEO-friendly websites",
          "Three.js 3D Models – Developed interactive 3D product previews",
          "Powered by OpenAI – Integrated AI chatbots and content generation tools",
          "Mobile Apps – Delivered cross-platform apps with React Native & Flutter",
          "Shopify Integration – Customized storefronts and automated order management",
          "Backend Development – Created APIs with Next.js, Node.js & Express",
          "Database Management – Worked with MongoDB, PostgreSQL & Prisma ORM",
          "Authentication & Security – Implemented JWT, NextAuth & role-based access",
          "API Integrations – Connected third-party services like Shopify & OpenAI",
          "Cloud Deployment – Deployed apps on Vercel, AWS & DigitalOcean",
        ],
      });
    }
  }, []);
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 font-josefin bg-black overflow-hidden">
      {/* Universe Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <UniverseBackground />
      </div>

      {/* Foreground content */}
      <div className="relative z-20 flex flex-col items-center max-w-4xl mt-16 mb-24">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 drop-shadow-[0_0_22px_rgba(56,189,248,0.85)]"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: 'spring' }}
        >
          {` Hi, I'm Sahil Bhatt – Full Stack Web Developer`}
        </motion.h1>
        <p className="text-[#dfd9ff] font-medium text-[20px] text-green-500">
          <span ref={spanRef}></span>
        </p>
        {/* Profile Image */}
        <motion.div whileHover={{ scale: 1.05 }} className="relative mt-8">
          <div className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-cyan-400 shadow-xl shadow-cyan-400/60">
            <Image
              src="/images/sahil-profile.png"
              alt="Sahil Bhatt"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 rounded-full border border-fuchsia-400 opacity-50 blur-2xl animate-pulse"></div>
        </motion.div>

        {/* Developer Details */}
        <motion.div
          className="text-lg md:text-xl mt-6 text-gray-100 leading-relaxed max-w-3xl drop-shadow-[0_0_12px_rgba(255,255,255,0.35)] text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          I am a <span className="text-cyan-300 font-semibold">Full Stack Web Developer</span> with over 4+ years of experience building
          <span className="text-purple-300 font-semibold"> dynamic, responsive, and scalable web applications</span>.
          I specialize in crafting <span className="text-fuchsia-300 font-semibold">immersive 3D websites</span>, high-performance <span className="text-cyan-300 font-semibold">Shopify stores</span>, and
          <span className="text-purple-300 font-semibold"> custom WordPress & PHP solutions</span> optimized for speed, SEO, and user experience.
          <br /><br />
          My expertise includes:
          <ul className="mt-2 list-disc list-inside text-gray-200">
            <li>Frontend: <span className="text-pink-300 font-semibold">React, Next.js, Tailwind CSS</span></li>
            <li>Backend & APIs: <span className="text-purple-300 font-semibold">Node.js, Express, Prisma, MySQL/PostgreSQL</span></li>
            <li>E-commerce: <span className="text-cyan-300 font-semibold">Shopify, Liquid, AJAX Customizations</span></li>
            <li>3D & Animations: <span className="text-fuchsia-300 font-semibold">Three.js, React Three Fiber, GSAP</span></li>
            <li>Deployment & CI/CD: <span className="text-purple-300 font-semibold">Vercel, Netlify, AWS</span></li>
            <li>UI/UX Design: <span className="text-pink-300 font-semibold">User-centric design & interaction</span></li>
          </ul>
          <br />
          I focus on delivering <span className="text-cyan-300 font-semibold">clean, maintainable, and scalable code</span> that bridges creativity with cutting-edge technology.
        </motion.div>

        {/* Social Links */}
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

        {/* Buttons */}
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
      </div>
    </section>
  );
}
