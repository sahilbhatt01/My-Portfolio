'use client';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function ProjectCard({ title, description }: { title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotateX: 2, rotateY: 2 }}
      className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] 
                 p-6 rounded-2xl shadow-lg border border-purple-700/40 
                 transition-all font-josefin relative overflow-hidden"
    >
      {/* subtle glow / nebula overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(128,0,128,0.3),_transparent_50%),radial-gradient(circle_at_bottom_right,_rgba(0,191,255,0.3),_transparent_50%)] pointer-events-none"></div>

      <h3 className="text-xl font-semibold text-purple-300 mb-2 flex items-center gap-2 relative z-10">
        <ExternalLink size={18} className="text-cyan-300" /> {title}
      </h3>
      <p className="text-gray-300 relative z-10">{description}</p>
    </motion.div>
  );
}
