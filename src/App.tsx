import React, { useState } from 'react';
import { 
  Mail, GraduationCap, Briefcase, Award, Github, Linkedin, Download, 
  Code, Cpu, BarChart, Brain, Database, Camera, Globe, Smartphone, Wifi 
} from 'lucide-react';

import { FaRocket } from 'react-icons/fa'; 

function App() {
  const [activeSection, setActiveSection] = useState('about');




  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  
  


  const skills = [
    // Languages
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      name: "JavaScript",
      description: "JavaScript for Frontend and Backend Programming."
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      name: "TypeScript",
      description: "TypeScript for Building Large-Scale JavaScript Applications."
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      name: "Python",
      description: "Python for General-Purpose Programming and Automation."
    },
  
    // Frameworks
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      name: "React.js",
      description: "React.js for Frontend and User-Interface Development."
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      name: "Next.js",
      description: "Next.js for Frontend and Backend Both Development."
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      name: "Node.js",
      description: "Node.js for Backend Development."
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      name: "Express.js",
      description: "Express.js for Backend API Development."
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-original.svg",
      name: "Django",
      description: "Django for Backend Development and API Creation."
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
      name: "Flask",
      description: "Flask for Lightweight Backend API Development."
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
      name: "WordPress",
      description: "WordPress for Website Development and Content Management."
    },
  
    // Databases
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      name: "MongoDB",
      description: "MongoDB for NoSQL Database Management."
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      name: "PostgreSQL",
      description: "PostgreSQL for Relational Database Management."
    }
  ];
  

  const projects = [
    {
      title: "GrocerU Inventory App",
      description: "Full-stack app to manage grocery items with AI-powered categorization",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000",
      technologies: ["Flask", "SQLite", "AI", "HTML", "CSS", "Bootstrap", "Javascript", "Python"],
      link: "https://github.com/SuveshaUpreti/GrocerU"
    },
    {
      title: "Personal Portfolio Website",
      description: "Enhanced site performance with responsive design and dynamic project data",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1000",
      technologies: ["React.js", "Node.js", "TailwindCSS", "APIs", "JavaScript", "TypeScript", "Vite"],
      link: "https://github.com/SuveshaUpreti/PersonalPortfolio"
    },
    {
      title: "Climate Change Awareness Website",
      description: "Increased user engagement by 30% through responsive design and dynamic features",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/SuveshaUpreti/ClimateChangeAwareness"
    },
   
      {
        title: "Predicting Spotify Track Popularity Based on Key Audio Features",
        description: "Analyzed Spotify dataset to predict track popularity using machine learning models",
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=1000",
        technologies: ["Python", "Pandas", "Scikit-learn", "SMOTE", "Matplotlib", "Kaggle Dataset"],
        link: "https://github.com/SuveshaUpreti/ML"
      },
      {
        title: "CareerLaunch: AI-powered Cover Letter Generator",
        description: "Full-stack app that generates professional cover letters using AI",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000",
        technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "JWT", "Gemini API"],
        link: "https://github.com/SuveshaUpreti/CareerLaunch"
      },
      {
        title: "MathApp: Enhance Your Math Skills",
        description: "Math skills enhancement app with two game modes and real-time scoring",
        image: "/Portfolio/images/math.png",
        technologies: ["Next.js", "React", "Tailwind CSS", "Jest", "React Testing Library"],
        link: "https://github.com/SuveshaUpreti/MathGameApp"
      }
    ];
    

  
  const technicalSkills = [
    ["Languages", "C++", "Python", "Java", "SQL", "NoSQL", "Swift", "JavaScript", "TypeScript"],
    ["Frameworks & Libraries", "React.js", "Next.js", "React Native", "Angular", "Vue", "Bootstrap"],
    ["Cloud & Databases", "AWS", "Google Cloud", "PostgreSQL", "MySQL", "PgAgent", "MongoDB"],
    ["Version Control & Tools", "Git", "GitHub", "Bitbucket", "Jira"],
    ["Development Tools", "Visual Studio Code", "Gradle", "Docker", "Postman"],
    ["APIs", "REST APIs", "GraphQL"],
    ["Testing", "Jest", "Mocha", "Chai", "JUnit", "TypeScript Testing", "Cypress"],
    ["CI/CD", "Jenkins", "GitLab CI", "CircleCI", "Travis CI", "GitHub Actions", "Docker CI/CD"],
    ["Mobile Development", "React Native", "Expo", "SwiftUI", "Objective-C", "Xcode", "React Navigation"],
 [ "Problem-solving",
      "Critical Thinking",
      "Integrity",
      "Self-learning",
      "Leadership",
      "Communication"
    ]
  ];
  
  
  const softSkills = [
   
      "JavaScript Essential Training (LinkedIn Learning)",
      "TypeScript for JavaScript Developers (LinkedIn Learning)",
      "React.js Essential Training (LinkedIn Learning)",
      "Programming Foundations: Version Control with Git (LinkedIn Learning)",
      "Become a Full-Stack Web Developer (LinkedIn Learning)",
      "Amazon Web Services Training",
      "PostgreSQL Certified Professional",
      "CI/CD Pipelines with Jenkins Certification",
      "Dean's List Certification (Excellence in Academic Performance)"
    
    
  ];
  
  return (
    <div className="min-h-screen bg-[#0B1120] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative w-[600px] h-[600px]">
              {/* Rotating Skills Circle */}
              <div className="absolute inset-0 animate-spin-slow">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-8 h-8"
                    style={{
                      transform: `rotate(${i * 30}deg) translateY(-240px)`
                    }}
                  >
                    <div className="w-8 h-8 bg-blue-400/20 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
<div className="relative max-w-7xl mx-auto px-4 py-32 flex flex-col md:flex-row items-center justify-between gap-10">

{/* Left Side: Text Content */}
<div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center">
  
  <div className="inline-block bg-[#151B2B]/60 backdrop-blur-lg rounded-full px-6 py-3 mb-8 shadow-lg">
  </div>

  <h1 className="text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
    I'm <span className="gradient-text">Suvesha Upreti</span>
  </h1>

  <h2 className="text-4xl text-gray-300 mb-8 font-medium">
    Full Stack Developer & Tech Enthusiast
  </h2>

  <p className="max-w-2xl text-gray-400 mb-12 leading-relaxed">
    Welcome to my portfolio, where I share my journey as a developer and the projects I’m passionate about!
  </p>

  <div className="flex gap-6 mb-12 justify-center md:justify-start">
    <a href="#contact" className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 transition px-6 py-3 rounded-full text-white font-semibold shadow-md transform hover:scale-105">
      Contact Me
    </a>
  </div>

  <div className="flex gap-6 justify-center md:justify-start">
    <a href="https://github.com/SuveshaUpreti" className="text-gray-400 hover:text-white transition">
      <Github className="w-8 h-8" />
    </a>
    <a href="https://www.linkedin.com/in/suvesha-upreti/" className="text-gray-400 hover:text-white transition">
      <Linkedin className="w-8 h-8" />
    </a>
  </div>
</div>  

{/* Right Side: Profile Image (Fix Position) */}
{/* Right Side: Circular Fancy Profile Image */}
<div className="w-full md:w-1/2 flex justify-center md:justify-end md:items-center">
  <div className="relative w-64 h-64 md:w-80 md:h-80 border-4 border-blue-500 shadow-lg rounded-full overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-105 hover:border-purple-400">
    
    {/* Glowing Border Effect */}
    <div className="absolute inset-0 rounded-full border-4 border-blue-500 animate-pulse"></div>

    {/* Profile Image */}
    <img 
      src="/Portfolio/images/myself.jpg" 
      alt="Suvesha Upreti" 
      className="w-full h-full object-cover rounded-full"
    />
  </div>
</div>


</div>

      </div>

      <nav className="fixed top-0 w-full bg-[#151B2B] z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-2xl font-bold gradient-text">Suvesha Upreti</h1>
            <div className="flex space-x-8">
  {['about', 'skills', 'projects'].map((section) => (
    <button
      key={section}
      onClick={() => {
        setActiveSection(section);
        setTimeout(() => scrollToSection(section), 100); // Delay ensures section is updated
      }}
      className={`text-sm font-medium transition-colors ${
        activeSection === section ? 'text-blue-400' : 'text-gray-400 hover:text-white'
      }`}
    >
      {section.charAt(0).toUpperCase() + section.slice(1)}
    </button>
  ))}
</div>



          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 pt-24 pb-20 space-y-32">
        {/* About Section */}
        {activeSection === 'about' && (
          <section id="about" className="space-y-16 animate-fade-in">
            <div className="text-center space-y-6">
              <h2 className="text-5xl font-bold gradient-text">About Me</h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-gray-400 leading-relaxed">
                  I am passionate about front-end and full-stack development, with expertise in technologies like React.js, JavaScript, and Flask. I hold a Bachelor of Science in Computer Science from Texas State University, San Marcos, where I am a member of the Honors College. My skills include developing dynamic and responsive web applications, improving user engagement, and optimizing performance through modern frameworks and cloud-based technologies such as AWS.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Education */}
              <div className="gradient-border-top bg-[#151B2B] rounded-lg p-8 space-y-6">
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                  <h3 className="text-2xl font-semibold">Education</h3>
                </div>
                <div className="space-y-4">
  <div>
    <p className="text-blue-400">2021 - 2025 (Expected)</p>
    <h4 className="text-xl font-medium">Bachelor of Science in Computer Science, Minor in Mathematics</h4>
    <p className="text-gray-400">Texas State University, San Marcos</p>
    <p className="text-sm text-gray-500">Honors College Member | TXST Merit Scholarship Recipient ($72,000)</p>
  </div>

  {/* Relevant Coursework */}
  {/* Relevant Coursework */}
<div className="mt-6">
  <h4 className="text-xl font-bold text-blue-400 flex items-center gap-2">
    <GraduationCap className="w-6 h-6 text-blue-400" />
    Coursework
  </h4>

  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 text-sm text-gray-400">
    <div className="flex items-center gap-2 bg-[#151B2B] p-3 rounded-lg shadow-md">
      <Briefcase className="w-4 h-4 text-blue-400" />
      <span>Software Engineering Principles</span>
    </div>
    <div className="flex items-center gap-2 bg-[#151B2B] p-3 rounded-lg shadow-md">
      <Code className="w-4 h-4 text-blue-400" />
      <span>Data Structures & Algorithms</span>
    </div>
    <div className="flex items-center gap-2 bg-[#151B2B] p-3 rounded-lg shadow-md">
      <Cpu className="w-4 h-4 text-blue-400" />
      <span>Computer Architecture</span>
    </div>
    <div className="flex items-center gap-2 bg-[#151B2B] p-3 rounded-lg shadow-md">
      <BarChart className="w-4 h-4 text-blue-400" />
      <span>Probability & Statistics</span>
    </div>
    <div className="flex items-center gap-2 bg-[#151B2B] p-3 rounded-lg shadow-md">
      <Brain className="w-4 h-4 text-blue-400" />
      <span>Machine Learning</span>
    </div>
    <div className="flex items-center gap-2 bg-[#151B2B] p-3 rounded-lg shadow-md">
      <Database className="w-4 h-4 text-blue-400" />
      <span>Database Management Systems (DBMS)</span>
    </div>
    <div className="flex items-center gap-2 bg-[#151B2B] p-3 rounded-lg shadow-md">
      <Camera className="w-4 h-4 text-blue-400" />
      <span>Computer Vision</span>
    </div>
    <div className="flex items-center gap-2 bg-[#151B2B] p-3 rounded-lg shadow-md">
      <Code className="w-4 h-4 text-blue-400" />
      <span>Object-Oriented Programming (OOP)</span>
    </div>
    <div className="flex items-center gap-2 bg-[#151B2B] p-3 rounded-lg shadow-md">
      <Globe className="w-4 h-4 text-blue-400" />
      <span>Web Development (Frontend & Backend)</span>
    </div>
    <div className="flex items-center gap-2 bg-[#151B2B] p-3 rounded-lg shadow-md">
      <Smartphone className="w-4 h-4 text-blue-400" />
      <span>Mobile App Development (iOS/Android)</span>
    </div>
    <div className="flex items-center gap-2 bg-[#151B2B] p-3 rounded-lg shadow-md">
      <Wifi className="w-4 h-4 text-blue-400" />
      <span>Computer Networks</span>
    </div>
  </div>
  </div>

  </div>





              </div>

              {/* Experience */}
<div className="gradient-border-top bg-[#151B2B] rounded-lg p-8 space-y-6">
  <div className="flex items-center space-x-3">
    <Briefcase className="w-6 h-6 text-blue-400" />
    <h3 className="text-2xl font-semibold">Experience</h3>
  </div>

  <div className="space-y-8">

    {/* DXC Technology Internship */}
    <div>
      <p className="text-blue-400">June 2023 - August 2023</p>
      <h4 className="text-xl font-medium">Computer Science Intern</h4>
      <p className="text-gray-400">DXC Technology (New Orleans, LA)</p>

      {/* Key Skills */}
      <div className="flex flex-wrap gap-2 mt-2">
        <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">Python</span>
        <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">PostgreSQL</span>
        <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">PgAgent</span>
        <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">AWS</span>
        <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">Cloud Computing</span>
      </div>

      {/* Responsibilities */}
      <ul className="mt-3 text-sm text-gray-400 space-y-2">
  <li> Developed a Python-based automation tool for data processing in Insurance domain, transforming raw text into structured CSV files, significantly reducing manual effort and improving workflow efficiency.</li>
  <li> Enhanced database management by optimizing PostgreSQL queries and automating scheduled tasks with PgAgent, leading to a 20% improvement in query execution speed.</li>
  <li> Gained hands-on experience in cloud computing and enterprise software development through AWS Solution Architect training, focusing on scalable infrastructure and security best practices.</li>
</ul>

    </div>

    {/* Undergraduate Instructor */}
    <div>
      <p className="text-blue-400">September 2021 - Present</p>
      <h4 className="text-xl font-medium">Undergraduate Instructor</h4>
      <p className="text-gray-400">Texas State University</p>

      {/* Key Skills */}
      <div className="flex flex-wrap gap-2 mt-2">
        <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">Mentorship</span>
        <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">Leadership</span>
        <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">Communication</span>
        <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">Problem-Solving</span>
      </div>

      {/* Responsibilities */}
      <ul className="mt-3 text-sm text-gray-400 space-y-2">
  <li> Led and mentored students, fostering a supportive learning environment.</li>
  <li> Helped improve student performance by guiding discussions, simplifying complex topics and collaborating with peers to enhance learning outcomes.</li>
</ul>

    </div>

  </div>
</div>

            </div>

            {/* Contact */}
            <div className="gradient-border-top bg-[#151B2B] rounded-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Mail className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl font-semibold">Contact</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-400">Personal Email</p>
                  <a href="mailto:suvesha2002@gmail.com" className="text-blue-400 hover:text-blue-300">
                    suvesha2002@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-400">University Email</p>
                  <a href="mailto:zun7@txstate.edu" className="text-blue-400 hover:text-blue-300">
                    zun7@txstate.edu
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <section id="skills" className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <h2 className="text-5xl font-bold gradient-text">Skills & Services</h2>
              <p className="text-gray-400 text-lg">
                These are my working Skills & Services I have done.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="gradient-border-top bg-[#151B2B] rounded-lg p-8 flex flex-col items-center text-center space-y-4"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-16 h-16"
                  />
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                  <p className="text-gray-400 text-sm">{skill.description}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <div className="gradient-border-top bg-[#151B2B] rounded-lg p-8 space-y-6">
                <h3 className="text-2xl font-semibold flex items-center gap-3">
                  <Award className="w-6 h-6 text-blue-400" />
                  Technical Skills
                </h3>
                <div className="space-y-4">
                {technicalSkills.map((skillGroup, index) => (
  <div key={index} className="flex flex-wrap items-center gap-2">
    {/* Category Title */}
    <span className="font-bold text-blue-400">{skillGroup[0]}:</span>
    
    {/* Skills */}
    {skillGroup.slice(1).map((skill, skillIndex) => (
      <span
        key={skillIndex}
        className="px-3 py-1 bg-blue-500/10 text-white-400 rounded-full text-sm"
      >
        {skill}
      </span>
    ))}
  </div>
))}

                </div>
              </div>

              <div className="gradient-border-top bg-[#151B2B] rounded-lg p-8 space-y-6">
  <h3 className="text-2xl font-semibold flex items-center gap-3 text-blue-400">
    <Award className="w-6 h-6 text-blue-400" />
    Certifications
  </h3>
  
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    {softSkills.map((cert, index) => (
      <div
        key={index}
        className="bg-blue-500/10 text-white-400 rounded-lg p-4 text-sm font-medium"
      >
        {cert}
      </div>
    ))}
  </div>
</div>

            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <section id="projects" className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <h2 className="text-5xl font-bold">
                <span className="gradient-text">My</span> Projects
              </h2>
              <p className="text-gray-400 text-lg">
              <h3 className="text-2xl font-semibold flex items-center gap-3 text-blue-400">
    <FaRocket className="w-6 h-6 text-blue-400" />
    Here are some of my Projects
  </h3>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  className="project-card block group"
                >
                  <div className="bg-[#151B2B] rounded-lg overflow-hidden">
                    <div className="relative h-48">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#151B2B] to-transparent opacity-60" />
                    </div>
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default App;