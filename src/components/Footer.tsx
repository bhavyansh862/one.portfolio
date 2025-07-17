import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/bhavyansh862', icon: Github },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/bhavyansh-lakhara-484a72303', icon: Linkedin },
    { name: 'Twitter', url: 'https://twitter.com', icon: Twitter },
    { name: 'Email', url: 'mailto:bhavyanshlakhara880@gmail.com', icon: Mail }
  ];

  useEffect(() => {
    ScrollTrigger.create({
      trigger: footerRef.current,
      start: "top 80%",
      end: "bottom 20%",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        
        // Animated icon bar
        gsap.to('.social-icon', {
          y: -progress * 20,
          scale: 1 + progress * 0.2,
          rotation: progress * 360,
          stagger: 0.1,
          duration: 0.3
        });
        
        // Reverse scroll animation
        gsap.to('.footer-content', {
          opacity: 1 - progress * 0.5,
          y: progress * 50,
          duration: 0.1
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative bg-[#0d0d0d] py-20 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="footer-content text-center">
          <div className="mb-12">
            <h3 className="text-4xl font-bold text-[#ff0000] mb-4">
              Bhavyansh Lakhara
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Passionate about building the future with Agentic AI, Cloud Technologies, and Secure Development Practices.'
                : 'Passionné par la construction du futur avec l\'IA Agentique, les Technologies Cloud et les Pratiques de Développement Sécurisé.'
              }
            </p>
          </div>
          
          {/* Social Icons */}
          <div
            ref={iconsRef}
            className="flex justify-center space-x-8 mb-12"
          >
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon bg-[#ff0000] bg-opacity-20 border border-[#ff0000] rounded-full p-4 hover:bg-[#ff0000] hover:text-white transition-all duration-300 cursor-magnetic"
                >
                  <IconComponent size={24} />
                </a>
              );
            })}
          </div>
          
          {/* Copyright */}
          <div className="border-t border-[#ff0000] border-opacity-30 pt-8">
            <p className="text-gray-500 text-sm">
              © 2024 Bhavyansh Lakhara. {language === 'en' ? 'All rights reserved.' : 'Tous droits réservés.'}
            </p>
            <p className="text-gray-600 text-xs mt-2">
              {language === 'en' 
                ? 'Built with React, TypeScript, and lots of ☕'
                : 'Construit avec React, TypeScript et beaucoup de ☕'
              }
            </p>
          </div>
        </div>
      </div>
      
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#ff0000] rounded-full animate-ping" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#ff0000] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-[#ff0000] rounded-full animate-bounce" />
      </div>
    </footer>
  );
};

export default Footer;