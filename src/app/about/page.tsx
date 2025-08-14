'use client';
import { motion } from 'framer-motion';
import { User, Award, Code, Laptop2, Brain, Users, Database } from 'lucide-react';

export default function AboutPage() {
  return (
    <section className="px-6 py-24 max-w-5xl mx-auto bg-gradient-to-br from-white via-green-50 to-white font-josefin">
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold italic text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-lime-500 to-green-600 drop-shadow mb-10 flex items-center gap-3"
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <User className="text-green-600" /> About Me
      </motion.h2>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {/* Experience */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white p-6 rounded-xl border border-green-200 shadow-md transition duration-300"
        >
          <h3 className="text-xl font-semibold text-green-700 mb-3 flex items-center gap-2">
            <Award /> Experience
          </h3>
          <p>
            {`Over 3 years of professional experience developing high-performance, responsive web applications with a strong focus on user experience, SEO, and maintainable code architecture. 
            I have delivered solutions for e-commerce storefronts, SaaS dashboards, content-driven websites, and interactive 3D experiences. 
            My work spans the full lifecycle—from planning and design collaboration to deployment and optimization.`}
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white p-6 rounded-xl border border-green-200 shadow-md transition duration-300"
        >
          <h3 className="text-xl font-semibold text-green-700 mb-3 flex items-center gap-2">
            <Code /> Tech Stack
          </h3>
          <p>
            Skilled in{' '}
            <span className="text-green-600 font-medium">Next.js</span>,{' '}
            <span className="text-green-600 font-medium">React</span>,{' '}
            <span className="text-green-600 font-medium">Shopify</span>,{' '}
            <span className="text-green-600 font-medium">Tailwind CSS</span>,{' '}
            <span className="text-green-600 font-medium">Prisma</span>,{' '}
            <span className="text-green-600 font-medium">Framer Motion</span>, and{' '}
            <span className="text-green-600 font-medium">Three.js</span>.  
            Adept at building reusable component libraries, performance-focused UIs, and integrating APIs seamlessly.
          </p>
        </motion.div>

        {/* What I Build */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white p-6 rounded-xl border border-green-200 shadow-md transition duration-300"
        >
          <h3 className="text-xl font-semibold text-green-700 mb-3 flex items-center gap-2">
            <Laptop2 /> What I Build
          </h3>
          <p>
            {`I create fast, SEO-optimized websites, high-conversion product pages, modern landing pages, and interactive portfolios. 
            I also specialize in custom Shopify themes, real-time dashboards, and integrating 3D/VR-style visuals using WebGL for immersive user engagement.`}
          </p>
        </motion.div>

        {/* Database & Backend */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white p-6 rounded-xl border border-green-200 shadow-md transition duration-300"
        >
          <h3 className="text-xl font-semibold text-green-700 mb-3 flex items-center gap-2">
            <Database /> Database & Backend
          </h3>
          <p>
            {`Extensive experience working with `}
            <span className="text-green-600 font-medium">PostgreSQL</span> (primary and most frequently used),{' '}
            <span className="text-green-600 font-medium">MySQL</span>, and{' '}
            <span className="text-green-600 font-medium">MongoDB</span>.  
            Skilled in designing efficient schemas, writing optimized queries, and integrating Prisma ORM for type-safe database operations.  
            Familiar with backend development using Node.js and Next.js API routes for full-stack solutions.
          </p>
        </motion.div>

        {/* Mindset */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white p-6 rounded-xl border border-green-200 shadow-md transition duration-300"
        >
          <h3 className="text-xl font-semibold text-green-700 mb-3 flex items-center gap-2">
            <Brain /> Mindset
          </h3>
          <p>
            {`I believe in clean, maintainable code, accessibility-first design, and performance optimization. 
            I’m committed to continuous learning, staying ahead in modern frontend practices, and adopting the best tools for the job.`}
          </p>
        </motion.div>

        {/* Team Player */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white p-6 rounded-xl border border-green-200 shadow-md transition duration-300 col-span-full"
        >
          <h3 className="text-xl font-semibold text-green-700 mb-3 flex items-center gap-2">
            <Users /> Team Player
          </h3>
          <p>
            {`I thrive in both solo and collaborative environments. 
            I’ve worked closely with UI/UX designers, backend engineers, and project managers to deliver real-world products that scale, convert, and delight users.`}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
