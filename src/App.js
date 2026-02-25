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
    role: "Full Stack Developer",
    skills: ["Java Full Stack", "React", "C++", "HTML/CSS/JS", "Video Editing", "Graphic Design"],
    experience: [
      { role: "Teacher", org: "Pushp Foundation", year: "2023-2025" },
      { role: "Volunteer", org: "Robinhood Army", year: "2022-2023" }
    ]
  };

  // Particles Configuration
  const particlesOptions = {
    background: { color: { value: "#0a192f" } },
    fpsLimit: 120,
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" } },
      modes: { repulse: { distance: 100, duration: 0.4 } },
    },
    particles: {
      color: { value: "#64ffda" },
      links: { color: "#64ffda", distance: 150, enable: true, opacity: 0.2, width: 1 },
      move: { enable: true, speed: 1.5 },
      number: { density: { enable: true, area: 800 }, value: 80 },
      opacity: { value: 0.3 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: '#ccd6f6', minHeight: '100vh', position: 'relative' }}>
      {init && <Particles options={particlesOptions} style={{ position: 'absolute', zIndex: -1 }} />}

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: 'auto', padding: '20px' }}>
        
        {/* Animated Hero Section */}
        <motion.header 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{ textAlign: 'center', padding: '100px 0' }}
        >
          <motion.div
            animate={{ boxShadow: ["0 0 20px #64ffda", "0 0 50px #64ffda", "0 0 20px #64ffda"] }}
            transition={{ repeat: Infinity, duration: 3 }}
            style={{ width: '120px', height: '120px', borderRadius: '50%', border: '3px solid #64ffda', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold' }}
          >
            PR
          </motion.div>
          <h1 style={{ fontSize: '4rem', margin: '0', color: '#64ffda' }}>{data.name}</h1>
          <p style={{ fontSize: '1.5rem', color: '#8892b0' }}>{data.role}</p>
        </motion.header>

        {/* Skills Section with Glassmorphism */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ color: '#e6f1ff', borderBottom: '1px solid #233554', paddingBottom: '10px' }}>Skills</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginTop: '20px' }}>
            {data.skills.map((skill) => (
              <motion.span 
                key={skill}
                whileHover={{ y: -5, backgroundColor: "rgba(100, 255, 218, 0.1)" }}
                style={{ border: '1px solid #64ffda', color: '#64ffda', padding: '10px 20px', borderRadius: '4px', fontSize: '14px' }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h2 style={{ color: '#e6f1ff', borderBottom: '1px solid #233554', paddingBottom: '10px' }}>Experience</h2>
          {data.experience.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              style={{ background: 'rgba(17, 34, 64, 0.7)', padding: '25px', borderRadius: '10px', marginTop: '20px', borderLeft: '4px solid #64ffda' }}
            >
              <h3 style={{ margin: '0', color: '#ccd6f6' }}>{exp.role}</h3>
              <p style={{ color: '#64ffda', margin: '5px 0' }}>{exp.org} | {exp.year}</p>
            </motion.div>
          ))}
        </section>

        <footer style={{ textAlign: 'center', padding: '100px 0', color: '#8892b0', fontSize: '14px' }}>
          <p>© 2026 Designed & Built by Pawan Rajpoot</p>
        </footer>
      </div>
    </div>
  );
}

export default App;