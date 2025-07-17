import React from 'react';
import { FaSchool, FaUniversity, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const educationData = [
  {
    type: 'SCHOOL',
    icon: FaSchool,
    institution: 'Guru Nanak Public School',
    location: '313002, Udaipur, Rajasthan',
    years: 'Prep – 10th (2008 – 2021)',
    details: 'Completed foundational and secondary education with a focus on holistic development.'
  },
  {
    type: 'SENIOR SECONDARY',
    icon: FaGraduationCap,
    institution: 'Guru Nanak Public School',
    location: '313002, Udaipur, Rajasthan',
    years: '11th – 12th (PCM) (2021 – 2023)',
    details: 'Specialized in Physics, Chemistry, and Mathematics (PCM) during senior secondary education.'
  },
  {
    type: 'B.TECH (CSE)',
    icon: FaUniversity,
    institution: 'Geetanjali Institute of Technical Studies',
    location: 'Dabok, Udaipur, 313001',
    years: '2023 – Present',
    details: 'Pursuing Bachelor of Technology in Computer Science and Engineering.'
  }
];

const experienceData = [
  {
    type: 'INTERNSHIP',
    icon: FaBriefcase,
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

const Timeline = ({ data, isEducation }: { data: any[]; isEducation?: boolean }) => (
  <div className="relative max-w-xl mx-auto">
    {/* Timeline vertical line */}
    <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-[#ff0000] to-[#181c23] transform -translate-x-1/2 z-0" />
    <div className="space-y-16 relative z-10">
      {data.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div key={idx} className="flex items-center justify-between w-full">
            {/* Left side for even, right for odd */}
            {idx % 2 === 0 ? (
              <div className="w-5/12 text-right pr-8">
                <div className="text-2xl font-bold text-white mb-1">{item.type}</div>
                <div className="text-lg font-semibold text-[#ff0000]">{isEducation ? item.institution : item.company}</div>
                <div className="text-sm text-gray-400 mb-1">{isEducation ? item.location : item.role}</div>
                <div className="text-sm text-gray-300 mb-1">{isEducation ? item.years : item.location}</div>
                <div className="text-sm text-gray-300 mb-1">{!isEducation && item.years}</div>
                <div className="text-sm text-gray-200 italic">{item.details}</div>
              </div>
            ) : <div className="w-5/12" />}
            {/* Timeline node */}
            <div className="flex flex-col items-center">
              <div className="bg-[#181c23] border-4 border-[#ff0000] rounded-full w-14 h-14 flex items-center justify-center shadow-lg mb-2">
                <Icon className="text-2xl text-[#ff0000]" />
              </div>
              {idx < data.length - 1 && (
                <div className="h-16 w-1 bg-gradient-to-b from-[#ff0000] to-[#181c23]" />
              )}
            </div>
            {/* Right side for odd, left for even */}
            {idx % 2 !== 0 ? (
              <div className="w-5/12 text-left pl-8">
                <div className="text-2xl font-bold text-white mb-1">{item.type}</div>
                <div className="text-lg font-semibold text-[#ff0000]">{isEducation ? item.institution : item.company}</div>
                <div className="text-sm text-gray-400 mb-1">{isEducation ? item.location : item.role}</div>
                <div className="text-sm text-gray-300 mb-1">{isEducation ? item.years : item.location}</div>
                <div className="text-sm text-gray-300 mb-1">{!isEducation && item.years}</div>
                <div className="text-sm text-gray-200 italic">{item.details}</div>
              </div>
            ) : <div className="w-5/12" />}
          </div>
        );
      })}
    </div>
  </div>
);

const EducationExperience: React.FC = () => {
  return (
    <section id="education-experience" className="relative py-20 bg-[#0d0d0d]">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-7xl font-bold text-[#ff0000] mb-16 text-center tracking-tight">
          Education & Experience
        </h2>
        <div className="flex flex-col md:flex-row gap-12 md:gap-0">
          {/* Education Timeline */}
          <div className="md:w-1/2 w-full md:pr-8 mb-12 md:mb-0">
            <h3 className="text-3xl font-bold text-white mb-8 text-center md:text-left">Education</h3>
            <Timeline data={educationData} isEducation />
          </div>
          {/* Experience Timeline */}
          <div className="md:w-1/2 w-full md:pl-8">
            <h3 className="text-3xl font-bold text-white mb-8 text-center md:text-left">Experience</h3>
            <Timeline data={experienceData} />
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

export default EducationExperience; 