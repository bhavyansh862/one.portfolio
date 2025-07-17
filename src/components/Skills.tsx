import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

interface Skill {
  name: string;
  category: string;
  level: number;
}

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showCircular, setShowCircular] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const { language } = useLanguage();

  const skills: Skill[] = [
    { name: 'Python', category: 'Languages', level: 95 },
    { name: 'JavaScript', category: 'Languages', level: 90 },
    { name: 'HTML/CSS', category: 'Languages', level: 92 },
    { name: 'Docker', category: 'DevOps', level: 85 },
    { name: 'Kubernetes', category: 'DevOps', level: 80 },
    { name: 'AWS/GCP', category: 'Cloud', level: 85 },
    { name: 'Jenkins', category: 'DevOps', level: 75 },
    { name: 'Cybersecurity', category: 'Security', level: 80 },
    { name: 'Agentic AI', category: 'AI/ML', level: 90 },
    { name: 'Automation', category: 'Development', level: 85 },
    { name: 'Linux Programming', category: 'Development', level: 88 },
    { name: 'Genetic AI', category: 'AI/ML', level: 88 }
  ];

  useEffect(() => {
    const tl = gsap.timeline();
    
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      end: "bottom 20%",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        
        // Stagger animation for skills
        gsap.to('.skill-item', {
          y: -progress * 50,
          opacity: 1,
          stagger: 0.1,
          duration: 0.5
        });
        
        // Scale and rotate effects
        gsap.to('.skill-panel', {
          scale: 1 + progress * 0.2,
          rotateY: progress * 10,
          duration: 0.3
        });
      }
    });

    return () => {
      tl.kill();
    };
  }, []);

  const handleSkillClick = (skill: Skill) => {
    setSelectedSkill(skill);
    setShowCircular(true);
    
    // Animate circular layout
    gsap.fromTo('.circular-skill', {
      scale: 0,
      rotation: 360
    }, {
      scale: 1,
      rotation: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "back.out(1.7)"
    });
  };

  return (
    <div
      id="skills"
      ref={sectionRef}
      className="relative min-h-screen bg-[#0b0303] py-20 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-6xl md:text-8xl font-bold text-[#ff0000] mb-20 text-center">
          {language === 'en' ? 'SKILLS' : 'COMPÉTENCES'}
        </h2>
        
        {/* Small Skills Boxes - 3 per line */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-item bg-[#0d0d0d] border border-[#ff0000] border-opacity-30 rounded-lg p-4 cursor-magnetic hover:border-opacity-100 transition-all duration-300 opacity-0 transform translate-y-20 hover:scale-105"
              onClick={() => handleSkillClick(skill)}
            >
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
                <span className="text-xs text-[#ff0000] mb-3 block">{skill.category}</span>
                
                {/* Circular Progress */}
                <div className="relative w-16 h-16 mx-auto mb-3">
                  <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="#333"
                      strokeWidth="4"
                      fill="none"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="#ff0000"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray={`${(skill.level / 100) * 175.93} 175.93`}
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{skill.level}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Circular Popup Layout */}
        {showCircular && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
            <div className="relative w-96 h-96">
              <button
                onClick={() => setShowCircular(false)}
                className="absolute top-4 right-4 text-[#ff0000] text-2xl z-10"
              >
                ×
              </button>
              
              <div className="absolute inset-0 rounded-full border-2 border-[#ff0000] border-opacity-50" />
              
              {skills.map((skill, index) => {
                const angle = (index * 360) / skills.length;
                const radius = 140;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                
                return (
                  <div
                    key={skill.name}
                    className="circular-skill absolute w-16 h-16 bg-[#ff0000] rounded-full flex items-center justify-center text-xs font-bold cursor-pointer hover:scale-110 transition-transform"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    {skill.name.substring(0, 3)}
                  </div>
                );
              })}
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#ff0000]">
                    {selectedSkill?.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {selectedSkill?.category}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;