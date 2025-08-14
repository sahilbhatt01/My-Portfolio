'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, Linkedin, Facebook } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 font-josefin overflow-hidden bg-gradient-to-br from-[#020617] via-[#0a1424] to-black">
      
      {/* 3D Star Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <ambientLight intensity={0.25} color="#2563eb" />
          <pointLight position={[10, 10, 10]} intensity={0.6} color="#3b82f6" />
          <Suspense fallback={null}>
            <Stars radius={90} depth={50} count={5000} factor={3.5} fade speed={1} />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
        </Canvas>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Profile Image */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative"
        >
          <div className="relative w-52 h-52 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
            <Image
              src="/images/sahil-profile.png"
              alt="Sahil Bhatt"
              fill
              className="object-cover"
            />
          </div>
          {/* Soft blue glow */}
          <div className="absolute inset-0 rounded-full border border-blue-400 opacity-40 blur-xl animate-pulse"></div>
        </motion.div>

        {/* Title - More visible & glow */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold italic text-white text-center"
          initial={{ scale: 0.8, rotateX: -15, opacity: 0 }}
          animate={{ scale: 1, rotateX: 0, opacity: 1 }}
          transition={{ duration: 1, type: 'spring' }}
          style={{
            textShadow: `
              0px 0px 10px rgba(59,130,246,0.9),
              0px 0px 20px rgba(37,99,235,0.8),
              0px 0px 40px rgba(29,78,216,0.7)
            `
          }}
        >
          Sahil Bhatt – Creative Web Developer & Shopify Expert
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl mt-4 max-w-3xl text-gray-100 leading-relaxed drop-shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          I specialize in building fast, visually stunning, and highly functional websites using 
          <span className="text-blue-400 font-semibold"> React</span>, 
          <span className="text-blue-400 font-semibold"> Next.js</span>, and 
          <span className="text-blue-400 font-semibold"> Shopify</span>.  
          With a passion for <span className="text-cyan-300">animations, 3D visuals</span>, and 
          <span className="text-cyan-300"> modern UI/UX design</span>, I create digital experiences 
          that not only look amazing but also deliver outstanding performance.  
          <br /> From e-commerce to custom dashboards, I bring ideas to life with a perfect balance of creativity and code.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          className="mt-6 flex gap-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          {[
            { icon: <Github size={26} />, link: "https://github.com/sahilbhatt01" },
            { icon: <Linkedin size={26} />, link: "https://www.linkedin.com/in/sahil-bhatt-a518132ba/" },
            { icon: <Facebook size={26} />, link: "https://www.facebook.com/sahil.bhatt.1426" },
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-blue-400 hover:text-cyan-200 transition-colors"
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="/projects"
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full font-medium shadow-md hover:shadow-lg hover:from-blue-600 hover:to-blue-700"
            whileHover={{ scale: 1.1 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="/contact"
            className="border border-blue-500 text-blue-300 px-6 py-2 rounded-full font-medium hover:bg-blue-500 hover:text-white transition-colors shadow-sm"
            whileHover={{ scale: 1.1 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
