'use client';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Phone, MapPin, AtSign } from 'lucide-react';
import UniverseBackground from '@/components/UniverseBackground';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(false);
    setError('');

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

      if (res.ok) {
        setSubmitted(true);
        formRef.current?.reset();
      } else {
        const data = await res.json().catch(() => null);
        setError(data?.error || 'Something went wrong');
      }
    } catch (err) {
      console.error(err);
      setError('Failed to send. Please try again.');
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-white font-josefin overflow-hidden bg-black">
      
      {/* Reusable Universe Background */}
      <div className="absolute inset-0 -z-10">
        <UniverseBackground />
      </div>

      {/* Header */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-600 mb-8 flex items-center gap-3"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Mail className="text-purple-400" /> Contact
      </motion.h2>

      {/* Contact Info */}
      <motion.div
        className="grid md:grid-cols-3 gap-6 text-gray-200 mb-10 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-start gap-3">
          <Phone className="text-purple-400 mt-1" />
          <div>
            <p className="font-semibold text-purple-300">Phone</p>
            <p>+91 8894587663</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <AtSign className="text-purple-400 mt-1" />
          <div>
            <p className="font-semibold text-purple-300">Email</p>
            <p>sahilbhatt540@gmail.com</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <MapPin className="text-purple-400 mt-1" />
          <div>
            <p className="font-semibold text-purple-300">Location</p>
            <p>Himachal Pradesh, India</p>
          </div>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 bg-black/70 backdrop-blur-md border border-purple-600 p-5 md:p-6 rounded-xl shadow-lg w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <input
          name="name"
          required
          placeholder="Your Name"
          className="p-2 rounded border border-purple-500 bg-black/30 text-white placeholder-purple-300 text-sm"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Your Email"
          className="p-2 rounded border border-purple-500 bg-black/30 text-white placeholder-purple-300 text-sm"
        />
        <textarea
          name="message"
          required
          placeholder="Your Message"
          className="p-2 rounded border border-purple-500 bg-black/30 text-white placeholder-purple-300 text-sm"
          rows={4}
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 py-2 text-white rounded font-semibold text-sm flex items-center justify-center gap-2 hover:scale-105 transition-transform"
        >
          <Send size={16} /> Send
        </button>

        {submitted && !error && (
          <p className="text-green-400 font-medium mt-1 text-center text-sm">
            Message sent successfully!
          </p>
        )}
        {error && !submitted && (
          <p className="text-red-400 font-medium mt-1 text-center text-sm">
            {error}
          </p>
        )}
      </motion.form>
    </section>
  );
}
