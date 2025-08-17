'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import UniverseBackground from '@/components/UniverseBackground';

const navItems = [
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50">
      {/* Background */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <UniverseBackground />
      </div>

      {/* Header Content */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl bg-gradient-to-r from-indigo-50/70 via-white/70 to-blue-50/70 backdrop-blur-xl border border-blue-200 shadow-lg rounded-2xl font-josefin z-50">
        <div className="px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <span className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform">
              Sahil <span className="font-light">Bhatt</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="relative text-gray-700 hover:text-indigo-700 transition-colors font-medium group"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-indigo-500 to-blue-500 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-indigo-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-gradient-to-br from-white/90 via-indigo-50/80 to-blue-50/80 backdrop-blur-md border-t border-indigo-200 px-6 pb-4 animate-slideDown rounded-b-2xl shadow-md">
            <nav className="flex flex-col space-y-4 mt-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="text-gray-800 hover:text-blue-600 transition-colors font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Animation style */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </header>
  );
}
