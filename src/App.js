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
        tech: ["React Native", "Expo", "API"],
        link: "#"
      },
      {
        title: "GyanSetu Coaching App",
        desc: "Coaching management ke liye ek platform jisme student records aur backend integration hai.",
        tech: ["Spring Boot", "React", "MySQL"],
        link: "#"
      },
      {
        title: "AidStudy Backend",
        desc: "Education support ke liye ek robust backend system jo Spring Boot par based hai.",
        tech: ["Java", "Spring Boot", "Hibernate"],
        link: "#"
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
      "📸 Photography": ["/IMG_20260209_113828.jpg", "/IMG_20251222_070323.jpg","/WhatsApp Image 2026-03-20 at 8.41.35 AM.jpeg"],
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
          <motion.a href={links.insta} target="_blank" whileHover={{ scale: 1.05 }} style={{ color: '#64ffda', textDecoration: 'none', border: '1px solid #64ffda', padding: '8px 15px', borderRadius: '50px', fontSize: '0.8rem' }}>
            Instagram {links.handle}
          </motion.a>
        )}
        {links.yt && (
          <motion.a href={links.yt} target="_blank" whileHover={{ scale: 1.05 }} style={{ color: '#ff4444', textDecoration: 'none', border: '1px solid #ff4444', padding: '8px 15px', borderRadius: '50px', fontSize: '0.8rem' }}>
            YouTube Channel
          </motion.a>
        )}
      </div>
    );
  };

  const particlesOptions = {
    background: { color: { value: "#0a192f" } },
    fpsLimit: 120,
    particles: {
      color: { value: "#64ffda" },
      links: { color: "#64ffda", distance: 150, enable: true, opacity: 0.2 },
      move: { enable: true, speed: 1 },
      number: { value: 60 },
      size: { value: { min: 1, max: 2 } },
    }
  };

  return (
    <div style={{ backgroundColor: '#0a192f', color: '#ccd6f6', minHeight: '100vh', fontFamily: "'Poppins', sans-serif" }}>
      {init && <Particles options={particlesOptions} style={{ position: 'absolute' }} />}

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1050px', margin: 'auto', padding: '40px 20px' }}>
        
        <header style={{ textAlign: 'center', padding: '60px 0' }}>
          <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 3 }} style={{ width: '100px', height: '100px', borderRadius: '50%', border: '3px solid #64ffda', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', color: '#64ffda', background: 'rgba(10, 25, 47, 0.8)' }}>PR</motion.div>
          <h1 style={{ fontSize: '3.5rem', color: '#64ffda', margin: 0 }}>{data.name}</h1>
          <p style={{ fontSize: '1.2rem', color: '#8892b0' }}>{data.role}</p>
        </header>

        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ borderBottom: '1px solid #233554', paddingBottom: '10px', color: '#ccd6f6' }}>Featured Projects</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '30px' }}>
            {data.projects.map((proj, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} style={{ background: '#112240', padding: '25px', borderRadius: '12px', border: '1px solid rgba(100, 255, 218, 0.1)' }}>
                <h3 style={{ color: '#64ffda', margin: '0 0 10px 0' }}>{proj.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#8892b0', lineHeight: '1.6' }}>{proj.desc}</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', margin: '15px 0' }}>
                  {proj.tech.map(t => <span key={t} style={{ fontSize: '0.75rem', color: '#64ffda', background: 'rgba(100, 255, 218, 0.1)', padding: '3px 8px', borderRadius: '4px' }}>{t}</span>)}
                </div>
                <button style={{ background: 'transparent', border: '1px solid #64ffda', color: '#64ffda', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' }}>Details</button>
              </motion.div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ borderBottom: '1px solid #233554', paddingBottom: '10px' }}>Technical Skills</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '12px', marginTop: '20px' }}>
            {data.skills.map(skill => (
              <motion.div 
                key={skill} 
                onClick={() => setActiveSkill(activeSkill === skill ? null : skill)}
                whileHover={{ scale: 1.05, borderColor: '#64ffda' }}
                style={{ padding: '12px', textAlign: 'center', border: '1px solid #233554', borderRadius: '8px', cursor: 'pointer', background: activeSkill === skill ? 'rgba(100, 255, 218, 0.1)' : 'transparent', color: activeSkill === skill ? '#64ffda' : '#ccd6f6' }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
          <AnimatePresence>
            {activeSkill && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} style={{ marginTop: '20px', padding: '20px', background: 'rgba(17, 34, 64, 0.5)', borderRadius: '12px', overflow: 'hidden' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
                  {data.skillGalleries[activeSkill]?.map((img, i) => (
                    <img key={i} src={img} alt={`${activeSkill} sample ${i}`} style={{ width: '100%', borderRadius: '8px' }} onError={(e) => { e.target.src="https://via.placeholder.com/200x150?text=Work+Sample"; }} />
                  ))}
                </div>
                {(activeSkill === "Video Editing") && <SocialLinks category="Video Editing" />}
                {(activeSkill === "Graphics Design") && <SocialLinks category="🎨 Sketching" />}
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ borderBottom: '1px solid #233554', paddingBottom: '10px' }}>Hobbies</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '20px' }}>
            {data.hobbies.map(h => (
              <motion.div key={h} onClick={() => setActiveHobby(activeHobby === h ? null : h)} whileHover={{ scale: 1.05 }} style={{ padding: '10px 25px', borderRadius: '50px', border: '1px solid #233554', cursor: 'pointer', background: activeHobby === h ? 'rgba(100, 255, 218, 0.1)' : 'transparent', color: activeHobby === h ? '#64ffda' : '#ccd6f6' }}>{h}</motion.div>
            ))}
          </div>
          <AnimatePresence>
            {activeHobby && (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} style={{ marginTop: '20px', padding: '25px', background: 'rgba(17, 34, 64, 0.5)', borderRadius: '15px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
                  {data.galleries[activeHobby]?.map((url, i) => (
                    <img key={i} src={url} alt={`${activeHobby} ${i}`} style={{ width: '100%', borderRadius: '8px' }} onError={(e) => { e.target.src=`https://via.placeholder.com/300?text=${activeHobby}`; }} />
                  ))}
                </div>
                <SocialLinks category={activeHobby} />
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ borderBottom: '1px solid #233554', paddingBottom: '10px' }}>Work Experience</h2>
          <div style={{ marginTop: '30px' }}>
            <div style={{ background: '#112240', padding: '25px', borderRadius: '12px', borderLeft: '4px solid #64ffda', marginBottom: '20px' }}>
              <h3 style={{ margin: 0, color: '#e6f1ff' }}>Teacher</h3>
              <p style={{ color: '#64ffda', fontWeight: 'bold', margin: '5px 0' }}>Pushp Foundation | 2023 – 2025</p>
              <ul style={{ color: '#8892b0', paddingLeft: '20px', lineHeight: '1.6' }}>
                <li>Taught basic computer and communication skills to students from diverse backgrounds</li>
                <li>Designed and delivered engaging lessons to help students improve their academic performance.</li>
                <li>Assisted in developing educational materials and assessment tools.</li>
                <li>Provided individual support to students, addressing their unique learning needs.</li>
                <li>Collaborated with other teachers and volunteers to organize educational activities and events</li>
              </ul>
            </div>
            <div style={{ background: '#112240', padding: '25px', borderRadius: '12px', borderLeft: '4px solid #8892b0' }}>
              <h3 style={{ margin: 0, color: '#e6f1ff' }}>Volunteer</h3>
              <p style={{ color: '#8892b0', fontWeight: 'bold', margin: '5px 0' }}>Robinhood Army | 2022 – 2023</p>
              <p style={{ color: '#8892b0' }}>Assisted in food distribution and hunger relief campaigns.</p>
            </div>
          </div>
        </section>

        <footer style={{ textAlign: 'center', padding: '40px 0', color: '#8892b0', fontSize: '0.8rem' }}>
          © {new Date().getFullYear()} {data.name} | Built with React
        </footer>
      </div>
    </div>
  );
}

export default App;