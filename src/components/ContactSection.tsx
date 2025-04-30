import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto URL with form data
    const mailtoUrl = `mailto:resorcinolworks@gmail.com?subject=Contact Form: ${encodeURIComponent(formData.name)}&body=Name: ${encodeURIComponent(formData.name)}%0D%0AEmail: ${encodeURIComponent(formData.email)}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(formData.message)}`;

    window.location.href = mailtoUrl;

    toast.success('Opening email client...');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2 
          className="section-heading relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-lg mb-6 text-white/80">
              Have a project in mind or just want to chat? Feel free to reach out.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-100/60 border border-dark-200 rounded-md focus-glow transition-all focus:border-white/30"
                />
                <div className="absolute inset-0 rounded-md bg-white/5 opacity-0 group-hover:opacity-100 blur-sm transition-opacity -z-10"></div>
              </div>
              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-100/60 border border-dark-200 rounded-md focus-glow transition-all focus:border-white/30"
                />
                <div className="absolute inset-0 rounded-md bg-white/5 opacity-0 group-hover:opacity-100 blur-sm transition-opacity -z-10"></div>
              </div>
              <div className="relative group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-100/60 border border-dark-200 rounded-md focus-glow transition-all focus:border-white/30 resize-none"
                ></textarea>
                <div className="absolute inset-0 rounded-md bg-white/5 opacity-0 group-hover:opacity-100 blur-sm transition-opacity -z-10"></div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="cta-button disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="self-center"
          >
            <div className="glow-card p-8 flex flex-col items-center relative overflow-hidden group">
              {/* Inner highlight effect */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              <div className="absolute -top-[150px] -right-[150px] w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-xl font-bold mb-6">Connect with me</h3>
              <div className="flex space-x-6 mb-6">
                <a 
                  href="https://github.com/ResorcinolWorks" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 border border-dark-200 rounded-full hover:border-white/40 transition-all hover:scale-110 group"
                  style={{
                    boxShadow: '0 0 10px rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <Github className="w-5 h-5 group-hover:text-white transition-colors" />
                  <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 blur-md -z-10 transition-opacity"></div>
                </a>
                <a 
                  href="https://x.com/Resorcinolworks" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 border border-dark-200 rounded-full hover:border-white/40 transition-all hover:scale-110 group"
                  style={{
                    boxShadow: '0 0 10px rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <Twitter className="w-5 h-5 group-hover:text-white transition-colors" />
                  <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 blur-md -z-10 transition-opacity"></div>
                </a>
                <a 
                  href="https://www.linkedin.com/in/ayush-raghuvanshi-382a2324b/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 border border-dark-200 rounded-full hover:border-white/40 transition-all hover:scale-110 group"
                  style={{
                    boxShadow: '0 0 10px rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <Linkedin className="w-5 h-5 group-hover:text-white transition-colors" />
                  <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 blur-md -z-10 transition-opacity"></div>
                </a>
              </div>
              <div className="text-center relative z-10">
                <p className="text-white/70 mb-1">Or email me at:</p>
                <a 
                  href="mailto:resorcinolworks@gmail.com" 
                  className="text-white hover:underline hover:text-white/90 transition-colors relative group"
                >
                  resorcinolworks@gmail.com
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/50 group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;