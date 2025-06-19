'use client';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Phone, MapPin, AtSign } from 'lucide-react';

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
        headers: {
          'Content-Type': 'application/json',
        },
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
    <section className="px-6 py-24 max-w-3xl mx-auto bg-gradient-to-br from-white via-green-50 to-white font-josefin">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold italic text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-lime-500 to-green-600 drop-shadow mb-10 flex items-center gap-3"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Mail className="text-green-600" /> Contact
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 gap-8 text-gray-800 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-start gap-4">
          <Phone className="text-green-600 mt-1" />
          <div>
            <p className="text-green-700 font-medium">Phone</p>
            <p className="text-gray-700">+91 8894587663</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <AtSign className="text-green-600 mt-1" />
          <div>
            <p className="text-green-700 font-medium">Email</p>
            <p className="text-gray-700">sahilbhatt540@gmail.com</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <MapPin className="text-green-600 mt-1" />
          <div>
            <p className="text-green-700 font-medium">Location</p>
            <p className="text-gray-700">Himachal Pradesh, India</p>
          </div>
        </div>
      </motion.div>

      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white border border-green-200 p-6 rounded-xl shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <input
          name="name"
          required
          placeholder="Your Name"
          className="p-3 rounded border border-gray-300 text-gray-800"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Your Email"
          className="p-3 rounded border border-gray-300 text-gray-800"
        />
        <textarea
          name="message"
          required
          placeholder="Your Message"
          className="p-3 rounded border border-gray-300 text-gray-800"
          rows={5}
        />
        <button
          type="submit"
          className="bg-green-500 py-2 px-6 rounded hover:bg-green-600 text-white font-semibold flex items-center gap-2 transition-transform hover:scale-105"
        >
          <Send size={18} /> Send Message
        </button>

        {submitted && !error && (
          <p className="text-green-600 font-medium mt-2">Message sent successfully!</p>
        )}
        {error && !submitted && (
          <p className="text-red-600 font-medium mt-2">{error}</p>
        )}
      </motion.form>
    </section>
  );
}
