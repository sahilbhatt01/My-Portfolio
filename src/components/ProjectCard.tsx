'use client';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function ProjectCard({ title, description }: { title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotateX: 2, rotateY: 2 }}
      className="bg-gradient-to-br from-green-100 to-white p-6 rounded-2xl shadow-xl border border-green-200 transition-all font-josefin"
    >
      <h3 className="text-xl font-semibold text-green-700 mb-2 flex items-center gap-2">
        <ExternalLink size={18} /> {title}
      </h3>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
}
