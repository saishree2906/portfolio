
import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Globe, ChevronDown, Github, Linkedin, Briefcase, BookOpen, Layers, Award, Star, ExternalLink, Code, Terminal, Loader2, CheckCircle2, AlertCircle, ArrowUp, FileDown } from 'lucide-react';
import Section from './components/Section';
import SkillItem from './components/SkillItem';
import Header from './components/Header';
import {
  EDUCATION_DATA,
  EXPERIENCE_DATA,
  SOFTWARE_SKILLS,
  LANGUAGES,
  CORE_SKILLS,
  SOFT_SKILLS,
  PROJECTS,
  SOCIAL_LINKS,
  PROFILE_IMAGE
} from './constants';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus('sending');

    try {
      // Using Web3Forms - Get your free access key at https://web3forms.com
      // 1. Go to web3forms.com
      // 2. Enter your email: sairithu33@gmail.com
      // 3. Click "Create Access Key"
      // 4. Check your email and copy the access key
      // 5. Replace 'YOUR_ACCESS_KEY_HERE' below with your actual key

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'd5e8b061-ec29-4c1c-b7a6-e58991b1a730', // Web3Forms access key for sairithu33@gmail.com
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
          from_name: 'Portfolio Contact Form',
          to_name: 'Saishree S',
          // Honeypot spam protection (hidden field)
          botcheck: ''
        })
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        throw new Error(result.message || 'Form submission failed');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 bg-grain selection:bg-indigo-100 selection:text-indigo-900">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-[60] p-3 bg-indigo-600 text-white rounded-full shadow-lg transition-all duration-300 hover:bg-indigo-700 hover:-translate-y-1 active:scale-95 ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
        aria-label="Back to top"
      >
        <ArrowUp size={24} />
      </button>

      {/* Functional Header Component */}
      <Header scrolled={scrolled} />

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="flex-1 order-2 md:order-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <Terminal size={14} /> Full Stack Developer
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-[1.1]">
                Saishree <span className="text-indigo-600 italic font-serif">S</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
                Enthusiastic and detail-oriented <span className="text-slate-900 font-semibold">Computer Science Engineering student</span> with hands-on experience in MERN Stack development. Passionate about transforming ideas into interactive digital experiences.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                {/* View Projects Button - Primary Solid */}
                <a
                  href="#portfolio"
                  id="button_view_projects"
                  className="group w-full sm:w-auto flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
                  style={{
                    backgroundColor: '#4F46E5',
                    color: '#FFFFFF',
                    borderRadius: '12px',
                    boxShadow: '0px 4px 12px rgba(79, 70, 229, 0.4)',
                    padding: '12px 24px',
                    fontWeight: 600,
                    textDecoration: 'none'
                  }}
                >
                  <span>View Projects</span>
                  <ChevronDown size={18} color="#FFFFFF" />
                </a>

                {/* Contact Me Button - Outline */}
                <a
                  href="#contact"
                  id="button_contact_me"
                  className="group w-full sm:w-auto flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-50"
                  style={{
                    backgroundColor: 'transparent',
                    color: '#1F2937',
                    border: '1px solid #E5E7EB',
                    borderRadius: '12px',
                    padding: '12px 24px',
                    fontWeight: 600,
                    textDecoration: 'none'
                  }}
                >
                  <span>Contact Me</span>
                </a>

                {/* Download CV Button - Primary Solid with Icon Left */}
                <a
                  href={SOCIAL_LINKS.resume}
                  download="SAISHREE_Resume.pdf"
                  id="button_download_cv"
                  className="group w-full sm:w-auto flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
                  style={{
                    backgroundColor: '#059669',
                    color: '#FFFFFF',
                    borderRadius: '12px',
                    boxShadow: '0px 4px 12px rgba(5, 150, 105, 0.4)',
                    padding: '12px 24px',
                    fontWeight: 600,
                    textDecoration: 'none'
                  }}
                >
                  <FileDown size={18} color="#FFFFFF" />
                  <span>Download CV</span>
                </a>
              </div>

              <div className="mt-12 flex items-center justify-center md:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">
                  <Linkedin className="h-6" />
                </a>
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">
                  <Github className="h-6" />
                </a>
                <a href={`mailto:${SOCIAL_LINKS.email}`} className="hover:text-indigo-600 transition-colors">
                  <Mail className="h-6" />
                </a>
              </div>
            </div>

            <div className="flex-1 order-1 md:order-2 relative group">
              <div className="absolute -inset-4 bg-indigo-600/10 blob-shape animate-pulse blur-3xl -z-10 group-hover:bg-indigo-600/20 transition-all duration-700"></div>
              <div className="profile-image-container relative z-10 w-64 h-64 md:w-96 md:h-96 mx-auto overflow-hidden blob-shape border-8 border-white shadow-2xl bg-gradient-to-br from-indigo-100 to-purple-100">
                <img
                  src={PROFILE_IMAGE}
                  alt="Saishree S - Full Stack Developer"
                  className="profile-image w-full h-full object-cover object-center"
                  loading="eager"
                  onError={(e) => {
                    // Fallback to Code icon if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-200"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div>';
                  }}
                />
              </div>
              <div className="absolute bottom-4 -right-4 md:bottom-8 md:-right-8 bg-white p-4 rounded-2xl shadow-xl z-20 border border-slate-50 transform group-hover:rotate-3 transition-transform">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                    <Award size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-800 italic">MERN Specialist</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">KGiSL Engineering</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <Section id="experience" title="Work Experience" icon={<Briefcase size={28} />} className="bg-slate-100/50">
        <div className="space-y-8 max-w-4xl">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">{exp.role}</h3>
                  <p className="text-indigo-600 font-semibold">{exp.company}</p>
                </div>
                <span className="px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-sm font-bold">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-600 leading-relaxed">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="portfolio" title="Featured Projects" icon={<Layers size={28} />}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100">
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-lg text-xs font-bold text-indigo-700 uppercase tracking-widest">
                  {project.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{project.title}</h3>
                <p className="text-sm font-medium text-indigo-600 mb-4">{project.technologies}</p>
                <ul className="space-y-2 mb-6 flex-grow">
                  {project.description.map((desc, i) => (
                    <li key={i} className="text-sm text-slate-500 leading-relaxed flex gap-2">
                      <span className="text-indigo-300">•</span> {desc}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-semibold hover:bg-slate-800 transition-all hover:-translate-y-0.5"
                    >
                      <Github size={16} /> Code
                    </a>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-all hover:-translate-y-0.5"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                  {!project.link && !project.liveDemo && (
                    <span className="flex items-center gap-2 text-slate-400 text-sm italic">
                      <Code size={16} /> Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Education & Languages */}
      <Section title="Education & Expertise" icon={<BookOpen size={28} />} className="bg-slate-100/50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Education Timeline */}
          <div className="lg:col-span-8">
            <div className="space-y-12">
              {EDUCATION_DATA.map((item, idx) => (
                <div key={idx} className="relative pl-10 border-l-2 border-indigo-200 pb-2 last:pb-0">
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-indigo-100"></div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                    <h3 className="text-xl font-bold text-slate-800">{item.institution}</h3>
                    <span className="text-sm font-semibold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full w-fit">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-slate-500 font-medium mb-2 flex items-center gap-2">
                    <MapPin size={16} className="text-slate-400" /> {item.location}
                  </p>
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <p className="text-slate-700 font-bold text-lg mb-1">{item.degree}</p>
                    {item.grade && (
                      <p className="text-indigo-600 font-bold">{item.grade}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & Core Competencies */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Globe size={20} className="text-indigo-600" /> Languages Known
              </h3>
              <div className="space-y-4">
                {LANGUAGES.map((lang, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors">
                    <span className="font-semibold text-slate-700">{lang.name}</span>
                    <span className="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-500 rounded-lg uppercase tracking-wider">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-indigo-900 p-8 rounded-3xl shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-[-20px] right-[-20px] opacity-10">
                <Star size={120} />
              </div>
              <h3 className="text-xl font-bold mb-6 relative z-10 flex items-center gap-2">
                <Award size={20} className="text-indigo-400" /> Core Concepts
              </h3>
              <ul className="space-y-4 relative z-10">
                {CORE_SKILLS.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-medium text-indigo-100/90">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Technical Arsenal" icon={<Code size={28} />} className="bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOFTWARE_SKILLS.map((skill, idx) => (
            <SkillItem key={idx} skill={skill} />
          ))}
        </div>

        <div className="mt-16 pt-16 border-t border-slate-100">
          <div className="text-center mb-10">
            <span className="text-indigo-600 font-bold uppercase tracking-widest text-xs">Behavioral Traits</span>
            <h3 className="text-3xl font-bold text-slate-800 mt-2">Personal Competencies</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {SOFT_SKILLS.map((skill, idx) => (
              <span key={idx} className="px-6 py-3 bg-slate-50 border border-slate-100 text-slate-700 font-semibold rounded-2xl hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-700 transition-all cursor-default shadow-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-indigo-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-5"></div>
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 italic font-serif text-white">Let's Connect</h2>
              <p className="text-indigo-100/70 text-lg mb-10 max-w-lg">
                I'm currently looking for new opportunities in Front-End or Software Development. Whether you have a question or just want to say hi, my inbox is always open!
              </p>

              <div className="space-y-8">
                <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-indigo-600 transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-1">Email Me</div>
                    <div className="text-xl font-semibold group-hover:text-indigo-400 transition-colors">{SOCIAL_LINKS.email}</div>
                  </div>
                </a>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-1">Contact No</div>
                    <div className="text-xl font-semibold">+91 9791982933</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-1">Based In</div>
                    <div className="text-xl font-semibold">Coimbatore, India</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full">
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-2xl text-slate-800 relative overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full px-5 py-4 bg-slate-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all border border-slate-100"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="w-full px-5 py-4 bg-slate-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all border border-slate-100"
                    />
                  </div>
                </div>
                <div className="mb-8">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Your Message</label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="I'd like to talk about a project..."
                    className="w-full px-5 py-4 bg-slate-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all border border-slate-100 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending' || formStatus === 'success'}
                  className={`w-full py-4 rounded-xl font-bold transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2
                    ${formStatus === 'success' ? 'bg-green-600 text-white cursor-default' :
                      formStatus === 'error' ? 'bg-red-600 text-white' :
                        'bg-indigo-700 text-white hover:bg-indigo-800 shadow-indigo-700/20'}`}
                >
                  {formStatus === 'sending' ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Sending...
                    </>
                  ) : formStatus === 'success' ? (
                    <>
                      <CheckCircle2 size={20} />
                      Message Sent!
                    </>
                  ) : formStatus === 'error' ? (
                    <>
                      <AlertCircle size={20} />
                      Something went wrong
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>

                {formStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-100 rounded-xl text-green-700 text-sm font-medium flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-500">
                    <CheckCircle2 className="flex-shrink-0 mt-0.5" size={16} />
                    <p>Thank you for reaching out! Your message has been sent to {SOCIAL_LINKS.email}. I'll get back to you soon.</p>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-100 rounded-xl text-red-700 text-sm font-medium flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-500">
                    <AlertCircle className="flex-shrink-0 mt-0.5" size={16} />
                    <p>There was an error sending your message. Please try again or email me directly.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-indigo-900 mb-2 uppercase tracking-tighter">SAISHREE S</div>
            <p className="text-sm text-slate-400">Computer Science Engineer & Full Stack Developer</p>
          </div>
          <div className="flex gap-4">
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 rounded-xl text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all">
              <Linkedin size={20} />
            </a>
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 rounded-xl text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all">
              <Github size={20} />
            </a>
            <a href={`mailto:${SOCIAL_LINKS.email}`} className="p-3 bg-slate-50 rounded-xl text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-[10px] text-slate-300 uppercase tracking-widest font-bold">
          © {new Date().getFullYear()} SAISHREE S. Crafted with React & Tailwind.
        </div>
      </footer>
    </div>
  );
};

export default App;
