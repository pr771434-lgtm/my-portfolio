import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { FiSearch, FiMic } from 'react-icons/fi'; 

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const data = {
    name: "Pawan Rajpoot",
    role: "Full Stack Developer | BCA Student",
    contact: "9713342226 | pr771434@gmail.com",
    skills: ["Java Full Stack", "React", "React Native", "Node.js", "MongoDB", "HTML CSS JS", "Graphics Design", "Video Editing"],
    projects: ["PixelNova Wallpapers", "GyanSetu Coaching", "AidStudy Backend", "Portfolio Website"],
    hobbies: ["🎨 Sketching", "🎮 Gaming", "📸 Photography", "💻 Coding"]
  };

  return (
    <div style={rootContainer}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700;900&display=swap');
        
        .liquid-glass {
          background: linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01));
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4), 
                      inset 0 0 15px rgba(255,255,255,0.05);
          position: relative;
          overflow: hidden;
          transition: 0.4s ease;
        }

        .liquid-glass::after {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.8), transparent);
          box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
          z-index: 2;
        }

        .search-input {
          background: transparent;
          border: none;
          color: white;
          width: 100%;
          font-family: 'Poppins', sans-serif;
          font-size: 0.9rem;
          outline: none;
          margin-left: 12px;
        }
        
        .search-bar-container:focus-within {
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
          border-color: rgba(139, 92, 246, 0.5);
          transform: translateY(-2px);
        }

        .notch-label {
          position: absolute;
          top: -36px;
          left: -1px;
          background: rgba(139, 92, 246, 0.6);
          padding: 8px 25px;
          border-radius: 15px 15px 0 0;
          font-weight: bold;
          font-size: 0.7rem;
          letter-spacing: 2px;
          border: 1px solid rgba(255,255,255,0.2);
          border-bottom: none;
          color: white;
          box-shadow: 0 -5px 15px rgba(139, 92, 246, 0.2);
        }

        /* --- MOBILE SPECIFIC FIXES --- */
        @media (max-width: 768px) {
          .hero-flex-box { flex-direction: column !important; text-align: center; }
          .hero-text-side { order: 1; width: 100%; }
          .about-side-box { order: 2; width: 100% !important; margin-top: 10px; }
          .main-title-text { font-size: 2.8rem !important; line-height: 1.1 !important; }
          .btn-group-mobile { justify-content: center; }
          .notch-card-mobile { padding: 25px 15px !important; }
          .search-bar-mobile { padding: 12px 15px !important; margin-bottom: 20px !important; width: 100%; box-sizing: border-box; }
        }
      `}</style>

      {init && (
        <Particles
          options={{
            fullScreen: { enable: true, zIndex: 0 },
            particles: {
              number: { value: 30 },
              color: { value: "#8b5cf6" },
              opacity: { value: 0.3 },
              size: { value: { min: 1, max: 2 } },
              move: { enable: true, speed: 0.5 },
              links: { enable: true, distance: 150, opacity: 0.1, color: "#a78bfa" }
            }
          }}
        />
      )}

      <div style={contentLayout}>
        {/* Search Bar */}
        <motion.div 
          initial={{ y: -30, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          style={searchBarWrapper} 
          className="liquid-glass search-bar-container search-bar-mobile"
        >
          <FiSearch size={18} color="rgba(255,255,255,0.5)" />
          <input type="text" placeholder="Search universe..." className="search-input" />
          <FiMic size={18} color="rgba(255,255,255,0.3)" style={{cursor: 'pointer'}} />
        </motion.div>

        {/* Hero Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="liquid-glass notch-card-mobile" style={notchCardStyle}>
          <div className="notch-label">IDENTITAS</div>
          <div className="hero-flex-box" style={{ display: "flex", flexWrap: "wrap", gap: "30px", alignItems: "center" }}>
            <div className="hero-text-side" style={{ flex: 1.2 }}>
              <p style={subText}>UI ARCHITECT × DEVELOPER</p>
              <h1 className="main-title-text" style={mainTitle}>PAWAN <br /> <span style={{ color: "#8b5cf6", textShadow: "0 0 20px rgba(139, 92, 246, 0.4)" }}>RAJPOOT</span></h1>
              <p style={{ color: "#cbd5e1", marginBottom: "25px", fontWeight: 300 }}>{data.role}</p>
              <div className="btn-group-mobile" style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <button style={primaryBtn}>Hire Me</button>
                <button style={outlineBtn}>Work Log</button>
              </div>
            </div>
            <div className="about-side-box liquid-glass" style={aboutBox}>
              <h4 style={{ color: "#a5b4fc", marginTop: 0, fontSize: '0.9rem' }}>TENTANG SAYA</h4>
              <p style={{ fontSize: "0.8rem", lineHeight: "1.7", opacity: 0.8 }}>
                BCA student at Holkar Science College. Crafting high-end digital experiences with Java and React.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Technical Grid */}
        <div style={mainGrid}>
          <div className="liquid-glass notch-card-mobile" style={notchCardStyle}>
            <div className="notch-label">KEAHLIAN</div>
            <div style={chipContainer}>
              {data.skills.map((s, i) => <span key={i} style={skillChip}>{s}</span>)}
            </div>
          </div>

          <div className="liquid-glass notch-card-mobile" style={notchCardStyle}>
            <div className="notch-label">PROYEK</div>
            {data.projects.map((p, i) => (
              <motion.div whileHover={{ x: 10, color: "#8b5cf6" }} key={i} style={projectItem}>{p}</motion.div>
            ))}
          </div>
        </div>

        {/* Hobby Section */}
        <div className="liquid-glass notch-card-mobile" style={notchCardStyle}>
          <div className="notch-label">EXPLORATION</div>
          <div style={hobbyGrid}>
            {data.hobbies.map((h, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 92, 246, 0.1)" }} 
                style={hobbyCard}
              >
                {h}
              </motion.div>
            ))}
          </div>
        </div>

        <footer style={footerStyle}>
          CONTACT • {data.contact} • 2026
        </footer>
      </div>
    </div>
  );
}

// Fixed Styles for Mobile
const rootContainer = { minHeight: "100vh", background: "#050a14", backgroundImage: "radial-gradient(circle at 50% 0%, #1e1b4b 0%, #050a14 100%)", color: "white", fontFamily: "'Poppins', sans-serif", overflowX: "hidden" };
const contentLayout = { position: "relative", zIndex: 1, maxWidth: "1100px", margin: "auto", padding: "20px" };
const searchBarWrapper = { display: 'flex', alignItems: 'center', borderRadius: "50px", padding: "14px 25px", marginBottom: "30px" };
const notchCardStyle = { borderRadius: "0 28px 28px 28px", marginTop: "45px", padding: "40px", boxSizing: 'border-box' };
const subText = { color: "#a5b4fc", letterSpacing: "3px", fontSize: "0.7rem", marginBottom: "10px", fontWeight: 700 };
const mainTitle = { fontSize: "clamp(2.5rem, 8vw, 4.5rem)", fontWeight: "900", lineHeight: "0.9", margin: "0" };
const aboutBox = { padding: "25px", borderRadius: "20px", flex: 0.8, boxSizing: 'border-box', minWidth: '250px' };
const primaryBtn = { padding: "12px 28px", borderRadius: "50px", border: "none", background: "#8b5cf6", color: "white", fontWeight: "bold", cursor: "pointer" };
const outlineBtn = { padding: "10px 28px", borderRadius: "50px", border: "1px solid rgba(139, 92, 246, 0.5)", background: "transparent", color: "white", cursor: "pointer" };
const mainGrid = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "25px" };
const chipContainer = { display: "flex", flexWrap: "wrap", gap: "8px" };
const skillChip = { padding: "8px 18px", borderRadius: "50px", background: "rgba(139, 92, 246, 0.1)", border: "1px solid rgba(139, 92, 246, 0.2)", fontSize: "0.75rem", color: "#a5b4fc" };
const projectItem = { padding: "15px", borderRadius: "15px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", marginTop: "12px", cursor: "pointer", fontSize: "0.9rem" };
const hobbyGrid = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "15px" };
const hobbyCard = { padding: "20px", borderRadius: "20px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", textAlign: "center", cursor: "pointer" };
const footerStyle = { textAlign: "center", marginTop: "80px", opacity: 0.4, fontSize: "0.7rem", letterSpacing: "2px" };

export default App;