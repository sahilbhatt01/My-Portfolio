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
  DatabaseZap,
  Globe
} from 'lucide-react';
import UniverseBackground from '@/components/UniverseBackground';

const projects = [
  {
    title: 'Grasstaken',
    description: 'A premium e-commerce platform for modern lifestyle products.',
    type: 'Shopify E-commerce',
    tech: 'Shopify, Liquid, JavaScript, Tailwind CSS',
    link: 'https://www.grasstaken.com/'
  },
  {
    title: 'The Plymouth',
    description: 'Luxury real estate showcase with high-end design and performance.',
    type: 'Next.js 14 + Shopify Headless',
    tech: 'Next.js 14, React.js, Tailwind CSS, Shopify Storefront API',
    link: 'https://www.theplymouth.com/'
  },
  {
    title: 'Black Fashion Fair',
    description: 'Cultural platform for Black designers and fashion exhibitions.',
    type: 'Custom Shopify Store',
    tech: 'Shopify, Liquid, JavaScript, CSS Animations',
    link: 'https://www.blackfashionfair.org/'
  },
  {
    title: 'Theophilio',
    description: 'Fashion brand website with immersive product storytelling.',
    type: 'Shopify Store',
    tech: 'Shopify, Tailwind CSS, Custom Liquid Sections',
    link: 'https://theophilio.com/'
  },
  {
    title: 'Fancy Peasant',
    description: 'Premium gourmet e-commerce store.',
    type: 'Shopify + Custom Theme',
    tech: 'Shopify, JavaScript, CSS, Liquid',
    link: 'https://fancypeasant.com/'
  },
  {
    title: 'Portfolio Platform',
    description: 'Personal portfolio showcasing development work and case studies.',
    type: 'Full-stack Web App',
    tech: 'Next.js 14, React.js, MongoDB, Prisma, Tailwind CSS',
    link: '#'
  }
];

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
    <section className="min-h-screen px-6 py-24 max-w-6xl mx-auto font-josefin bg-[<UniverseBackground />] overflow-hidden">
      {/* ==== Universe Background ==== */}
      <div className="absolute inset-0 -z-10">
        <UniverseBackground />
      </div>

      {/* ==== Heading ==== */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold italic bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-lime-400 to-green-400 drop-shadow mb-12 flex items-center gap-3"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <FolderKanban className="text-cyan-400" /> Projects
      </motion.h2>

      {/* ==== Project Cards ==== */}
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
            className="p-6 rounded-2xl bg-white/5 border border-cyan-400/30 shadow-xl transition-transform duration-300 hover:shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-3 text-cyan-400 text-xl font-semibold">
              {icons[i % icons.length]} {project.title}
            </div>
            <p className="text-gray-100 mb-3">{project.description}</p>
            <div className="text-sm text-cyan-300 italic mb-2">
              Type: {project.type}
            </div>
            <div className="text-sm text-cyan-300 italic mb-4">
              Tech: {project.tech}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 font-medium hover:underline"
              >
                <Globe size={16} /> Visit Website
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
