import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function App() {
  const [init, setInit] = useState(false);
  const [activeHobby, setActiveHobby] = useState(null);
  const [activeSkill, setActiveSkill] = useState(null);

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
    
    socials: {
      "🎨 Sketching": {
        insta: "https://www.instagram.com/pr____art?igsh=NXhzc3AxYjd3eDR3",
        yt: "https://youtube.com/@pr-art-ox2cx?si=8Ht6woHktt17eNM7",
        handle: "@pr____art"
      },
      "🎮 Gaming": {
        insta: "https://www.instagram.com/2pr_gamers?igsh=eHR6d3owaTFpMHV4",
        yt: "https://youtube.com/@2prgamers164?si=mAYuD6ZmiV0FhAHC",
        handle: "@2pr_gamers"
      },
      "Video Editing": {
        insta: "https://www.instagram.com/pr____edit?igsh=NzliNnIwejBsZ283",
        yt: "https://youtube.com/@predit-l8h?si=2Y5qMtjn9EKTwCS-",
        handle: "@pr____edit"
      },
      "📸 Photography": {
        insta: "https://www.instagram.com/pr____edit?igsh=NzliNnIwejBsZ283",
        yt: "https://youtube.com/@predit-l8h?si=2Y5qMtjn9EKTwCS-",
        handle: "@pr____edit"
      },
      "💻 Coding": {
        insta: null,
        yt: "https://youtube.com/@codingyourself-k4q?si=kuW2cngnMUpBP_Ou",
        handle: "@codingyourself"
      }
    },

    projects: [
      {
        title: "PixelNova Wallpaper App",
        desc: "React Native aur Expo ka use karke banaya gaya ek high-quality wallpaper application.",
        tech: ["React Native", "Expo", "API"]
      },
      {
        title: "GyanSetu Coaching App",
        desc: "Coaching management ke liye ek platform jisme student records aur backend integration hai.",
        tech: ["Spring Boot", "React", "MySQL"]
      },
      {
        title: "AidStudy Backend",
        desc: "Education support ke liye ek robust backend system jo Spring Boot par based hai.",
        tech: ["Java", "Spring Boot", "Hibernate"]
      }
    ],

    skillGalleries: {
      "Java Full Stack": ["/java_cert.jpg"],
      "React Native": ["/rn_project_ss.jpg"],
      "Graphics Design": ["/design_sample.jpg"],
      "Video Editing": ["/editing_work.jpg"] 
    },

    galleries: {
      "🎨 Sketching": ["/IMG_20241224_234351.jpg", "/IMG_20251205_105912.jpg", "/IMG_20251124_151933.jpg"],
      "🎮 Gaming": ["/gaming1.jpg", "/gaming2.jpg"], 
      "📸 Photography": ["/IMG_20260209_113828.jpg", "/IMG_20251222_070323.jpg", "/WhatsApp Image 2026-03-20 at 8.41.35 AM.jpeg"],
      "💻 Coding": ["/coding1.jpg", "/coding2.jpg"]
    },

    skills: ["Java Full Stack", "C++", "HTML/CSS", "JavaScript", "React Native", "Video Editing", "Graphics Design", "Web Designing"],
    hobbies: ["🎨 Sketching", "🎮 Gaming", "📸 Photography", "💻 Coding"]
  };

  const SocialLinks = ({ category }) => {
    const links = data.socials[category] || data.socials["🎨 Sketching"];
    return (
      <div style={{ marginTop: '25px', display: 'flex', gap: '15px', justifyContent: 'center', borderTop: '1px solid rgba(100, 255, 218, 0.1)', paddingTop: '20px', flexWrap: 'wrap' }}>
        {links.insta && (
          <motion.a href={links.insta} target="_blank" rel="noreferrer" whileHover={{ scale: 1.05 }} style={{ color: '#64ffda', textDecoration: 'none', border: '1px solid #64ffda', padding: '8px 15px', borderRadius: '50px', fontSize: '0.8rem' }}>
            Instagram {links.handle}
          </motion.a>
        )}
        {links.yt && (
          <motion.a href={links.yt} target="_blank" rel="noreferrer" whileHover={{ scale: 1.05 }} style={{ color: '#ff4444', textDecoration: 'none', border: '1px solid #ff4444', padding: '8px 15px', borderRadius: '50px', fontSize: '0.8rem' }}>
            YouTube Channel
          </motion.a>
        )}
      </div>
    );
  };

  const particlesOptions = {
    background: { color: { value: "#050a14" } },
    fpsLimit: 120,
    particles: {
      color: { value: "#64ffda" },
      links: { color: "#64ffda", distance: 150, enable: true, opacity: 0.1 },
      move: { enable: true, speed: 0.8 },
      number: { value: 50 },
      size: { value: { min: 1, max: 2 } },
    }
  };

  const glassStyle = {
    background: "rgba(255, 255, 255, 0.03)",
    backdropFilter: "blur(12px)",
    borderRadius: "24px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.3)",
    padding: "30px",
    marginBottom: "30px"
  };

  return (
    <div style={{ backgroundColor: '#050a14', color: '#ccd6f6', minHeight: '100vh', fontFamily: "'Poppins', sans-serif" }}>
      {init && <Particles options={particlesOptions} style={{ position: 'absolute' }} />}

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', margin: 'auto', padding: '60px 20px' }}>
        
        {/* --- Header --- */}
        <header style={{ textAlign: 'center', padding: '60px 0' }}>
          <motion.div animate={{ boxShadow: ["0 0 20px rgba(100, 255, 218, 0.2)", "0 0 40px rgba(100, 255, 218, 0.4)", "0 0 20px rgba(100, 255, 218, 0.2)"] }} transition={{ repeat: Infinity, duration: 3 }} style={{ width: '110px', height: '110px', borderRadius: '40px', border: '2px solid #64ffda', margin: '0 auto 30px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', fontWeight: 'bold', color: '#64ffda', background: 'rgba(100, 255, 218, 0.05)' }}>PR</motion.div>
          <h1 style={{ fontSize: '4rem', color: '#ffffff', margin: 0, fontWeight: '800' }}>{data.name}</h1>
          <p style={{ fontSize: '1.4rem', color: '#64ffda', fontWeight: '500' }}>{data.role}</p>
        </header>

        {/* --- Projects --- */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '30px' }}>Featured Work</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
            {data.projects.map((proj, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} style={glassStyle}>
                <h3 style={{ color: '#64ffda', margin: '0 0 10px 0' }}>{proj.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#8892b0', lineHeight: '1.6' }}>{proj.desc}</p>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '15px' }}>
                  {proj.tech.map(t => <span key={t} style={{ fontSize: '0.75rem', color: '#64ffda', background: 'rgba(100, 255, 218, 0.1)', padding: '5px 12px', borderRadius: '6px' }}>{t}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- Technical Skills --- */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '30px' }}>Tech Stack</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '15px' }}>
            {data.skills.map(skill => (
              <motion.div 
                key={skill} 
                onClick={() => setActiveSkill(activeSkill === skill ? null : skill)}
                whileHover={{ scale: 1.05, borderColor: '#64ffda', background: 'rgba(100, 255, 218, 0.05)' }}
                style={{ padding: '15px', textAlign: 'center', border: '1px solid rgba(100, 255, 218, 0.2)', borderRadius: '15px', cursor: 'pointer', color: activeSkill === skill ? '#64ffda' : '#ccd6f6' }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
          <AnimatePresence>
            {activeSkill && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} style={{ ...glassStyle, marginTop: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
                  {data.skillGalleries[activeSkill]?.map((img, i) => (
                    <img key={i} src={img} alt={`${activeSkill} work`} style={{ width: '100%', borderRadius: '12px', border: '1px solid rgba(100, 255, 218, 0.1)' }} onError={(e) => { e.target.src="https://via.placeholder.com/200x150?text=Work+Sample"; }} />
                  ))}
                </div>
                {(activeSkill === "Video Editing") && <SocialLinks category="Video Editing" />}
                {(activeSkill === "Graphics Design") && <SocialLinks category="🎨 Sketching" />}
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* --- Hobbies --- */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '30px' }}>Hobbies</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
            {data.hobbies.map(h => (
              <motion.div key={h} onClick={() => setActiveHobby(activeHobby === h ? null : h)} whileHover={{ scale: 1.1 }} style={{ padding: '12px 30px', borderRadius: '50px', border: '1px solid rgba(100, 255, 218, 0.2)', cursor: 'pointer', background: activeHobby === h ? '#64ffda' : 'transparent', color: activeHobby === h ? '#050a14' : '#ccd6f6', fontWeight: '600' }}>{h}</motion.div>
            ))}
          </div>
          <AnimatePresence>
            {activeHobby && (
              <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} style={{ ...glassStyle, marginTop: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                  {data.galleries[activeHobby]?.map((url, i) => (
                    <img key={i} src={url} alt={`${activeHobby} item`} style={{ width: '100%', borderRadius: '15px', border: '1px solid rgba(100, 255, 218, 0.1)' }} onError={(e) => { e.target.src=`https://via.placeholder.com/300?text=${activeHobby}`; }} />
                  ))}
                </div>
                <SocialLinks category={activeHobby} />
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* --- Experience --- */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '30px' }}>Experience</h2>
          <div style={glassStyle}>
            <h3 style={{ color: '#64ffda', margin: 0 }}>Pushp Foundation</h3>
            <p style={{ color: '#ffffff', fontWeight: '600', marginTop: '5px' }}>Teacher | 2023 – 2025</p>
            <ul style={{ color: '#8892b0', marginTop: '15px', lineHeight: '1.8', fontSize: '0.95rem' }}>
              <li>Taught basic computer and communication skills.</li>
              <li>Designed engaging lessons to improve academic performance.</li>
              <li>Collaborated with teams for educational events.</li>
            </ul>
          </div>
          <div style={{ ...glassStyle, borderLeft: '4px solid #8892b0' }}>
            <h3 style={{ color: '#e6f1ff', margin: 0 }}>Robinhood Army</h3>
            <p style={{ color: '#8892b0', fontWeight: 'bold', marginTop: '5px' }}>Volunteer | 2022 – 2023</p>
            <p style={{ color: '#8892b0', marginTop: '10px' }}>Assisted in food distribution drives and awareness campaigns.</p>
          </div>
        </section>

        <footer style={{ textAlign: 'center', padding: '40px 0', color: '#495670', fontSize: '0.85rem' }}>
          © {new Date().getFullYear()} {data.name} | Designed with Neo-Tactile UI
        </footer>
      </div>
    </div>
  );
}

export default App;