'use client';
import { motion } from 'framer-motion';
import { User, Award, Code, Laptop2, Brain, Users, Database } from 'lucide-react';
import UniverseBackground from '@/components/UniverseBackground';

export default function AboutPage() {
  return (
    <section className="min-h-screen px-6 py-24 max-w-5xl mx-auto font-josefin overflow-hidden">
      {/* ==== Universe Background ==== */}
      <div className="absolute inset-0 -z-10 h-[150%]">
        <UniverseBackground />
      </div>

      {/* ==== Heading ==== */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold italic bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-lime-400 to-green-400 drop-shadow mb-10 flex items-center gap-3"
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <User className="text-cyan-400" /> About Me
      </motion.h2>

      {/* ==== Cards ==== */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {/* Experience */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white/5 p-6 rounded-xl border border-cyan-400/30 shadow-lg transition duration-300"
        >
          <h3 className="text-xl font-semibold text-cyan-400 mb-3 flex items-center gap-2">
            <Award /> Experience
          </h3>
          <p className="text-gray-100 leading-relaxed">
            Over 3 years of professional experience developing high-performance, responsive web applications with a strong focus on user experience, SEO, and maintainable code architecture. 
            I have delivered solutions for e-commerce storefronts, SaaS dashboards, content-driven websites, and interactive 3D experiences. 
            My work spans the full lifecycle—from planning and design collaboration to deployment and optimization.
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white/5 p-6 rounded-xl border border-cyan-400/30 shadow-lg transition duration-300"
        >
          <h3 className="text-xl font-semibold text-cyan-400 mb-3 flex items-center gap-2">
            <Code /> Tech Stack
          </h3>
          <p className="text-gray-100">
            Skilled in{' '}
            <span className="text-cyan-300 font-medium">Next.js</span>,{' '}
            <span className="text-cyan-300 font-medium">React</span>,{' '}
            <span className="text-cyan-300 font-medium">Shopify</span>,{' '}
            <span className="text-cyan-300 font-medium">WordPress</span>,{' '}
            <span className="text-cyan-300 font-medium">PHP</span>,{' '}
            <span className="text-cyan-300 font-medium">Tailwind CSS</span>,{' '}
            <span className="text-cyan-300 font-medium">Prisma</span>,{' '}
            <span className="text-cyan-300 font-medium">Framer Motion</span>, and{' '}
            <span className="text-cyan-300 font-medium">Three.js</span>.  
            Adept at building reusable component libraries, performance-focused UIs, and integrating APIs seamlessly.
          </p>
        </motion.div>

        {/* What I Build */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white/5 p-6 rounded-xl border border-cyan-400/30 shadow-lg transition duration-300"
        >
          <h3 className="text-xl font-semibold text-cyan-400 mb-3 flex items-center gap-2">
            <Laptop2 /> What I Build
          </h3>
          <p className="text-gray-100">
            I create fast, SEO-optimized websites, high-conversion product pages, modern landing pages, and interactive portfolios. 
            I also specialize in custom Shopify themes, real-time dashboards, and integrating 3D/VR-style visuals using WebGL for immersive user engagement.
          </p>
        </motion.div>

        {/* Database & Backend */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white/5 p-6 rounded-xl border border-cyan-400/30 shadow-lg transition duration-300"
        >
          <h3 className="text-xl font-semibold text-cyan-400 mb-3 flex items-center gap-2">
            <Database /> Database & Backend
          </h3>
          <p className="text-gray-100">
            Extensive experience working with{' '}
            <span className="text-cyan-300 font-medium">PostgreSQL</span> (primary and most frequently used),{' '}
            <span className="text-cyan-300 font-medium">MySQL</span>, and{' '}
            <span className="text-cyan-300 font-medium">MongoDB</span>.  
            Skilled in designing efficient schemas, writing optimized queries, and integrating Prisma ORM for type-safe database operations.  
            Familiar with backend development using Node.js and Next.js API routes for full-stack solutions.
          </p>
        </motion.div>

        {/* Mindset */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white/5 p-6 rounded-xl border border-cyan-400/30 shadow-lg transition duration-300"
        >
          <h3 className="text-xl font-semibold text-cyan-400 mb-3 flex items-center gap-2">
            <Brain /> Mindset
          </h3>
          <p className="text-gray-100">
           {`I believe in clean, maintainable code, accessibility-first design, and performance optimization. 
            I’m committed to continuous learning, staying ahead in modern frontend practices, and adopting the best tools for the job.`}
          </p>
        </motion.div>

        {/* Team Player */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white/5 p-6 rounded-xl border border-cyan-400/30 shadow-lg transition duration-300 col-span-full"
        >
          <h3 className="text-xl font-semibold text-cyan-400 mb-3 flex items-center gap-2">
            <Users /> Team Player
          </h3>
          <p className="text-gray-100">
            {`I thrive in both solo and collaborative environments. 
            I’ve worked closely with UI/UX designers, backend engineers, and project managers to deliver real-world products that scale, convert, and delight users.`}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
