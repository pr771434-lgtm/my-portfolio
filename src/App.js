import React from 'react';

function App() {
  const data = {
    name: "Pawan Rajpoot",
    location: "Indore, MP",
    email: "pr771434@gmail.com",
    skills: ["Java Full Stack", "C++", "React", "HTML/CSS/JS", "Video Editing", "Graphic Design"],
    experience: [
      { role: "Teacher", org: "Pushp Foundation", year: "2023-2025" },
      { role: "Volunteer", org: "Robinhood Army", year: "2022-2023" }
    ]
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', maxWidth: '900px', margin: 'auto', padding: '20px' }}>
      <header style={{ textAlign: 'center', padding: '50px 0', borderBottom: '2px solid #eee' }}>
        <h1 style={{ fontSize: '2.5rem', margin: '0' }}>{data.name}</h1>
        <p style={{ color: '#666' }}>BCA Student @ Holkar Science College</p>
        <div style={{ marginTop: '10px' }}>
          <a href={`mailto:${data.email}`} style={{ marginRight: '15px', color: '#007bff' }}>Email</a>
          <a href="https://linkedin.com/in/pawan-rajpoot-160394351/" target="_blank" style={{ color: '#007bff' }}>LinkedIn</a>
        </div>
      </header>

      <section style={{ padding: '40px 0' }}>
        <h2>Skills</h2>
        <div style={{ display: 'flex', wrap: 'wrap', gap: '10px' }}>
          {data.skills.map(skill => (
            <span key={skill} style={{ background: '#f0f2f5', padding: '8px 15px', borderRadius: '20px', fontSize: '14px' }}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section style={{ padding: '20px 0' }}>
        <h2>Experience</h2>
        {data.experience.map((exp, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <h3 style={{ margin: '0' }}>{exp.role} - {exp.org}</h3>
            <small style={{ color: '#888' }}>{exp.year}</small>
          </div>
        ))}
      </section>

      <footer style={{ textAlign: 'center', padding: '40px', fontSize: '12px', color: '#aaa' }}>
        Built with React | 2026
      </footer>
    </div>
  );
}

export default App;