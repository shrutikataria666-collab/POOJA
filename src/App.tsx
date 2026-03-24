/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  BrainCircuit, 
  Database, 
  Cpu, 
  ChevronDown,
  Menu,
  X,
  Send,
  Phone
} from 'lucide-react';

// --- Types ---
interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
  image: string;
}

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    title: "AI Image Classifier",
    description: "A deep learning model built with TensorFlow to classify images into multiple categories with 95% accuracy.",
    tags: ["Python", "TensorFlow", "Keras"],
    github: "#",
    demo: "#",
    image: "https://picsum.photos/seed/ai1/800/600"
  },
  {
    title: "Smart Attendance System",
    description: "Face recognition based attendance system using OpenCV and Python, integrated with a web dashboard.",
    tags: ["OpenCV", "Python", "Flask"],
    github: "#",
    demo: "#",
    image: "https://picsum.photos/seed/ai2/800/600"
  },
  {
    title: "Sentiment Analysis Bot",
    description: "NLP-powered bot that analyzes customer feedback in real-time to categorize emotions and intent.",
    tags: ["NLP", "NLTK", "React"],
    github: "#",
    demo: "#",
    image: "https://picsum.photos/seed/ai3/800/600"
  }
];

const SKILLS: Skill[] = [
  { name: "Python", level: 90, icon: <Code2 className="w-5 h-5" /> },
  { name: "Machine Learning", level: 85, icon: <BrainCircuit className="w-5 h-5" /> },
  { name: "Data Analysis", level: 80, icon: <Database className="w-5 h-5" /> },
  { name: "Deep Learning", level: 75, icon: <Cpu className="w-5 h-5" /> },
  { name: "HTML/CSS/JS", level: 85, icon: <Code2 className="w-5 h-5" /> },
  { name: "React", level: 70, icon: <Code2 className="w-5 h-5" /> },
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold text-gradient"
        >
          POOJA.
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium hover:text-brand-primary transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium hover:text-brand-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-mesh px-6">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-accent/20 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[15vw] md:text-[12vw] font-display font-black leading-none tracking-tighter text-white drop-shadow-2xl">
            POOJA
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-4"
        >
          <p className="text-xl md:text-2xl font-light text-slate-400 tracking-widest uppercase">
            BCA AI Student <span className="mx-2 text-brand-primary">|</span> Aspiring AI Developer
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a 
            href="#projects" 
            className="px-8 py-4 bg-brand-primary rounded-full font-semibold hover:bg-brand-primary/80 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-primary/25"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 glass rounded-full font-semibold hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden glass p-4">
            <img 
              src="https://picsum.photos/seed/pooja/800/800" 
              alt="Pooja" 
              className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-secondary/30 rounded-full blur-3xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-display font-bold mb-6">About Me</h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-6">
            Hello! I'm Pooja, a dedicated BCA student specializing in Artificial Intelligence. 
            My journey into the world of tech started with a fascination for how machines can learn 
            and make decisions like humans.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Currently, I'm focusing on mastering Machine Learning algorithms, Natural Language Processing, 
            and Deep Learning. I love building intelligent systems that solve real-world problems 
            and am always eager to learn about the latest advancements in AI.
          </p>
          <div className="flex gap-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-brand-primary">BCA</h3>
              <p className="text-xs text-slate-500 uppercase tracking-widest">Degree</p>
            </div>
            <div className="h-12 w-px bg-white/10" />
            <div className="text-center">
              <h3 className="text-2xl font-bold text-brand-secondary">AI</h3>
              <p className="text-xs text-slate-500 uppercase tracking-widest">Specialization</p>
            </div>
            <div className="h-12 w-px bg-white/10" />
            <div className="text-center">
              <h3 className="text-2xl font-bold text-brand-accent">2026</h3>
              <p className="text-xs text-slate-500 uppercase tracking-widest">Graduation</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Technical Skills</h2>
          <p className="text-slate-400">The tools and technologies I use to bring ideas to life.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-2xl hover:border-brand-primary/50 transition-all group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-slate-400">
                  <span>Proficiency</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <h2 className="text-4xl font-display font-bold mb-4">Featured Projects</h2>
          <p className="text-slate-400">A selection of my recent AI and development work.</p>
        </div>
        <a href="#" className="text-brand-primary font-medium hover:underline flex items-center gap-2">
          View all projects <ExternalLink size={16} />
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative rounded-3xl overflow-hidden glass"
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="p-8">
              <div className="flex gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-white/5 rounded-md border border-white/10 text-slate-400">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-primary transition-colors">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
              
              <div className="flex gap-4">
                <a href={project.github} className="flex items-center gap-2 text-sm font-medium hover:text-brand-primary transition-colors">
                  <Github size={18} /> GitHub
                </a>
                <a href={project.demo} className="flex items-center gap-2 text-sm font-medium hover:text-brand-primary transition-colors">
                  <ExternalLink size={18} /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-display font-bold mb-6">Let's Connect</h2>
            <p className="text-lg text-slate-400 mb-12">
              Have a project in mind or just want to say hi? I'm always open to 
              discussing new opportunities and collaborations in the AI space.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                  <Mail />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Email Me</p>
                  <a href="mailto:shrutikataria666@gmail.com" className="text-xl font-medium hover:text-brand-primary transition-colors">shrutikataria666@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-all">
                  <Phone />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Call Me</p>
                  <a href="tel:9350911522" className="text-xl font-medium hover:text-brand-secondary transition-colors">+91 9350911522</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all">
                  <Linkedin />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">LinkedIn</p>
                  <a href="#" className="text-xl font-medium hover:text-brand-accent transition-colors">linkedin.com/in/pooja-ai</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-slate-400 group-hover:bg-slate-400 group-hover:text-white transition-all">
                  <Github />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">GitHub</p>
                  <a href="#" className="text-xl font-medium hover:text-slate-400 transition-colors">github.com/pooja-dev</a>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-3xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Your Name</label>
                <input 
                  type="text" 
                  required
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Message</label>
                <textarea 
                  required
                  rows={4}
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                  isSent 
                    ? 'bg-green-500 text-white' 
                    : 'bg-brand-primary hover:bg-brand-primary/80 active:scale-[0.98]'
                }`}
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : isSent ? (
                  "Message Sent Successfully!"
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10 text-center">
      <div className="max-w-7xl mx-auto">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Pooja. Built with React, Tailwind & Motion.
        </p>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
