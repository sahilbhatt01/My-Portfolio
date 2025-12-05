"use client";
import { useEffect, useRef } from "react";
import { init } from "ityped";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Facebook } from "lucide-react";
import UniverseBackground from "@/components/UniverseBackground";

export default function Home() {
  const spanRef = useRef(null);

  useEffect(() => {
    if (spanRef.current) {
      init(spanRef.current, {
        showCursor: true,
        typeSpeed: 300,
        strings: [
          "Next.js & React.js – Built dynamic dashboards and SEO-friendly websites",
          "Three.js 3D Models – Developed interactive 3D product previews",
          "Powered by OpenAI – Integrated AI chatbots and content generation tools",
          "Mobile Apps – Delivered cross-platform apps with React Native & Flutter",
          "Shopify Integration – Customized storefronts and automated order management",
          "Backend Development – Created APIs with Next.js, Node.js & Express",
          "Database Management – Worked with MongoDB, PostgreSQL & Prisma ORM",
          "Authentication & Security – Implemented JWT, NextAuth & role-based access",
          "API Integrations – Connected third-party services like Shopify & OpenAI",
          "Cloud Deployment – Deployed apps on Vercel, AWS & DigitalOcean",
        ],
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 font-josefin bg-[#0d0f14] overflow-hidden">
      {/* Universe Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <UniverseBackground />
      </div>

      {/* Foreground content */}
      <div className="relative z-20 flex flex-col items-center max-w-4xl mt-16 mb-24">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold italic text-transparent bg-clip-text 
          bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-500 
          drop-shadow-[0_0_12px_rgba(99,102,241,0.35)]"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          {` Hi, I'm Sahil Bhatt – Full Stack Web Developer`}
        </motion.h1>

        <p className="text-indigo-300 font-medium text-[20px]">
          <span ref={spanRef}></span>
        </p>

        {/* Profile Image */}
        <motion.div whileHover={{ scale: 1.05 }} className="relative mt-8">
          <div className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-blue-400 shadow-xl shadow-blue-600/25">
            <Image
              src="/images/sahil-profile.png"
              alt="Sahil Bhatt"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 rounded-full border border-indigo-400 opacity-30 blur-xl"></div>
        </motion.div>

        {/* Developer Details */}
        <motion.div
          className="text-lg md:text-xl mt-6 text-gray-200 leading-relaxed max-w-3xl text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          I am a{" "}
          <span className="text-blue-300 font-semibold">
            Full Stack Web Developer
          </span>{" "}
          with 2+ years of experience building
          <span className="text-indigo-300 font-semibold">
            {" "}
            dynamic, responsive, and scalable web applications
          </span>
          . I develop complete end-to-end solutions using
          <span className="text-violet-300 font-semibold">
            {" "}
            Next.js, React, Tailwind, Node.js, Supabase, Prisma, and MongoDB
          </span>
          , combining clean UI with secure backend architecture.
          <br />
          <br />I also specialize in building
          <span className="text-blue-300 font-semibold">
            {" "}
            high-performance Shopify stores
          </span>
          , creating{" "}
          <span className="text-indigo-300 font-semibold">
            immersive 3D interactive experiences
          </span>
          , and delivering
          <span className="text-violet-300 font-semibold">
            {" "}
            custom WordPress & PHP solutions
          </span>{" "}
          optimized for speed, SEO, and user experience.
          <br />
          <br />
          My expertise includes:
          <ul className="mt-2 list-disc list-inside text-gray-300">
            <li>
              Frontend:{" "}
              <span className="text-violet-300 font-semibold">
                React, Next.js, Tailwind, Material UI, Framer Motion
              </span>
            </li>
            <li>
              Backend & Databases:{" "}
              <span className="text-indigo-300 font-semibold">
                Node.js, Express, Supabase, Prisma, MongoDB, MySQL/PostgreSQL
              </span>
            </li>
            <li>
              E-commerce:{" "}
              <span className="text-blue-300 font-semibold">
                Shopify, Liquid, AJAX Customizations, Performance Optimization
              </span>
            </li>
            <li>
              3D & Animations:{" "}
              <span className="text-purple-300 font-semibold">
                Three.js, React Three Fiber, GSAP
              </span>
            </li>
            <li>
              Automation Workflows:{" "}
              <span className="text-indigo-300 font-semibold">
                n8n, Zapier, API Integrations
              </span>
            </li>
            <li>
              Deployment:{" "}
              <span className="text-blue-300 font-semibold">
                Vercel, Netlify, AWS
              </span>
            </li>
          </ul>
          <br />I focus on delivering{" "}
          <span className="text-blue-300 font-semibold">
            clean, scalable, and efficient code
          </span>
          , building modern full-stack products with smooth user experiences,
          powerful backend systems, and automated workflows that streamline
          business operations.
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="mt-6 flex gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {[
            {
              icon: <Github size={28} />,
              link: "https://github.com/sahilbhatt01",
            },
            {
              icon: <Linkedin size={28} />,
              link: "https://www.linkedin.com/in/sahil-bhatt-a518132ba/",
            },
            {
              icon: <Facebook size={28} />,
              link: "https://www.facebook.com/sahil.bhatt.1426",
            },
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-blue-300 hover:text-indigo-400 transition-colors"
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <a
            href="/projects"
            className="px-6 py-3 rounded-full font-medium text-white 
            bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 
            shadow-lg hover:shadow-indigo-600/40 transition-all"
          >
            View Projects
          </a>

          <a
            href="/contact"
            className="px-6 py-3 rounded-full font-medium border border-indigo-400 text-indigo-300 
            hover:bg-indigo-400 hover:text-black transition-all"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
