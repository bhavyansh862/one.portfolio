import React from 'react';

const sections = [
  {
    id: 'about',
    label: 'About',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
    )
  },
  {
    id: 'skills',
    label: 'Skills',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 17v-2a4 4 0 0 1 8 0v2" /><rect x="2" y="9" width="20" height="6" rx="3" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
    )
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18" /><path d="M15 3v18" /></svg>
    )
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4.5" /><path d="M21 10.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2" /><path d="M21 10.5V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7.5" /></svg>
    )
  }
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const SectionShortcuts: React.FC = () => {
  return (
    <div className="w-full flex justify-center py-3 z-40 relative">
      <div className="flex items-center justify-center gap-2 w-full max-w-3xl relative">
        {/* Left shortcuts */}
        <div className="flex gap-4 flex-1 justify-end">
          {sections.slice(0, 2).map((section, idx) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`flex items-center gap-2 px-5 py-2 bg-[#0b0303] border border-[#ff0000] border-opacity-60 text-white font-bold text-base shadow cursor-magnetic transition-all duration-300 hover:bg-[#ff0000] hover:text-white focus:outline-none
                ${idx === 0 ? 'rounded-l-full' : ''} rounded-[2rem]`}
              style={{ minWidth: 90, borderWidth: 1 }}
            >
              <span className="text-xl">{section.icon}</span>
              <span>{section.label}</span>
            </button>
          ))}
        </div>
        {/* Profile image in center */}
        <div className="relative z-10 flex flex-col items-center justify-center mx-6">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-[#ff0000] border-opacity-80 bg-gradient-to-r from-[#ff0000] to-[#ff4444] overflow-hidden flex items-center justify-center shadow-lg">
            <img
              src="/profile it.jpeg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="mt-2 text-sm font-semibold text-white">Bhavyansh</span>
        </div>
        {/* Right shortcuts */}
        <div className="flex gap-4 flex-1 justify-start">
          {sections.slice(2).map((section, idx) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`flex items-center gap-2 px-5 py-2 bg-[#0b0303] border border-[#ff0000] border-opacity-60 text-white font-bold text-base shadow cursor-magnetic transition-all duration-300 hover:bg-[#ff0000] hover:text-white focus:outline-none
                ${idx === 1 ? 'rounded-r-full' : ''} rounded-[2rem]`}
              style={{ minWidth: 90, borderWidth: 1 }}
            >
              <span className="text-xl">{section.icon}</span>
              <span>{section.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionShortcuts; 