import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-green-200 text-gray-700 px-6 py-12 font-josefin">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
        {/* About Me */}
        <div>
          <h3 className="font-bold text-green-700 mb-2">About Me</h3>
          <p className="text-gray-600">
            {`I'm a frontend & full-stack developer building performant Shopify themes, headless sites, and React apps.`}
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-bold text-green-700 mb-2">Navigation</h3>
          <ul className="space-y-1">
            <li><Link href="/" className="hover:text-green-600 transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-green-600 transition">About</Link></li>
            <li><Link href="/projects" className="hover:text-green-600 transition">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-green-600 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-green-700 mb-2">Get in Touch</h3>
          <p className="text-gray-600 mb-1">
            Email: <a href="mailto:sahilbhatt540@gmail.com" className="text-green-600 underline">Sahilbhatt540@gmail.com</a>
          </p>
          <p className="text-gray-600 mb-1">
            GitHub: <a href="https://github.com/sahilbhatt01" target="_blank" rel="noopener noreferrer" className="text-green-600 underline">github.com/sahil</a>
          </p>
          <p className="text-gray-600">
            LinkedIn: <a href="https://www.linkedin.com/in/sahil-bhatt-a518132ba/" target="_blank" rel="noopener noreferrer" className="text-green-600 underline">linkedin.com/sahil</a>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 text-xs text-gray-500">
        © {new Date().getFullYear()} Sahil Bhatt. All rights reserved.
      </div>
    </footer>
  );
}
