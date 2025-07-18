import React, { useEffect } from 'react';
import { Github, Linkedin, Mail, User, Code, Briefcase, GraduationCap, ExternalLink, Phone, MapPin, FolderGit2, Globe, Database, Server } from 'lucide-react';
import { v4 as uuidv4 } from "uuid";
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
 const trackVisitor = async () => {
      const params = new URLSearchParams(window.location.search);

      // ✅ Extract all tracking info from query string
      const utmParams = {
        utm_source: params.get("utm_source"),
        utm_medium: params.get("utm_medium"),
        gclid: params.get("gclid"),
        fbclid: params.get("fbclid"),
      };

      const assetId = params.get("asset_id") || "unknown-asset";
      const adAccountId = params.get("ad_account_id") || "unknown-account";

      // ✅ Maintain session across reloads
      let sessionId = localStorage.getItem("session_id");
      if (!sessionId) {
        sessionId = uuidv4();
        localStorage.setItem("session_id", sessionId);
      }

      try {
        const res = await fetch("https://visitor-jbk2.onrender.com/api/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userAgent: navigator.userAgent,
            utmParams,
            targetUrl: window.location.href,
            assetId,
            adAccountId,
            sessionId,
            sessionStart: new Date(),
          }),
        });

        const result = await res.json();
        console.log("📦 Backend Response:", result);
      } catch (err) {
        console.error("❌ Visitor tracking failed:", err);
      }
    };

    trackVisitor();
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white cursor-none">

  {/* Floating Resume Download Button */}
  <div className="fixed bottom-8 right-8 z-50 flex items-center">
    {/* Glowing animated ring */}
    <span className="absolute inline-flex h-16 w-16 rounded-full bg-gradient-to-tr from-blue-400 via-purple-500 to-blue-600 opacity-70 blur-lg animate-pulse pointer-events-none"></span>
    <a
      href="/Devendra khot.pdf"
      download
      className="relative flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 shadow-2xl shadow-blue-500/40 border-2 border-white/10 hover:scale-110 hover:shadow-blue-400/70 transition-all duration-300 font-bold text-lg"
      title="Download Resume"
      style={{ boxShadow: '0 8px 32px 0 rgba(59,130,246,0.35)' }}
    >
      {/* Download Icon */}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v12m0 0l-4-4m4 4l4-4m-8 8h12" />
      </svg>
      <span className="animate-pulse">Resume</span>
    </a>
  </div>
  {/* End Floating Resume Download Button */}

  {/* Custom Cursor */}
  <div id="cursor" className="fixed w-4 h-4 bg-blue-500 rounded-full pointer-events-none mix-blend-difference z-50 w-10 h-10 transition-transform duration-100 ease-out" />
      
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3b82f6,transparent)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px]" />
      </div>
      
      {/* Header */}
      <header className="container mx-auto px-4 py-32 text-center relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-blue-500/40 to-transparent pointer-events-none border-r-4 border-l-4 border-dashed border-blue-500 rounded-full opacity-100" />
  
  <div className="fade-in opacity-0 transform translate-y-4 transition-all duration-700">
    
    {/* Name with Gradient and Dynamic Animation */}
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 text-transparent bg-clip-text animate-gradient animate__animated animate__fadeInUp">
      Devendra Khot
    </h1>

    {/* Subtitle with smooth transition */}
    <p className="text-xl md:text-2xl text-gray-300 mb-12 opacity-0 transform translate-y-4 transition-all duration-700 fade-in delay-200 animate__animated animate__fadeInUp">
      Software Developer at CCMT
    </p>

    {/* Social Links with Hover Effects and 3D Transformations */}
    <div className="flex flex-wrap justify-center gap-8 mt-10">
      
      {/* GitHub */}
      <a 
        href="https://github.com/Devendrakhot" target='_blank'
        className="group flex items-center gap-4 px-6 py-4 rounded-full bg-gray-800/60 hover:bg-blue-500/20 transition-all duration-300 backdrop-blur-sm transform hover:scale-110 hover:shadow-2xl hover:rotate-3">
        <Github size={24} className="group-hover:rotate-12 transition-transform duration-300" />
        <span className="font-semibold text-white group-hover:text-blue-400 transition-all">GitHub</span>
      </a>
      
      {/* LinkedIn */}
      <a 
  href="https://www.linkedin.com/in/devendra-khot/" 
  target="_blank" 
  rel="noopener noreferrer"
  className="group flex items-center gap-4 px-6 py-4 rounded-full bg-gray-800/60 hover:bg-blue-500/20 transition-all duration-300 backdrop-blur-sm transform hover:scale-110 hover:shadow-2xl hover:rotate-3">
  <Linkedin size={24} className="group-hover:rotate-12 transition-transform duration-300" />
  <span className="font-semibold text-white group-hover:text-blue-400 transition-all">LinkedIn</span>
</a>

      
      {/* Email */}
      {/* <a 
  href="mailto:khotdevendra1@example.com"
  className="group flex items-center gap-4 px-6 py-4 rounded-full bg-gray-800/60 hover:bg-blue-500/20 transition-all duration-300 backdrop-blur-sm transform hover:scale-110 hover:shadow-2xl hover:rotate-3"
  target="_blank"
  rel="noopener noreferrer"
>
  <Mail size={24} className="group-hover:rotate-12 transition-transform duration-300" />
  <span className="font-semibold text-white group-hover:text-blue-400 transition-all">Email</span>
</a> */}


    </div>
  </div>
</header>



      {/* About */}
      <section className="container mx-auto px-4 py-24">
  <div className="max-w-6xl mx-auto">
    <div className="opacity-0 transform translate-y-4 transition-all duration-700 fade-in">
      <h2 className="text-5xl font-extrabold mb-12 flex items-center gap-4 border-b-4 border-blue-600 pb-6 text-white tracking-tight">
        <User className="text-blue-400 animate-bounce" size={30} />
        About Me
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <p className="text-gray-300 leading-relaxed text-xl">
            I am a passionate Software Developer currently working at CCMT. With a strong foundation in web development and a keen eye for detail, I specialize in creating efficient and scalable solutions.
          </p>
          <div className="flex items-center gap-4 text-gray-300">
            <MapPin className="text-blue-400" size={20} />
            <span>Location: Mumbai, India</span>
          </div>
          <div className="flex items-center gap-4 text-gray-300">
            <Phone className="text-blue-400" size={20} />
            <span>Contact: 9372471968</span>
          </div>
          <div className="flex items-center gap-4 text-gray-300">
            <Mail className="text-blue-400" size={20} />
            <span>Gmail: khotdevendra1@gmail.com</span>
          </div>
        </div>

        <div className="bg-gray-800/30 p-6 rounded-lg backdrop-blur-sm border border-gray-700/50 hover:bg-gray-700/60 transition-all duration-300 hover:border-blue-500/60 transform hover:scale-105">
          <h3 className="text-2xl font-semibold mb-4 text-blue-400">
            Quick Facts
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-4 text-lg text-gray-300 group hover:text-blue-400 transition-all duration-300">
              <span className="w-3 h-3 bg-blue-400 rounded-full group-hover:bg-blue-500 transition-all duration-300"></span>
              <span>Full Stack Development</span>
            </li>
            <li className="flex items-center gap-4 text-lg text-gray-300 group hover:text-blue-400 transition-all duration-300">
              <span className="w-3 h-3 bg-blue-400 rounded-full group-hover:bg-blue-500 transition-all duration-300"></span>
              <span>Problem Solving</span>
            </li>
            <li className="flex items-center gap-4 text-lg text-gray-300 group hover:text-blue-400 transition-all duration-300">
              <span className="w-3 h-3 bg-blue-400 rounded-full group-hover:bg-blue-500 transition-all duration-300"></span>
              <span>Team Collaboration</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Skills */}
      <section className="container mx-auto px-4 py-24">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-5xl font-extrabold mb-12 flex items-center gap-4 border-b-4 border-blue-600 pb-6 text-white tracking-tight">
      <Code className="text-blue-400 animate-bounce" size={30} />
      Skills
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {[
        { name: 'JavaScript', level: '90%' },
        { name: 'Node.js', level: '75%' },
        { name: 'React', level: '65%' },
        { name: 'TypeScript', level: '72%' },
        { name: 'Git', level: '85%' },
        { name: 'MongoDB', level: '50%' },
        { name: 'Express.js', level: '75%' },
        { name: 'Python', level: '80%' },
        { name: 'MySql', level: '85%' },
        { name: 'Strapi', level: '40%' }
      ].map((skill) => (
        <div
          key={skill.name}
          className="group bg-gray-800/40 p-6 rounded-xl backdrop-blur-sm shadow-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
        >
          <div className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-all duration-300">
            {skill.name}
          </div>
          <div className="w-full h-2 bg-gray-700/50 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-700  "
              style={{ width: skill.level }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

 {/* Experience */}
 <section className="container mx-auto px-4 py-24">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-5xl font-extrabold mb-12 flex items-center gap-4 border-b-4 border-blue-600 pb-5 text-white tracking-tight">
      <Briefcase className="text-blue-500 animate-bounce" size={30} />
      Experience
    </h2>

    <div className="relative border-l-4 border-blue-500 pl-6 space-y-12">
      {[
        {
          title: "Software Developer",
          company: "Central Chinmaya Mission Trust (CCMT)",
          duration: "Present",
          description:
            "Working on the full development cycle of high-performance web applications. Collaborating with product managers and designers to create user-centric software that powers the mission’s digital presence.",
          tech: ["Node.js", "React", "MongoDB", "Strapi", "MySQL"],
        },
        {
          title: "Software Trainer",
          company: "Saraswati Computers",
          duration: "October 2023 - November 2024",
          description:
            "I am leading hands-on programming workshops for groups of students, covering everything from basic HTML/CSS to advanced Python and Java. Empowering the next generation of coders with industry-relevant skills.",
          tech: ["Python", "Java", "AI", "MySQL"],
        },
        {
          title: "IT Support & Software Trainer",
          company: "Sky Infonet Computer Education",
          duration: "February 2022 - November 2024",
          description:
            "I play a key role in managing network systems, ensuring seamless connectivity, and offering tech support to ensure smooth operation. I also teach programming and IT infrastructure management to students.",
          tech: ["HTML CSS", "JavaScript", "MySQL", "Python"],
        },
      ].map((exp, idx) => (
        <div key={idx} className="relative pl-6">
          <div className="absolute -left-3 top-2 w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 border-4 border-gray-900 shadow-lg" />
          <div className="group bg-gradient-to-r from-gray-800/80 via-gray-700/60 to-gray-900/80 rounded-3xl p-6 border-2 border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-[1.05] transform">
            <div className="flex justify-between flex-wrap items-center gap-6 mb-4">
              <div>
                <h3 className="text-3xl font-semibold text-white group-hover:text-blue-400 transition-all duration-300 transform group-hover:scale-105">
                  {exp.title}
                </h3>
                <p className="text-blue-400 text-lg font-medium">{exp.company}</p>
              </div>
              <span className="px-4 py-2 bg-blue-600/40 text-blue-100 rounded-full text-xs font-semibold uppercase tracking-wider">
                {exp.duration}
              </span>
            </div>
            <p className="text-gray-300 text-md leading-relaxed mb-4">{exp.description}</p>

            {/* Tech Stack - Initially Hidden, Revealed on Hover */}
            <div className="tech-stack-wrapper opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-wrap gap-4 mt-4">
              {exp.tech.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-gray-700/40 rounded-full text-sm text-white font-medium group-hover:bg-blue-500/30 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



       {/* Education */}
       <section className="container mx-auto px-4 py-20">
  <div className="max-w-7xl mx-auto">
    <div className="opacity-100 transform translate-y-0 transition-all duration-700">
      <h2 className="text-4xl font-extrabold mb-10 flex items-center gap-3 border-b-4 border-blue-600 pb-5 text-white tracking-tight">
        <GraduationCap className="text-blue-500 animate-pulse" size={28} />
        Education
      </h2>

      <div className="group bg-gradient-to-br from-gray-900/60 to-gray-800/60 rounded-3xl border border-gray-700/50 hover:border-blue-500 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02]">
        <div className="p-8 relative z-10">
          <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
            <div>
              <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                Bachelor of Science in Information Technology
              </h3>
              <p className="text-blue-400 font-medium mt-1">Mumbai University</p>
            </div>
            <span className="px-4 py-1 bg-blue-600/30 text-blue-100 rounded-full text-sm font-semibold uppercase tracking-wide">
              2023
            </span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            A comprehensive IT program covering core programming languages like <span className="text-white font-medium">C, C++, Java, Python</span>,
            as well as web development with <span className="text-white font-medium">HTML, CSS, JavaScript</span>. Trained in 
            <span className="text-white font-medium"> database management (SQL), networking, software development,</span> and modern technologies
            including <span className="text-white font-medium">AI, ML, cloud computing,</span> and <span className="text-white font-medium">cybersecurity</span>. 
            Designed to build strong practical and theoretical foundations to solve real-world IT problems.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Projects */}
      <section className="container mx-auto px-4 py-24">
  <div className="max-w-7xl mx-auto">
    <div className="opacity-100 transform translate-y-0 transition-all duration-700">
      <h2 className="text-5xl font-extrabold mb-14 flex items-center gap-3 border-b-4 border-blue-600 pb-6 text-white tracking-tight">
        <FolderGit2 className="text-blue-500 animate-bounce" size={30} />
        Featured Projects
      </h2>

      {/* Move projects outside the map */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
      {[
  {
    title: "Chinmaya Mission Website",
    desc: "Chinmaya Mission is a global spiritual organization founded by Swami Chinmayananda in 1953. It spreads the teachings of Vedanta (the essence of Hindu philosophy)",
    img: "./chinmaya.png",
    tech: ["React", "TypeScript", "Node.js", "MongoDB"],
     link: "https://www.chinmayamission.com/"
 
  },
  {
    title: "Chinmaya 75 Website",
    desc: "75th Birth Anniversary celebration of Chinmaya Mission — a grand, year-long tribute to Pujya Gurudev Swami Chinmayananda",
    img: "./chinmaya75.png",
    tech: ["React", "TypeScript", "Node.js", "MongoDB"]
  },
  {
    title: "Job Skill Pro",
    desc: "It is client base Project having students Coruses and Information of institute.",
    img: "./jsp.png",
    tech: ["React", "HTML", "CSS"],
    link: "https://jspor.netlify.app/"
  },
  {
    title: "Event Management",
    desc: "The Project is For Event Planing its having Admin Login and Student Login It store all data in Array.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://saraswatievent.netlify.app"
  },
  {
    title: "E-commerce Platform",
    desc: "A full-stack e-commerce solution with real-time Data management.",
    img: "e.jpeg",
    tech: ["React", "Node.js", "MongoDB"]
  }
].map((project, index) => (
  <div
    key={index}
    className="group relative flex flex-col items-center text-center bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl overflow-hidden shadow-2xl hover:shadow-blue-500/40 hover:scale-105 transform transition-all duration-500"
  >
    {/* Image */}
    <div className="relative w-full h-56 overflow-hidden">
      <img
        src={project.img}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
    </div>

    {/* Content */}
    <div className="relative z-20 p-6 flex flex-col items-center text-center space-y-4">
      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition duration-300">
        {project.title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
        {project.desc}
      </p>

      <div className="flex flex-wrap justify-center gap-2">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="bg-blue-600/30 text-blue-100 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide backdrop-blur-md"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Live Demo Button */}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-5 py-2 text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-full transition"
        >
          Live Demo
        </a>
      )}
    </div>
  </div>
))}

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
    <footer className="container max-w-full mx-auto px-4 py-16 text-center bg-gray-900/90 border-t border-gray-700 mt-20">
  <div className="max-w-3xl mx-auto">
    {/* Optional: subtle divider or icon */}
    <hr className="border-gray-700 mb-8" />

    {/* Footer text */}
    <p className="text-gray-400 text-sm mb-4">
      &copy; {new Date().getFullYear()} <span className="text-white font-semibold">Devendra Khot</span>. All rights reserved.
    </p>

    {/* Optional: Built with line */}
    <p className="text-gray-500 text-xs mb-6">
      Built with <span className="text-blue-400 font-medium">React</span>, <span className="text-blue-400 font-medium">Tailwind CSS</span>, and 💙
    </p>

    {/* Social Icons / Links (if any) */}
    <div className="flex justify-center gap-6 mt-6">
      <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
        <i className="fab fa-github text-xl"></i>
      </a>
      <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
        <i className="fab fa-linkedin text-xl"></i>
      </a>
      <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-white transition duration-300">
        <i className="fas fa-envelope text-xl"></i>
      </a>
    </div>
  </div>
</footer>

    </div>
  );
}

export default App;
