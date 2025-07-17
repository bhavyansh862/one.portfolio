import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  github?: string;
  demo?: string;
}

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const { language } = useLanguage();

  const projects: Project[] = [
    {
      id: 'project-1',
      title: 'Instagram Post Automation',
      description: 'Automate Instagram post creation and publishing using Python. Streamline your social media workflow with this Jupyter Notebook project.',
      techStack: ['Python', 'Jupyter Notebook', 'Selenium', 'Instagram API'],
      image: 'https://images.pexels.com/photos/248533/pexels-photo-248533.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/bhavyansh862/python-projects/blob/5c80ce76535a19fce9432abfbcb3e52c3e9c57f4/insta%20post.ipynb',
      // demo: '' // Optionally remove or leave blank
    },
    {
      id: 'project-2',
      title: 'Cloud Security Dashboard',
      description: 'Real-time cybersecurity monitoring and threat detection system',
      techStack: ['React', 'Node.js', 'AWS', 'Kubernetes', 'MongoDB'],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/bhavyansh862',
      demo: 'https://demo.example.com'
    },
    {
      id: 'project-3',
      title: 'DevOps Automation Suite',
      description: 'Complete CI/CD pipeline with automated deployment and monitoring',
      techStack: ['Jenkins', 'Docker', 'Kubernetes', 'Terraform', 'Ansible'],
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/bhavyansh862',
      demo: 'https://demo.example.com'
    },
    {
      id: 'project-4',
      title: 'Blockchain Analytics Tool',
      description: 'Advanced cryptocurrency transaction analysis and visualization platform',
      techStack: ['Python', 'Web3.py', 'React', 'D3.js', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/bhavyansh862',
      demo: 'https://demo.example.com'
    },
    {
      id: 'project-5',
      title: 'IoT Device Manager',
      description: 'Centralized management system for IoT devices with real-time monitoring',
      techStack: ['Node.js', 'MQTT', 'InfluxDB', 'Grafana', 'Docker'],
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/bhavyansh862',
      demo: 'https://demo.example.com'
    },
    {
      id: 'project-6',
      title: 'Machine Learning Pipeline',
      description: 'Automated ML model training and deployment pipeline with MLOps practices',
      techStack: ['Python', 'TensorFlow', 'Kubeflow', 'MLflow', 'Apache Airflow'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/bhavyansh862',
      demo: 'https://demo.example.com'
    },
    {
      id: 'project-7',
      title: 'Microservices Architecture',
      description: 'Scalable microservices system with service mesh and observability',
      techStack: ['Go', 'gRPC', 'Istio', 'Prometheus', 'Jaeger'],
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/bhavyansh862',
      demo: 'https://demo.example.com'
    },
    {
      id: 'project-8',
      title: 'Real-time Chat Application',
      description: 'High-performance chat application with WebSocket and Redis clustering',
      techStack: ['Node.js', 'Socket.io', 'Redis', 'React', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/bhavyansh862',
      demo: 'https://demo.example.com'
    },
    {
      id: 'project-9',
      title: 'API Gateway & Rate Limiter',
      description: 'High-performance API gateway with advanced rate limiting and caching',
      techStack: ['Nginx', 'Lua', 'Redis', 'Prometheus', 'Docker'],
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/bhavyansh862',
      demo: 'https://demo.example.com'
    },
    {
      id: 'project-10',
      title: 'Distributed File System',
      description: 'Fault-tolerant distributed file system with automatic replication',
      techStack: ['Go', 'gRPC', 'etcd', 'Docker', 'Kubernetes'],
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/bhavyansh862',
      demo: 'https://demo.example.com'
    }
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 5);
  const itemsPerSlide = 3;
  const maxIndex = Math.max(0, Math.ceil(visibleProjects.length / itemsPerSlide) - 1);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      end: "bottom 20%",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        
        // Animate slider container
        gsap.to(sliderRef.current, {
          opacity: 1,
          y: -progress * 20,
          duration: 0.3
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const slideLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const slideRight = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleViewAll = () => {
    setShowAll(true);
    setCurrentIndex(0);
  };

  return (
    <div
      id="projects"
      ref={sectionRef}
      className="relative min-h-screen bg-[#0d0d0d] py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-6xl md:text-8xl font-bold text-[#ff0000] mb-20 text-center">
          {language === 'en' ? 'PROJECTS' : 'PROJETS'}
        </h2>
        
        {/* Horizontal Slider */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={slideLeft}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#ff0000] bg-opacity-20 border border-[#ff0000] rounded-full p-3 hover:bg-[#ff0000] hover:text-white transition-all duration-300 cursor-magnetic disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={slideRight}
            disabled={currentIndex === maxIndex}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#ff0000] bg-opacity-20 border border-[#ff0000] rounded-full p-3 hover:bg-[#ff0000] hover:text-white transition-all duration-300 cursor-magnetic disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slider Container */}
          <div className="overflow-hidden mx-12">
            <div
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`
              }}
            >
              {Array.from({ length: Math.ceil(visibleProjects.length / itemsPerSlide) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {visibleProjects
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((project) => (
                        <div
                          key={project.id}
                          className="bg-[#0b0303] border border-[#ff0000] border-opacity-30 rounded-lg overflow-hidden hover:border-opacity-100 transition-all duration-300 cursor-magnetic transform hover:scale-105"
                        >
                          <div className="relative overflow-hidden">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-60" />
                            <div className="absolute inset-0 bg-[#ff0000] bg-opacity-0 hover:bg-opacity-20 transition-all duration-300" />
                          </div>
                          
                          <div className="p-6 space-y-4">
                            <h3 className="text-xl font-bold text-white hover:text-[#ff0000] transition-colors cursor-magnetic">
                              {project.title}
                            </h3>
                            <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">
                              {project.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2">
                              {project.techStack.slice(0, 3).map((tech) => (
                                <span
                                  key={tech}
                                  className="bg-[#ff0000] bg-opacity-20 border border-[#ff0000] rounded-full px-3 py-1 text-xs cursor-magnetic hover:bg-[#ff0000] hover:text-white transition-all duration-300"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                            
                            <div className="flex space-x-3">
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 bg-[#ff0000] text-white px-4 py-2 rounded text-sm hover:bg-[#cc0000] transition-colors cursor-magnetic"
                              >
                                <Github size={16} />
                                <span>GitHub</span>
                              </a>
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 border border-[#ff0000] text-[#ff0000] px-4 py-2 rounded text-sm hover:bg-[#ff0000] hover:text-white transition-colors cursor-magnetic"
                              >
                                <ExternalLink size={16} />
                                <span>{language === 'en' ? 'Demo' : 'Démo'}</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-magnetic ${
                  index === currentIndex
                    ? 'bg-[#ff0000] scale-125'
                    : 'bg-[#ff0000] bg-opacity-30 hover:bg-opacity-60'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* View All Projects Button */}
        {!showAll && (
          <div className="text-center mt-16">
            <button
              onClick={handleViewAll}
              className="bg-[#0b0303] border-2 border-[#ff0000] text-[#ff0000] px-8 py-4 rounded-lg hover:bg-[#ff0000] hover:text-white transition-all duration-300 cursor-magnetic transform hover:scale-105"
            >
              <span className="text-lg font-semibold">
                {language === 'en' ? 'View All Projects' : 'Voir Tous les Projets'}
              </span>
              <div className="mt-1 text-sm opacity-80">
                {language === 'en' ? `+${projects.length - 5} more projects` : `+${projects.length - 5} projets de plus`}
              </div>
            </button>
          </div>
        )}
        
        {/* Project Counter */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center space-x-2 text-gray-400">
            <span className="w-2 h-2 bg-[#ff0000] rounded-full animate-pulse" />
            <span className="text-sm">
              {language === 'en' 
                ? `Showing ${visibleProjects.length} of ${projects.length} projects`
                : `Affichage de ${visibleProjects.length} sur ${projects.length} projets`
              }
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;