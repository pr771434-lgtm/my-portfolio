import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const data = {
    name: "Pawan Rajpoot",
    role: "Full Stack Developer | BCA Student",
    skills: ["Java Full Stack", "React", "C++", "HTML/CSS/JS", "Video Editing", "Graphic Design"],
    projects: [
      {
        title: "E-Commerce System",
        summary: "Java Full Stack ka use karke banaya gaya ek platform jisme user authentication aur cart system hai.",
        image: "https://via.placeholder.com/300x180/112240/64ffda?text=Project+1", // Yahan apni image link dalein
        tech: ["Java", "Spring Boot", "MySQL"],
        demo: "#",
        code: "https://github.com/pr771434-lgtm"
      },
      {
        title: "Animated Portfolio",
        summary: "Framer Motion aur Particles.js ka use karke banaya gaya ek futuristic interactive portfolio.",
        image: "https://via.placeholder.com/300x180/112240/64ffda?text=Project+2",
        tech: ["React", "Framer Motion", "Vercel"],
        demo: "#",
        code: "https://github.com/pr771434-lgtm"
      }
    ],
    experience: [
      { role: "Teacher", org: "Pushp Foundation", year: "2023-2025" },
      { role: "Volunteer", org: "Robinhood Army", year: "2022-2023" }
    ],
    hobbies: ["🎨 Sketching", "🎮 Gaming", "📸 Photography", "💻 Coding"]
  };

  const particlesOptions = {
    background: { color: { value: "#0a192f" } },
    fpsLimit: 120,
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" } },
      modes: { repulse: { distance: 100, duration: 0.4 } },
    },
    particles: {
      color: { value: "#64ffda" },
      links: { color: "#64ffda", distance: 150, enable: true, opacity: 0.2 },
      move: { enable: true, speed: 1.5 },
      number: { value: 70 },
      size: { value: { min: 1, max: 2 } },
    },
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: '#ccd6f6', minHeight: '100vh', backgroundColor: '#0a192f' }}>
      {init && <Particles options={particlesOptions} style={{ position: 'absolute', zIndex: 0 }} />}

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', margin: 'auto', padding: '20px' }}>
        
        {/* Hero Section */}
        <motion.header 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ textAlign: 'center', padding: '100px 0' }}
        >
          <motion.div
            animate={{ boxShadow: ["0 0 20px #64ffda", "0 0 50px #64ffda", "0 0 20px #64ffda"] }}
            transition={{ repeat: Infinity, duration: 3 }}
            style={{ width: '100px', height: '100px', borderRadius: '50%', border: '2px solid #64ffda', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold' }}
          >
            PR
          </motion.div>
          <h1 style={{ fontSize: '3.5rem', margin: '0', color: '#64ffda' }}>{data.name}</h1>
          <p style={{ fontSize: '1.2rem', color: '#8892b0' }}>{data.role}</p>
        </motion.header>

        {/* Projects Section */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ color: '#e6f1ff', borderBottom: '1px solid #233554', paddingBottom: '10px' }}>Featured Projects</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '30px' }}>
            {data.projects.map((proj, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                style={{ background: '#112240', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 10px 30px -15px rgba(2,12,27,0.7)' }}
              >
                <img src={proj.image} alt={proj.title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
                <div style={{ padding: '20px' }}>
                  <h3 style={{ color: '#e6f1ff', margin: '0 0 10px 0' }}>{proj.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#8892b0' }}>{proj.summary}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', margin: '15px 0' }}>
                    {proj.tech.map(t => <span key={t} style={{ fontSize: '0.7rem', color: '#64ffda' }}>#{t}</span>)}
                  </div>
                  <div style={{ display: 'flex', gap: '15px' }}>
                    <a href={proj.code} target="_blank" rel="noreferrer" style={{ color: '#64ffda', textDecoration: 'none', fontSize: '0.8rem', border: '1px solid #64ffda', padding: '5px 10px', borderRadius: '4px' }}>GitHub</a>
                    <a href={proj.demo} style={{ color: '#0a192f', backgroundColor: '#64ffda', textDecoration: 'none', fontSize: '0.8rem', padding: '5px 10px', borderRadius: '4px', fontWeight: 'bold' }}>Live Demo</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Hobbies Section */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ color: '#e6f1ff', borderBottom: '1px solid #233554', paddingBottom: '10px' }}>Hobbies & Interests</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginTop: '20px' }}>
            {data.hobbies.map((hobby) => (
              <motion.span 
                key={hobby}
                whileHover={{ scale: 1.1, color: '#64ffda' }}
                style={{ background: 'rgba(100, 255, 218, 0.05)', padding: '10px 25px', borderRadius: '50px', border: '1px solid rgba(100, 255, 218, 0.1)' }}
              >
                {hobby}
              </motion.span>
            ))}
          </div>
        </section>

        {/* Old Experience Section (Retained) */}
        <section>
          <h2 style={{ color: '#e6f1ff', borderBottom: '1px solid #233554', paddingBottom: '10px' }}>Experience</h2>
          {data.experience.map((exp, i) => (
            <div key={i} style={{ background: 'rgba(17, 34, 64, 0.7)', padding: '25px', borderRadius: '10px', marginTop: '20px', borderLeft: '4px solid #64ffda' }}>
              <h3 style={{ margin: '0', color: '#ccd6f6' }}>{exp.role}</h3>
              <p style={{ color: '#64ffda', margin: '5px 0' }}>{exp.org} | {exp.year}</p>
            </div>
          ))}
        </section>

        <footer style={{ textAlign: 'center', padding: '100px 0', color: '#8892b0', fontSize: '12px' }}>
          <p>Designed by Pawan Rajpoot | Built with React</p>
        </footer>
      </div>
    </div>
  );
}

export default App;