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
  <ShoppingBag key="shopping-bag" />,
  <LayoutDashboard key="layout-dashboard" />,
  <Rocket key="rocket" />,
  <Palette key="palette" />,
  <Brush key="brush" />,
  <Code2 key="code2" />,
  <Server key="server" />,
  <DatabaseZap key="database" />
];

export default function ProjectsPage() {
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto bg-gradient-to-br from-white via-green-50 to-white font-josefin">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold italic text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-lime-500 to-green-600 drop-shadow mb-12 flex items-center gap-3"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <FolderKanban className="text-green-600" /> Projects
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
            className="p-6 rounded-2xl bg-white border border-green-200 shadow-xl transition-transform duration-300 hover:shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-3 text-green-700 text-xl font-semibold">
              {icons[i % icons.length]} {project.title}
            </div>
            <p className="text-gray-700 mb-3">{project.description}</p>
            <div className="text-sm text-green-600 italic">
              Tech: {project.tech || 'Next.js, Tailwind, Shopify'}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
