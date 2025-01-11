import React, { useEffect } from 'react';
import { Github, Linkedin, Mail, User, Code, Briefcase, GraduationCap, ExternalLink, Phone, MapPin, FolderGit2, Globe, Database, Server } from 'lucide-react';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white cursor-none">
      {/* Custom Cursor */}
      <div id="cursor" className="fixed w-4 h-4 bg-blue-500 rounded-full pointer-events-none mix-blend-difference z-50 w-10 h-10 transition-transform duration-100 ease-out" />
      
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3b82f6,transparent)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px]" />
      </div>
      
      {/* Header */}
      <header className="container mx-auto px-4 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none  border-r-4 border-l-4 border-dashed border-blue-500 rounded-full opacity-100" />
        <div className="fade-in opacity-0 transform translate-y-4 transition-all duration-700 ">

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 text-transparent bg-clip-text animate-gradient">
            Devendra Khot
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">Junior Software Developer at CCMT</p>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <a href="hhtp://Github.com" className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gray-800/50 hover:bg-blue-500/20 transition-all duration-300 backdrop-blur-sm">
              <Github size={20} className="group-hover:rotate-12 transition-transform" />
              <span>GitHub</span>
            </a>
            <a href="www.linkedin.com/in/devendra-khot/" className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gray-800/50 hover:bg-blue-500/20 transition-all duration-300 backdrop-blur-sm">
              <Linkedin size={20} className="group-hover:rotate-12 transition-transform" />
              <span>LinkedIn</span>
            </a>
            <a href="mailto:khotdevendra1@example.com" className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gray-800/50 hover:bg-blue-500/20 transition-all duration-300 backdrop-blur-sm">
              <Mail size={20} className="group-hover:rotate-12 transition-transform" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </header>

      {/* About */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in opacity-0 transform translate-y-4 transition-all duration-700">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 border-b border-blue-500/30 pb-4">
              <User className="text-blue-400" />
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  I am a passionate Junior Software Developer currently working at CCMT. 
                  With a strong foundation in web development and a keen eye for detail, 
                  I specialize in creating efficient and scalable solutions.
                </p>
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="text-blue-400" size={18} />
                  <span>Location: Mumbai, India</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Phone className="text-blue-400" size={18} />
                  <span>Contact: 9372471968</span>
                </div>
              </div>
              <div className="bg-gray-800/30 p-6 rounded-lg backdrop-blur-sm border border-gray-700/50">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Quick Facts</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>Full Stack Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>Problem Solving</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>Team Collaboration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in opacity-0 transform translate-y-4 transition-all duration-700">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 border-b border-blue-500/30 pb-4">
              <Code className="text-blue-400" />
              Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: 'JavaScript', level: '90%' },
                { name: 'Node.js', level: '85%' },
                { name: 'React', level: '88%' },
                { name: 'TypeScript', level: '82%' },
                { name: 'HTML/CSS', level: '95%' },
                { name: 'Git', level: '85%' },
                { name: 'MongoDB', level: '80%' },
                { name: 'Express.js', level: '85%' }
              ].map((skill) => (
                <div key={skill.name} className="bg-gray-800/30 p-4 rounded-lg backdrop-blur-sm group hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50">
                  <div className="text-lg mb-2">{skill.name}</div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-700 group-hover:scale-x-110 origin-left"
                      style={{ width: skill.level }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
 {/* Experience */}
 <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in opacity-0 transform translate-y-4 transition-all duration-700">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 border-b border-blue-500/30 pb-4">
              <Briefcase className="text-blue-400" />
              Experience
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-800/30 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50">
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Junior Software Developer</h3>
                    <p className="text-blue-400 mb-2">Central Chinmaya mission trust (CCMT)</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">Present</span>
                </div>
                <p className="text-gray-300 mt-4">
                  Working on developing and maintaining web applications using modern technologies.
                  Collaborating with cross-functional teams to deliver high-quality software solutions.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-700/50 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-gray-700/50 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-gray-700/50 rounded-full text-sm">MongoDB</span>
                  <span className="px-3 py-1 bg-gray-700/50 rounded-full text-sm">Strapi</span>
                  <span className="px-3 py-1 bg-gray-700/50 rounded-full text-sm">MySql</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="fade-in opacity-0 transform translate-y-4 transition-all duration-700">
          <div className="fade-in opacity-0 transform translate-y-4 transition-all duration-700">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 border-b border-blue-500/30 pb-4">
              
            </h2>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-800/30 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50">
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">IT Support and Software Trainer</h3>
                    <p className="text-blue-400 mb-2">Sky Infonet Computer Education</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">february 2022 - November 2024</span>
                </div>
                <p className="text-gray-300 mt-4">
                Design, implement, and manage network systems, including LAN, WAN, WLAN, and VPN. 
                Install, configure, and maintain computer systems software and peripherals.
                I also serve as a dedicated instructor, leading two groups of 20 students each in the instruction of programming languages 
such as HTML & CSS, C & C++, Java, Python, and SQL.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-700/50 rounded-full text-sm">HTML CSS</span>
                  
                  <span className="px-3 py-1 bg-gray-700/50 rounded-full text-sm">JavaScript</span>
                  
                  <span className="px-3 py-1 bg-gray-700/50 rounded-full text-sm">Mysql</span>
                  <span className="px-3 py-1 bg-gray-700/50 rounded-full text-sm">Python</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>

       {/* Education */}
       <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in opacity-0 transform translate-y-4 transition-all duration-700">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 border-b border-blue-500/30 pb-4">
              <GraduationCap className="text-blue-400" />
              Education
            </h2>
            <div className="bg-gray-800/30 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50">
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">Bachelor of Science in Information Technology</h3>
                  <p className="text-blue-400">Mumbai  University</p>
                </div>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">2023</span>
              </div>
              <p className="text-gray-300 mt-4">
              A program focused on developing strong foundations in computing and technology. It includes learning programming languages (C, C++, Java, Python), web development (HTML, CSS, JavaScript), database management (SQL), networking, software development, and data structures. The curriculum also introduces modern topics like artificial intelligence, machine learning, cloud computing, and cybersecurity, equipping graduates with skills to tackle real-world IT challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in opacity-0 transform translate-y-4 transition-all duration-700">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 border-b border-blue-500/30 pb-4">
              <FolderGit2 className="text-blue-400" />
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Project 1 */}
              <div className="group relative bg-gray-800/30 rounded-lg overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" 
                  alt="Project 1" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="relative z-20 p-6 -mt-20">
                  <h3 className="text-xl font-bold mb-2 text-white">E-commerce Platform</h3>
                  <p className="text-gray-300 mb-4">A full-stack e-commerce solution with real-time Data management.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm backdrop-blur-sm">React</span>
                    
                    <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm backdrop-blur-sm">Node.js</span>
                    <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm backdrop-blur-sm">MongoDB</span>
                  </div>
                  <div className="flex gap-4">
                    {/* <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                      <Globe size={16} />
                      <span>Live Demo</span>
                    </a> */}
                    {/* <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                      <Github size={16} />
                      <span>Code</span>
                    </a> */}
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="group relative bg-gray-800/30 rounded-lg overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80" 
                  alt="Project 2" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="relative z-20 p-6 -mt-20">
                  <h3 className="text-xl font-bold mb-2 text-white">NGO Website </h3>
                  <p className="text-gray-300 mb-4">Static pages of NGO Organization and Donate page that integrated with Razorpay Payment Gateway</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm backdrop-blur-sm">HTML</span>
                    <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm backdrop-blur-sm">CSS</span>
                    <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm backdrop-blur-sm">JAvaScript </span>
                  
                    <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm backdrop-blur-sm">MySql </span>
                  </div>
                  {/* <div className="flex gap-4">
                    <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                      <Globe size={16} />
                      <span>Live Demo</span>
                    </a>
                    <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </div> */}
                </div>
              </div>

              {/* Project 3 */}
              <div className="group relative bg-gray-800/30 rounded-lg overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
                  alt="Project 3" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="relative z-20 p-6 -mt-20">
                  <h3 className="text-xl font-bold mb-2 text-white">Event Management </h3>
                  <p className="text-gray-300 mb-4">The Project is For Event Planing its having Admin Login and Student Login It store all data in Array.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm backdrop-blur-sm">HTML</span>
                    <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm backdrop-blur-sm">CSS</span>
                    <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm backdrop-blur-sm">JavaScript</span>
                  </div>
                  {/* <div className="flex gap-4">
                    <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                      <Globe size={16} />
                      <span>Live Demo</span>
                    </a>
                    <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </div> */}
                </div>
              </div>

              {/* Project 4 */}
              <div className="group relative bg-gray-800/30 rounded-lg overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=800&q=80" 
                  alt="Project 4" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="relative z-20 p-6 -mt-20">
                  <h3 className="text-xl font-bold mb-2 text-white">JSP</h3>
                  <p className="text-gray-300 mb-4">It is client base Project having students Coruses and Information of institute.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm backdrop-blur-sm">React</span>
                    <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm backdrop-blur-sm">Html</span>
                    <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm backdrop-blur-sm">Css</span>
                  </div>
                  <div className="flex gap-4">
                    <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                      <Globe size={16} />
                      <span>Live Demo</span>
                    </a>
                    {/* <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                      <Github size={16} />
                      <span>Code</span>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

     

      {/* Footer */}
      {/* <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
        <div className="max-w-4xl mx-auto border-t border-gray-800 pt-8">
          <p>© 2024 Devendra Khot. All rights reserved.</p>
        </div>
      </footer> */}
       <footer className="container mx-auto px-4 py-16 text-center bg-gray-900/90 border-t border-gray-700">
        <p className="text-gray-400 mb-4">&copy; 2025 Devendra Khot. All Rights Reserved.</p>
    
       
       
      </footer>
    </div>
  );
}

export default App;