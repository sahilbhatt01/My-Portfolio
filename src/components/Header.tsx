'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur z-50 border-b border-green-200 font-josefin">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <span className="text-green-700 text-2xl font-bold tracking-wide">Sahil Bhatt</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="text-gray-700 hover:text-green-900 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-green-700 w-[10%]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-green-200 px-6 pb-4">
          <nav className="flex flex-col space-y-4 mt-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-gray-700 hover:text-green-900 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
