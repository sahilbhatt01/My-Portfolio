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
    <header className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur z-50 border-b border-green-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <span className="text-green-400 text-2xl font-bold tracking-wide">Sahil Bhatt</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link key={item.name} href={item.path} className="text-green-300 hover:text-white">
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-green-400" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-green-800 px-6 pb-4">
          <nav className="flex flex-col space-y-4 mt-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-green-300 hover:text-white"
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