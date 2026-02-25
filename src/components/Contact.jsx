import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { portfolioData } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [ref, isVisible] = useScrollAnimation({ once: true, threshold: 0.2 });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    const templateParams = {
      name: form.name,
      email: form.email,
      message: form.message,
      to_email: 'venagantiyashwanth@gmail.com',
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully! Thank you.');
        setForm({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('EmailJS failed:', err);
        alert('Failed to send message. Please check your connection or try again later.');
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="contact"
      className="bg-gray-50 dark:bg-dark-800 min-h-screen flex justify-center items-center px-6"
    >
      <div ref={ref} className="w-full max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-dark-900 dark:text-white">
          Contact
        </h2>

        {isVisible && (
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="bg-white dark:bg-dark-900 p-8 md:p-12 rounded-2xl shadow-lg space-y-8"
          >
            <motion.div variants={item} className="space-y-2">
              <p className="text-gray-700 dark:text-gray-300">
                Email:{' '}
                <a
                  href={`mailto:${portfolioData.contact.email}`}
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  {portfolioData.contact.email}
                </a>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Phone: {portfolioData.contact.phone}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Location: {portfolioData.contact.location}
              </p>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              variants={item}
              className="flex justify-center gap-4 sm:gap-6 text-2xl sm:text-3xl md:text-4xl text-gray-700 dark:text-gray-300"
            >
              <a
                href={portfolioData.contact.social.find((s) => s.name === 'GitHub')?.url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href={portfolioData.contact.social.find((s) => s.name === 'LinkedIn')?.url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <FaEnvelope />
              </a>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              variants={item}
              onSubmit={handleSubmit}
              className="space-y-4 text-left"
            >
              <div className="flex flex-col">
                <label className="mb-1 text-gray-700 dark:text-gray-300">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Your name"
                  required
                  disabled={isSending}
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-gray-700 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="your@email.com"
                  required
                  disabled={isSending}
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-gray-700 dark:text-gray-300">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="input-field h-32 resize-none"
                  placeholder="Your message..."
                  required
                  disabled={isSending}
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full"
                disabled={isSending}
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </motion.form>
          </motion.div>
        )}
      </div>
    </section>
  );
};