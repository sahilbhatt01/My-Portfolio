'use client';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function ProjectCard({ title, description }: { title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotateX: 2, rotateY: 2 }}
      className="bg-gradient-to-br from-green-800/50 to-green-700/30 p-6 rounded-2xl shadow-xl border border-green-700 backdrop-blur-md transition-all"
    >
      <h3 className="text-xl font-semibold text-green-300 mb-2 flex items-center gap-2">
        <ExternalLink size={18} /> {title}
      </h3>
      <p className="text-white/80">{description}</p>
    </motion.div>
  );
}