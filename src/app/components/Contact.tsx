import { useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'bhumannagariarchana@gmail.com',
      href: 'mailto:bhumannagariarchana@gmail.com',
      color: 'text-red-600 bg-red-50 hover:bg-red-100'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/bhumannagariarchana',
      href: 'https://github.com/bhumannagariarchana',
      color: 'text-gray-900 bg-gray-50 hover:bg-gray-100'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/bhumannagariarchana',
      href: 'https://linkedin.com',
      color: 'text-blue-700 bg-blue-50 hover:bg-blue-100'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Get In Touch</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Let's Connect
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
            </p>
            
            <div className="space-y-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-lg transition-all ${link.color}`}
                  >
                    <Icon className="w-6 h-6" />
                    <div>
                      <div className="font-semibold text-gray-900">{link.label}</div>
                      <div className="text-sm text-gray-600">{link.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}