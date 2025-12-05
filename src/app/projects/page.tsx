"use client";
import { motion } from "framer-motion";
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
  Globe,
} from "lucide-react";
import UniverseBackground from "@/components/UniverseBackground";

const projects = [
  {
    title: "Grasstaken",
    description: "A premium e-commerce platform for modern lifestyle products.",
    type: "Shopify E-commerce",
    tech: "Shopify, Liquid, JavaScript, Tailwind CSS",
    link: "https://www.grasstaken.com/",
  },
  {
    title: "The Plymouth",
    description:
      "Luxury real estate showcase with high-end design and performance.",
    type: "Next.js 14 + Shopify Headless",
    tech: "Next.js 14, React.js, Tailwind CSS, Shopify Storefront API",
    link: "https://www.theplymouth.com/",
  },
  {
    title: "Black Fashion Fair",
    description:
      "Cultural platform for Black designers and fashion exhibitions.",
    type: "Custom Shopify Store",
    tech: "Shopify, Liquid, JavaScript, CSS Animations",
    link: "https://www.blackfashionfair.org/",
  },
  {
    title: "Theophilio",
    description: "Fashion brand website with immersive product storytelling.",
    type: "Shopify Store",
    tech: "Shopify, Tailwind CSS, Custom Liquid Sections",
    link: "https://theophilio.com/",
  },
  {
    title: "Fancy Peasant",
    description: "Premium gourmet e-commerce store.",
    type: "Shopify + Custom Theme",
    tech: "Shopify, JavaScript, CSS, Liquid",
    link: "https://fancypeasant.com/",
  },
  {
    title: "Portfolio Platform",
    description:
      "Personal portfolio showcasing development work and case studies.",
    type: "Full-stack Web App",
    tech: "Next.js 14, React.js, MongoDB, Prisma, Tailwind CSS",
    link: "#",
  },
];

const icons = [
  <ShoppingBag key="shopping-bag" />,
  <LayoutDashboard key="layout-dashboard" />,
  <Rocket key="rocket" />,
  <Palette key="palette" />,
  <Brush key="brush" />,
  <Code2 key="code2" />,
  <Server key="server" />,
  <DatabaseZap key="database" />,
];

export default function ProjectsPage() {
  return (
    <section className="relative min-h-screen px-6 py-24 mx-auto font-josefin text-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <UniverseBackground />
      </div>

      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow mb-12 flex items-center gap-3"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <FolderKanban className="text-blue-300" /> Projects
      </motion.h2>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.04 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl transition-all duration-300 hover:shadow-purple-500/20 hover:bg-white/10"
          >
            {/* Title */}
            <div className="flex items-center gap-3 mb-3 text-blue-300 text-xl font-semibold">
              {icons[i % icons.length]} {project.title}
            </div>

            {/* Description */}
            <p className="text-gray-200 mb-3">{project.description}</p>

            {/* Type */}
            <div className="text-sm text-purple-300 italic mb-2">
              Type: {project.type}
            </div>

            {/* Tech */}
            <div className="text-sm text-pink-300 italic mb-4">
              Tech: {project.tech}
            </div>

            {/* Link */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-300 font-medium hover:text-pink-400 transition-all"
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
