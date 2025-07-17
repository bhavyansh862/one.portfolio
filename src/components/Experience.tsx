import React from 'react';
import { FaBriefcase, FaServer, FaCloud, FaRobot } from 'react-icons/fa';

const experienceData = [
  {
    type: 'INTERNSHIP',
    icon: <FaBriefcase className="text-2xl text-[#ff0000]" />,
    company: 'LinuxWorld Informatics Pvt Ltd',
    role: 'Intern & Trainee',
    location: 'Jaipur, Rajasthan',
    years: '2024',
    details: (
      <>
        <div className="text-sm text-gray-200 mb-1">Explored and learned:</div>
        <ul className="list-disc list-inside text-gray-300 text-sm pl-2">
          <li>DevOps</li>
          <li>Cloud Computing</li>
          <li>Linux Programming</li>
          <li>Docker</li>
          <li>Kubernetes</li>
          <li>Jenkins</li>
          <li>Agentic AI</li>
          <li>AI/ML</li>
        </ul>
      </>
    )
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-20 bg-[#0d0d0d]">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-7xl font-bold text-[#ff0000] mb-16 text-center tracking-tight">
          Experience
        </h2>
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline vertical line (continues from education) */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-[#ff0000] to-[#181c23] transform -translate-x-1/2 z-0" />
          <div className="space-y-16 relative z-10">
            {experienceData.map((exp, idx) => (
              <div key={idx} className="flex items-center justify-between w-full">
                {/* Left side for even, right for odd (only one entry here) */}
                <div className="w-5/12 text-right pr-8">
                  <div className="text-2xl font-bold text-white mb-1">{exp.type}</div>
                  <div className="text-lg font-semibold text-[#ff0000]">{exp.company}</div>
                  <div className="text-sm text-gray-400 mb-1">{exp.role}</div>
                  <div className="text-sm text-gray-300 mb-1">{exp.location}</div>
                  <div className="text-sm text-gray-300 mb-1">{exp.years}</div>
                  <div className="text-sm text-gray-200 italic">{exp.details}</div>
                </div>
                {/* Timeline node */}
                <div className="flex flex-col items-center">
                  <div className="bg-[#181c23] border-4 border-[#ff0000] rounded-full w-14 h-14 flex items-center justify-center shadow-lg mb-2">
                    {exp.icon}
                  </div>
                </div>
                <div className="w-5/12" />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 text-center text-gray-400 animate-bounce">
          <span className="text-lg">Scroll Down</span>
          <div className="mt-2 text-2xl">&#8595;</div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 