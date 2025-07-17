import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import downloadPng from '../assets/download.png';
import LanguageToggle from './LanguageToggle';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const monogramRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const [showAvailable, setShowAvailable] = useState(false);
  const [animateOnLoad, setAnimateOnLoad] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 3 });
    
    tl.fromTo(profileRef.current, {
      scale: 0,
      rotation: 180,
      opacity: 0
    }, {
      scale: 1,
      rotation: 0,
      opacity: 1,
      duration: 1,
      ease: "back.out(1.7)"
    })
    .fromTo(monogramRef.current, {
      y: 100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.5");

    // Scroll animation for logo
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.to(monogramRef.current, {
          y: -progress * 200,
          opacity: 1 - progress,
          duration: 0.1
        });
      }
    });

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    // Trigger animatic animation after loading screen
    setAnimateOnLoad(true);
    const timer = setTimeout(() => setAnimateOnLoad(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Dismiss profile image on click outside
  useEffect(() => {
    // The profile popup feature is disabled, so this effect is no longer needed.
    // If it were enabled, this would handle closing the popup.
  }, []);

  // When animation ends, hide popup if animating out
  const handleAnimEnd = () => {
    // The profile popup feature is disabled, so this function is no longer needed.
  };

  const handleAvailableClose = () => setShowAvailable(false);

  return (
    <div
      id="about"
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(45deg, #0d0d0d 0%, #0b0303 100%)'
      }}
    >
      <LanguageToggle />
      {/* Animated Profile Popup */}
      {/* The profile popup feature is disabled, so this block is removed. */}
      {/* Animated Data Flow Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Row 1 */}
        <div className="absolute top-[6%] w-full flex space-x-16 animate-flow-row1 opacity-60">
          {['HTML', 'Java', 'Python', 'C++', 'CSS', 'Go', 'TypeScript', 'Node.js', 'Scala', 'Perl', 'Bash', 'COBOL', 'Fortran'].map((lang, i) => (
            <span key={lang} className="text-3xl font-mono text-[#ff0000] drop-shadow-lg animate-fade-in-out" style={{animationDelay: `${i * 0.7}s`}}>{lang}</span>
          ))}
        </div>
        {/* Row 2 */}
        <div className="absolute top-[16%] w-full flex space-x-20 animate-flow-row2 opacity-40">
          {['React', 'JavaScript', 'Kotlin', 'Rust', 'PHP', 'Swift', 'Ruby', 'SQL', 'Elixir', 'Dart', 'Matlab', 'Elm', 'Haxe'].map((lang, i) => (
            <span key={lang} className="text-2xl font-mono text-[#ff4444] drop-shadow animate-fade-in-out" style={{animationDelay: `${i * 0.6 + 2}s`}}>{lang}</span>
          ))}
        </div>
        {/* Row 3 */}
        <div className="absolute top-[28%] w-full flex space-x-24 animate-flow-row3 opacity-50">
          {['Vue', 'Sass', 'Less', 'Assembly', 'Fortran', 'COBOL', 'Groovy', 'Julia', 'F#', 'R', 'Crystal', 'Vala'].map((lang, i) => (
            <span key={lang} className="text-xl font-mono text-[#ff8888] drop-shadow animate-fade-in-out" style={{animationDelay: `${i * 0.5 + 1.5}s`}}>{lang}</span>
          ))}
        </div>
        {/* Row 4 */}
        <div className="absolute top-[40%] w-full flex space-x-28 animate-flow-row4 opacity-30">
          {['Angular', 'Objective-C', 'Shell', 'PowerShell', 'Haskell', 'Lua', 'Delphi', 'Clojure', 'Prolog', 'ABAP', 'OCaml', 'Racket'].map((lang, i) => (
            <span key={lang} className="text-lg font-mono text-[#ffcccc] drop-shadow animate-fade-in-out" style={{animationDelay: `${i * 0.4 + 3}s`}}>{lang}</span>
          ))}
        </div>
        {/* Row 5 */}
        <div className="absolute top-[52%] w-full flex space-x-32 animate-flow-row5 opacity-20">
          {['GraphQL', 'Solidity', 'VHDL', 'Verilog', 'Ada', 'Erlang', 'Scheme', 'OCaml', 'Crystal', 'Racket', 'APL', 'Lisp'].map((lang, i) => (
            <span key={lang} className="text-base font-mono text-[#fff] drop-shadow animate-fade-in-out" style={{animationDelay: `${i * 0.3 + 4}s`}}>{lang}</span>
          ))}
        </div>
        {/* Row 6 */}
        <div className="absolute top-[64%] w-full flex space-x-36 animate-flow-row6 opacity-25">
          {['TensorFlow', 'PyTorch', 'Scikit', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter', 'Hadoop', 'Spark', 'Kafka', 'Airflow'].map((lang, i) => (
            <span key={lang} className="text-lg font-mono text-[#ffb3b3] drop-shadow animate-fade-in-out" style={{animationDelay: `${i * 0.4 + 2.5}s`}}>{lang}</span>
          ))}
        </div>
        {/* Row 7 */}
        <div className="absolute top-[76%] w-full flex space-x-40 animate-flow-row7 opacity-18">
          {['Unity', 'Unreal', 'Godot', 'Blender', 'Maya', 'ZBrush', 'Cinema4D', 'Houdini', 'Substance', 'Arnold', 'Redshift', 'Octane'].map((lang, i) => (
            <span key={lang} className="text-base font-mono text-[#ffeaea] drop-shadow animate-fade-in-out" style={{animationDelay: `${i * 0.3 + 5}s`}}>{lang}</span>
          ))}
        </div>
        {/* Row 8 */}
        <div className="absolute top-[88%] w-full flex space-x-44 animate-flow-row8 opacity-12">
          {['Firebase', 'Supabase', 'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Cassandra', 'DynamoDB', 'BigQuery', 'Snowflake', 'ClickHouse', 'DuckDB'].map((lang, i) => (
            <span key={lang} className="text-base font-mono text-[#fff6f6] drop-shadow animate-fade-in-out" style={{animationDelay: `${i * 0.2 + 6}s`}}>{lang}</span>
          ))}
        </div>
      </div>

      {/* Monogram Logo */}
      <motion.div
        ref={monogramRef}
        className="text-center cursor-pointer"
        initial={false}
        animate={animateOnLoad ? { scale: [1, 1.2, 0.9, 1], rotate: [0, 10, -10, 0], opacity: [0, 1] } : { scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      >
        <img
          src={downloadPng}
          alt="Profile"
          className="mx-auto mb-4 w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-[#ff0000] shadow-lg"
          style={{ filter: 'drop-shadow(0 0 10px #ff0000)' }}
        />
        <div className="text-2xl md:text-3xl font-light text-white mb-8">
          {language === 'en' ? 'DevOps Engineer' : 'Ingénieur DevOps'}
        </div>
        
        {/* Terminal-style block for whoami and roles */}
        <div className="mx-auto mb-6 max-w-xl bg-[#181c23] rounded-lg p-4 text-left shadow-lg font-mono text-base md:text-lg">
          <div className="text-[#7ff487]">$ whoami</div>
          <div className="text-[#7ff487] mb-2">bhavyansh_lakhara</div>
          <div className="text-[#7ff487]">$ roles</div>
          <div className="text-[#60a4fa] whitespace-pre-wrap">[ 'Software Developer', 'Automation Engineer', 'CI/CD Expert', 'Video Editor', 'Social Media Manager' ]</div>
        </div>
        
        {/* Open to Work Badge */}
        <div
          className="inline-flex items-center space-x-2 bg-[#ff0000] bg-opacity-20 border border-[#ff0000] rounded-full px-6 py-3 cursor-magnetic"
          onClick={() => {
            setShowAvailable(true);
            // The profile popup feature is disabled, so this line is no longer needed.
          }}
          style={{ cursor: 'pointer' }}
        >
          <div className="w-2 h-2 bg-[#ff0000] rounded-full animate-pulse" />
          <span className="text-sm font-medium">
            {language === 'en' ? 'Open to Work' : 'Ouvert au Travail'}
          </span>
        </div>
        
        {/* Available to work message (modal/tooltip) */}
        {showAvailable && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40" onClick={handleAvailableClose}>
            <div
              className="bg-[#181c23] border-2 border-[#ff0000] rounded-xl px-6 py-5 text-left shadow-xl font-mono text-base md:text-lg min-w-[300px] max-w-[90vw] max-h-[80vh] overflow-auto"
              onClick={e => e.stopPropagation()}
              style={{ fontFamily: 'Share Tech Mono, monospace', wordBreak: 'break-word', whiteSpace: 'pre-wrap' }}
            >
              <div className="mb-2 text-[#7ff487]">
                <span className="text-[#ff0000]">root</span>@<span className="text-[#60a4fa]">portfolio</span>:<span className="text-white">~</span># <span className="text-white">cat available_roles.txt</span>
              </div>
              <div className="pl-6 text-[#ff0000] mb-2">
                cyber security / devops engineer / cloud computing
              </div>
              <div className="mt-4 flex justify-end">
                <button className="px-4 py-2 bg-[#ff0000] text-white rounded hover:bg-[#cc0000]" onClick={handleAvailableClose}>Close</button>
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-4 text-sm text-gray-400">
          {language === 'en' ? 'Freelance • Collaboration • Full-time' : 'Freelance • Collaboration • Temps plein'}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-magnetic">
        <div className="w-px h-12 bg-[#ff0000] animate-pulse" />
      </div>
    </div>
  );
};

export default Hero;
