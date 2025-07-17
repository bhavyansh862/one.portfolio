import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const laptopRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const [showCV, setShowCV] = useState(false);
  const [cvExpanded, setCvExpanded] = useState(false);

  // Remove handleDownloadCV and all html2pdf.js related code

  const tabs = [
    {
      id: 'collaborate',
      title: language === 'en' ? 'Want to collaborate?' : 'Envie de collaborer?',
      content: language === 'en' ? 'Let\'s build something amazing together!' : 'Construisons quelque chose d\'extraordinaire ensemble!',
      icon: '🤝'
    },
    {
      id: 'email',
      title: language === 'en' ? 'Email me' : 'Envoyez-moi un email',
      content: 'bhavyanshlakhara880@gmail.com',
      icon: '✉️'
    },
    {
      id: 'social',
      title: language === 'en' ? 'Find me online' : 'Trouvez-moi en ligne',
      content: 'GitHub • LinkedIn • Twitter',
      icon: '🌐'
    },
    {
      id: 'response',
      title: language === 'en' ? 'Quick response' : 'Réponse rapide',
      content: language === 'en' ? 'Replies within 1hr' : 'Réponse sous 1h',
      icon: '🚀'
    }
  ];

  useEffect(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 50%",
      end: "bottom 50%",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        
        // Apple-style laptop reveal
        gsap.to(laptopRef.current, {
          rotateX: -progress * 30,
          scale: 1 + progress * 0.2,
          duration: 0.1
        });
        
        // Tab animations
        tabs.forEach((_, index) => {
          const tab = document.querySelector(`.tab-${index}`);
          if (tab) {
            gsap.to(tab, {
              y: -progress * 50 * (index + 1),
              opacity: 1 - progress * 0.5,
              duration: 0.1
            });
          }
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen bg-[#0d0d0d] py-20 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-6xl md:text-8xl font-bold text-[#ff0000] mb-20 text-center">
          {language === 'en' ? 'CONTACT' : 'CONTACT'}
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Tabs */}
          <div className="flex flex-col gap-6 h-full justify-stretch">
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                className={`tab-${index} bg-[#0b0303] border border-[#ff0000] border-opacity-30 rounded-lg p-6 cursor-magnetic hover:border-opacity-100 transition-all duration-300 transform hover:scale-105 flex flex-col items-center text-center justify-center h-full min-h-[140px]`}
              >
                <span className="text-2xl mb-2">{tab.icon}</span>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {tab.title}
                </h3>
                <p className="text-gray-300">{tab.content}</p>
              </div>
            ))}
          </div>
          
          {/* MacBook-style Display */}
          <div className="relative perspective-1000 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Profile Card */}
            <div className="relative bg-[#0d0d0d] border-2 border-[#ff0000] rounded-lg p-8 flex flex-col items-center justify-center shadow-lg cursor-magnetic hover:scale-105 transition-transform duration-300">
              <div className="w-24 h-24 mb-4 rounded-full bg-gradient-to-r from-[#ff0000] to-[#ff4444] flex items-center justify-center shadow-lg" style={{backgroundImage: 'url(/profile it.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}} />
              <h3 className="text-2xl font-bold text-white mb-2">Bhavyansh Lakhara</h3>
              <p className="text-[#ff0000] mb-2 text-sm">{language === 'en' ? 'Agentic Developer' : 'Développeur Agentique'}</p>
              <p className="text-gray-300 text-center mb-4 text-sm max-w-xs">{language === 'en' ? 'Building the future with Agentic AI, Cloud, and Secure Automation. Passionate about tech, learning, and collaboration.' : 'Construire le futur avec l\'IA agentique, le cloud et l\'automatisation sécurisée. Passionné de technologie, d\'apprentissage et de collaboration.'}</p>
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                <span className="bg-[#ff0000] bg-opacity-20 border border-[#ff0000] rounded-full px-3 py-1 text-xs text-white">Cloud</span>
                <span className="bg-[#ff0000] bg-opacity-20 border border-[#ff0000] rounded-full px-3 py-1 text-xs text-white">AI/ML</span>
                <span className="bg-[#ff0000] bg-opacity-20 border border-[#ff0000] rounded-full px-3 py-1 text-xs text-white">DevOps</span>
                <span className="bg-[#ff0000] bg-opacity-20 border border-[#ff0000] rounded-full px-3 py-1 text-xs text-white">Security</span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-[#ff0000] bg-opacity-20 border border-[#ff0000] rounded-full px-4 py-2 cursor-magnetic animate-pulse">
                <div className="w-2 h-2 bg-[#ff0000] rounded-full" />
                <span className="text-xs font-medium text-white">{language === 'en' ? 'Open to Work' : 'Ouvert au Travail'}</span>
              </div>
            </div>
            {/* Existing Resume/Contact Card */}
            <div className="relative bg-gray-800 rounded-lg p-4 transform-gpu" style={{transformStyle: 'preserve-3d'}}>
              <div className="bg-[#0d0d0d] rounded-lg p-8 min-h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#ff0000] to-[#ff4444] flex items-center justify-center" style={{backgroundImage: 'url(/profile it.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <span className="text-2xl font-bold text-white">BL</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Bhavyansh Lakhara
                  </h3>
                  <p className="text-[#ff0000] mb-4">
                    {language === 'en' ? 'Agentic Developer' : 'Développeur Agentique'}
                  </p>
                  <div className="space-y-2 text-sm text-gray-300 mb-6">
                    <a href="mailto:bhavyanshlakhara880@gmail.com" className="block text-[#ff0000] hover:underline cursor-magnetic">
                      bhavyanshlakhara880@gmail.com
                    </a>
                    <a href="https://github.com/bhavyansh862" target="_blank" rel="noopener noreferrer" className="block text-[#ff0000] hover:underline cursor-magnetic">
                      github.com/bhavyansh862
                    </a>
                    <a href="https://linkedin.com/in/bhavyansh-lakhara-484a72303" target="_blank" rel="noopener noreferrer" className="block text-[#ff0000] hover:underline cursor-magnetic">
                      linkedin.com/in/bhavyansh-lakhara-484a72303
                    </a>
                  </div>
                  <div className="terminal-pulse w-full h-1 bg-[#ff0000] rounded animate-pulse mb-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CV Modal */}
      {showCV && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-[#0d0d0d] border-2 border-[#ff0000] rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 relative" id="cv-modal-content">
            <button className="absolute top-4 right-4 text-white bg-[#ff0000] rounded-full px-3 py-1" onClick={() => setShowCV(false)}>X</button>
            <div className="flex flex-col items-center mb-6">
              <img src="/desk-logo.png" alt="Logo" className="w-24 h-24 mb-2 object-contain" />
              <h2 className="text-3xl font-bold text-[#ff0000] mb-1">Bhavyansh Lakhara</h2>
              <div className="text-gray-400 text-sm mb-2">DevOps Engineer | Cloud | AI/ML | Linux Programming</div>
              <div className="flex gap-4 text-[#ff0000] text-sm mb-2">
                <a href="mailto:bhavyanshlakhara880@gmail.com" className="hover:underline">bhavyanshlakhara880@gmail.com</a>
                <a href="https://github.com/bhavyansh862" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
                <a href="https://linkedin.com/in/bhavyansh-lakhara-484a72303" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white mb-2">Education</h3>
              <ul className="space-y-2">
                <li>
                  <span className="font-semibold text-[#ff0000]">Guru Nanak Public School</span> – 313002, Udaipur, Rajasthan<br/>
                  <span className="text-gray-300">Prep – 10th (2008 – 2021)</span>
                </li>
                <li>
                  <span className="font-semibold text-[#ff0000]">Guru Nanak Public School</span> – 313002, Udaipur, Rajasthan<br/>
                  <span className="text-gray-300">11th – 12th (PCM) (2021 – 2023)</span>
                </li>
                <li>
                  <span className="font-semibold text-[#ff0000]">Geetanjali Institute of Technical Studies</span> – Dabok, Udaipur, 313001<br/>
                  <span className="text-gray-300">B.Tech in Computer Science and Engineering (2023 – Present)</span>
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white mb-2">Experience</h3>
              <ul className="space-y-2">
                <li>
                  <span className="font-semibold text-[#ff0000]">LinuxWorld Informatics Pvt Ltd</span> – Jaipur, Rajasthan<br/>
                  <span className="text-gray-300">Intern & Trainee (2024)</span><br/>
                  <span className="text-gray-400 text-xs">{!cvExpanded ? (<>
                    Explored and learned: DevOps, Cloud Computing, Linux Programming, Docker, Kubernetes, Jenkins, Agentic AI, AI/ML
                    <button className="ml-2 text-[#ff0000] underline" onClick={() => setCvExpanded(true)}>Read More</button>
                  </>) : (
                    <span className="block max-h-24 overflow-y-auto">Explored and learned: DevOps, Cloud Computing, Linux Programming, Docker, Kubernetes, Jenkins, Agentic AI, AI/ML. Hands-on with real-world projects, automation pipelines, and cloud-native tools. <button className="ml-2 text-[#ff0000] underline" onClick={() => setCvExpanded(false)}>Show Less</button></span>
                  )}</span>
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#ff0000] bg-opacity-20 border border-[#ff0000] rounded-full px-3 py-1 text-xs text-white">Python</span>
                <span className="bg-[#ff0000] bg-opacity-20 border border-[#ff0000] rounded-full px-3 py-1 text-xs text-white">JavaScript</span>
                <span className="bg-[#ff0000] bg-opacity-20 border border-[#ff0000] rounded-full px-3 py-1 text-xs text-white">HTML/CSS</span>
                <span className="bg-[#ff0000] bg-opacity-20 border border-[#ff0000] rounded-full px-3 py-1 text-xs text-white">Docker</span>
                <span className="bg-[#ff0000] bg-opacity-20 border border-[#ff0000] rounded-full px-3 py-1 text-xs text-white">Kubernetes</span>
                <span className="bg-[#ff0000] bg-opacity-20 border border-[#ff0000] rounded-full px-3 py-1 text-xs text-white">AWS/GCP</span>
                <span className="bg-[#ff0000] bg-opacity-20 border border-[#ff0000] rounded-full px-3 py-1 text-xs text-white">Jenkins</span>
                <span className="bg-[#ff0000] bg-opacity-20 border border-[#ff0000] rounded-full px-3 py-1 text-xs text-white">Cybersecurity</span>
                <span className="bg-[#ff0000] bg-opacity-20 border border-[#ff0000] rounded-full px-3 py-1 text-xs text-white">Agentic AI</span>
                <span className="bg-[#ff0000] bg-opacity-20 border border-[#ff0000] rounded-full px-3 py-1 text-xs text-white">Automation</span>
                <span className="bg-[#ff0000] bg-opacity-20 border border-[#ff0000] rounded-full px-3 py-1 text-xs text-white">Linux Programming</span>
                <span className="bg-[#ff0000] bg-opacity-20 border border-[#ff0000] rounded-full px-3 py-1 text-xs text-white">Genetic AI</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;