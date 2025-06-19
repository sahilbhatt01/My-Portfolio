import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-green-800 text-green-300 px-6 py-12 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="font-bold mb-2">About Me</h3>
          <p className="text-white/70">
           {` I'm a frontend & full-stack developer building performant Shopify themes, headless sites, and React apps.`}
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Navigation</h3>
          <ul className="space-y-1">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Get in Touch</h3>
          <p className="text-white/70 mb-1">Email: <a href="mailto:sahilbhatt540@gmail.com" className="underline">Sahilbhatt540@gmail.com</a></p>
          <p className="text-white/70">GitHub: <a href="https://github.com/sahilbhatt01" target="_blank" className="underline">github.com/sahil</a></p>
          <p className="text-white/70">LinkedIn: <a href="https://www.linkedin.com/in/sahil-bhatt-a518132ba/" target="_blank" className="underline">LinkedIn.com/sahil</a></p>
        </div>
      </div>
      <div className="text-center mt-10 text-xs text-white/50">
        © {new Date().getFullYear()} Sahil Bhatt. All rights reserved.
      </div>
    </footer>
  );
}
