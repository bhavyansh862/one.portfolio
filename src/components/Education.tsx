import React from 'react';
import { FaSchool, FaUniversity, FaGraduationCap } from 'react-icons/fa';

const educationData = [
  {
    type: 'SCHOOL',
    icon: <FaSchool className="text-2xl text-[#ff0000]" />,
    institution: 'Guru Nanak Public School',
    location: '313002, Udaipur, Rajasthan',
    years: 'Prep – 10th (2008 – 2021)',
    details: 'Completed foundational and secondary education with a focus on holistic development.'
  },
  {
    type: 'SENIOR SECONDARY',
    icon: <FaGraduationCap className="text-2xl text-[#ff0000]" />,
    institution: 'Guru Nanak Public School',
    location: '313002, Udaipur, Rajasthan',
    years: '11th – 12th (PCM) (2021 – 2023)',
    details: 'Specialized in Physics, Chemistry, and Mathematics (PCM) during senior secondary education.'
  },
  {
    type: 'B.TECH (CSE)',
    icon: <FaUniversity className="text-2xl text-[#ff0000]" />,
    institution: 'Geetanjali Institute of Technical Studies',
    location: 'Dabok, Udaipur, 313001',
    years: '2023 – Present',
    details: 'Pursuing Bachelor of Technology in Computer Science and Engineering.'
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-20 bg-[#0d0d0d]">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-7xl font-bold text-[#ff0000] mb-16 text-center tracking-tight">
          Education
        </h2>
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-[#ff0000] to-[#181c23] transform -translate-x-1/2 z-0" />
          <div className="space-y-16 relative z-10">
            {educationData.map((edu, idx) => (
              <div key={idx} className="flex items-center justify-between w-full">
                {/* Left side for even, right for odd */}
                {idx % 2 === 0 ? (
                  <div className="w-5/12 text-right pr-8">
                    <div className="text-2xl font-bold text-white mb-1">{edu.type}</div>
                    <div className="text-lg font-semibold text-[#ff0000]">{edu.institution}</div>
                    <div className="text-sm text-gray-400 mb-1">{edu.location}</div>
                    <div className="text-sm text-gray-300 mb-1">{edu.years}</div>
                    <div className="text-sm text-gray-200 italic">{edu.details}</div>
                  </div>
                ) : <div className="w-5/12" />}
                {/* Timeline node */}
                <div className="flex flex-col items-center">
                  <div className="bg-[#181c23] border-4 border-[#ff0000] rounded-full w-14 h-14 flex items-center justify-center shadow-lg mb-2">
                    {edu.icon}
                  </div>
                  {idx < educationData.length - 1 && (
                    <div className="h-16 w-1 bg-gradient-to-b from-[#ff0000] to-[#181c23]" />
                  )}
                </div>
                {/* Right side for odd, left for even */}
                {idx % 2 !== 0 ? (
                  <div className="w-5/12 text-left pl-8">
                    <div className="text-2xl font-bold text-white mb-1">{edu.type}</div>
                    <div className="text-lg font-semibold text-[#ff0000]">{edu.institution}</div>
                    <div className="text-sm text-gray-400 mb-1">{edu.location}</div>
                    <div className="text-sm text-gray-300 mb-1">{edu.years}</div>
                    <div className="text-sm text-gray-200 italic">{edu.details}</div>
                  </div>
                ) : <div className="w-5/12" />}
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

export default Education; 