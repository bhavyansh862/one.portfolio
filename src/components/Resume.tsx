import React from 'react';

const Resume: React.FC = () => {
  // Path to your PDF file (place your resume PDF in the public folder as resume.pdf)
  const pdfUrl = '/resume.pdf';

  return (
    <section id="resume" className="flex flex-col items-center justify-center min-h-[60vh] bg-[#0d0d0d] py-16">
      <div className="bg-[#181b20] border-2 border-[#ff0000] rounded-xl shadow-lg p-8 max-w-2xl w-full flex flex-col items-center">
        <h2 className="text-4xl font-bold text-[#ff0000] mb-6 text-center">My Resume</h2>
        <p className="text-gray-300 mb-8 text-center max-w-lg">
          Download my CV to learn more about my experience, education, and skills. For more details, feel free to contact me!
        </p>
        <a
          href={pdfUrl}
          download
          className="inline-block bg-[#ff0000] text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#ff3333] transition-colors duration-200 mb-4"
        >
          Download CV
        </a>
        <iframe
          src="https://bhaviiii.netlify.app/resume.pdf"
          title="Resume Preview"
          className="w-full h-96 border-2 border-[#ff0000] rounded-lg mt-4 bg-white"
        />
      </div>
    </section>
  );
};

export default Resume; 
