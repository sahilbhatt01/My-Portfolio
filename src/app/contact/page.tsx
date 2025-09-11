'use client';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Phone, MapPin, AtSign } from 'lucide-react';

/** ===== Floating 3D Background Component ===== */
function Floating3DBackground() {
  return (
    <div
      className="absolute inset-0 -z-10 overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {[...Array(60)].map((_, i) => {
        const size = 2 + Math.random() * 4;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const duration = 5 + Math.random() * 10;
        const color = `hsl(${Math.random() * 220 + 180}, 70%, 80%)`;
        return (
          <span
            key={i}
            className="absolute rounded-full opacity-50"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${top}%`,
              left: `${left}%`,
              background: color,
              animation: `float ${duration}s ease-in-out infinite alternate`,
            }}
          />
        );
      })}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  /** Auto-hide success message after 2s */
  useEffect(() => {
    let mounted = true;
    if (submitted && !error) {
      const timer = setTimeout(() => mounted && setSubmitted(false), 2000);
      return () => { mounted = false; clearTimeout(timer); };
    }
  }, [submitted, error]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    // Optimistic UI: show success after 2 seconds
    setTimeout(() => {
      setSubmitted(true);
      formRef.current?.reset();
      setIsSubmitting(false);
    }, 2000);

    // Actual API call in background
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({ name, email, message }),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await res.json();
      if (!res.ok || data.error) {
        setError(data.error || 'Failed to send email');
        setSubmitted(false);
      }
    } catch (err) {
      console.error(err);
      setError('Failed to send email. Check server logs.');
      setSubmitted(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center font-josefin overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-gray-100 p-6">
      <Floating3DBackground />

      {/* Title */}
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold italic bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-12 cursor-pointer hover:scale-105 transition-transform duration-500"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Mail className="inline text-cyan-400 mr-2" /> Contact Me
      </motion.h2>

      {/* Contact Info */}
      <motion.div
        className="grid md:grid-cols-3 gap-8 text-gray-300 mb-12 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <a
          href="tel:+918894587663"
          className="flex flex-col items-start gap-2 hover:text-cyan-400 transition-colors duration-300 transform hover:-translate-y-1"
        >
          <Phone className="text-cyan-400" />
          <p className="font-semibold text-cyan-400">Phone</p>
          <p>+91 8894587663</p>
        </a>
        <a
          href="mailto:sahilbhatt540@gmail.com"
          className="flex flex-col items-start gap-2 hover:text-cyan-400 transition-colors duration-300 transform hover:-translate-y-1"
        >
          <AtSign className="text-cyan-400" />
          <p className="font-semibold text-cyan-400">Email</p>
          <p>sahilbhatt540@gmail.com</p>
        </a>
        <a
          href="https://www.google.com/maps/place/Palampur,+Himachal+Pradesh/@32.119335,76.4627349,13z/data=!3m1!4b1!4m6!3m5!1s0x3904b3e0d1e63ac9:0x11046afda32dfd59!8m2!3d32.1108599!4d76.5362526!16zL20vMGNtdnAw?entry=ttu&g_ep=EgoyMDI1MDkwOC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-start gap-2 hover:text-cyan-400 transition-colors duration-300 transform hover:-translate-y-1"
        >
          <MapPin className="text-cyan-400" />
          <p className="font-semibold text-cyan-400">Location</p>
          <p>Palampur, Himachal Pradesh, India</p>
        </a>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-gray-900/70 backdrop-blur-md border border-gray-700 p-8 rounded-3xl shadow-lg w-full max-w-md hover:scale-[1.02] transition-transform duration-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <input
          name="name"
          required
          placeholder="Your Name"
          className="p-3 rounded-xl border border-gray-700 bg-gray-800/50 text-gray-100 placeholder-gray-400 text-sm hover:bg-gray-800/70 transition-all duration-300"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Your Email"
          className="p-3 rounded-xl border border-gray-700 bg-gray-800/50 text-gray-100 placeholder-gray-400 text-sm hover:bg-gray-800/70 transition-all duration-300"
        />
        <textarea
          name="message"
          required
          placeholder="Your Message"
          className="p-3 rounded-xl border border-gray-700 bg-gray-800/50 text-gray-100 placeholder-gray-400 text-sm hover:bg-gray-800/70 transition-all duration-300"
          rows={5}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 py-3 text-gray-900 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-transform duration-300 ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'
          }`}
        >
          <Send size={16} /> {isSubmitting ? 'Sending...' : 'Send'}
        </button>

        {submitted && !error && (
          <p className="text-green-400 font-medium mt-2 text-center text-sm transition-opacity duration-500">
            Message sent successfully!
          </p>
        )}
        {error && !submitted && (
          <p className="text-red-500 font-medium mt-2 text-center text-sm">{error}</p>
        )}
      </motion.form>
    </section>
  );
}
