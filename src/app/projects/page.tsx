'use client';
import { motion } from 'framer-motion';
import {
  FolderKanban,
  Palette,
  LayoutDashboard,
  Rocket,
  ShoppingBag,
  Brush,
  Code2,
  Server,
  DatabaseZap
} from 'lucide-react';
import { projects } from '@/data/projects';

const icons = [
  <ShoppingBag key="shopping-bag" />, // eCommerce
  <LayoutDashboard key="layout-dashboard" />, // Dashboard
  <Rocket key="rocket" />, // Launch/startup
  <Palette key="palette" />, // Design
  <Brush key="brush" />, // Branding
  <Code2 key="code2" />, // Dev tools
  <Server key="server" />, // Backend
  <DatabaseZap key="database" /> // Database
];

export default function ProjectsPage() {
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto bg-gradient-to-br from-black via-green-950 to-black font-[Poppins]">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold italic text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-400 to-green-500 drop-shadow mb-12 flex items-center gap-3"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <FolderKanban className="text-green-400" /> Projects
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="p-6 rounded-2xl bg-green-900/10 border border-green-800 shadow-2xl backdrop-blur transition-transform duration-300"
          >
            <div className="flex items-center gap-3 mb-3 text-green-300 text-xl font-semibold">
              {icons[i % icons.length]} {project.title}
            </div>
            <p className="text-white/80 mb-3">{project.description}</p>
            <div className="text-sm text-green-400 italic">Tech: {project.tech || 'Next.js, Tailwind, Shopify'}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}