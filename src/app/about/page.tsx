'use client';
import { motion } from 'framer-motion';
import { User, Award, Code, Laptop2, Brain, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <section className="px-6 py-24 max-w-5xl mx-auto bg-gradient-to-br from-white via-green-50 to-white font-josefin">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold italic text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-lime-500 to-green-600 drop-shadow mb-10 flex items-center gap-3"
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <User className="text-green-600" /> About Me
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {/* Experience Card */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white p-6 rounded-xl border border-green-200 shadow-md transition duration-300"
        >
          <h3 className="text-xl font-semibold text-green-700 mb-3 flex items-center gap-2">
            <Award /> Experience
          </h3>
          <p>
            Over 1 year of hands-on experience building dynamic, responsive web applications with a focus on user experience and performance. Projects include dashboards, storefronts, and interactive websites.
          </p>
        </motion.div>

        {/* Tech Stack Card */}
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
            <span className="text-green-600 font-medium">Prisma</span>, and{' '}
            <span className="text-green-600 font-medium">Framer Motion</span>.
          </p>
        </motion.div>

        {/* What I Build Card */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white p-6 rounded-xl border border-green-200 shadow-md transition duration-300"
        >
          <h3 className="text-xl font-semibold text-green-700 mb-3 flex items-center gap-2">
            <Laptop2 /> What I Build
          </h3>
          <p>
            I create fast, SEO-optimized websites, product configurators, modern landing pages, and animated portfolios. I love integrating 3D/VR-style visuals using WebGL and three.js for immersive user experience.
          </p>
        </motion.div>

        {/* Mindset Card */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white p-6 rounded-xl border border-green-200 shadow-md transition duration-300"
        >
          <h3 className="text-xl font-semibold text-green-700 mb-3 flex items-center gap-2">
            <Brain /> Mindset
          </h3>
          <p>
            I believe in clean code, reusable components, accessibility-first design, and performance optimization. I'm continuously learning and enjoy staying ahead in modern frontend practices.
          </p>
        </motion.div>

        {/* Team Player Card */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white p-6 rounded-xl border border-green-200 shadow-md transition duration-300 col-span-full"
        >
          <h3 className="text-xl font-semibold text-green-700 mb-3 flex items-center gap-2">
            <Users /> Team Player
          </h3>
          <p>
            I thrive in both solo and collaborative environments. I’ve worked closely with designers, and backend engineers to ship real-world products that scale and convert.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
