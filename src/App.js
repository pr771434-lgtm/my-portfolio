import React from 'react';

function App() {
  const data = {
    name: "Pawan Rajpoot",
    location: "Indore, MP",
    email: "pr771434@gmail.com",
    skills: [
      "Java Full Stack", "C++", "React", "HTML/CSS/JS", 
      "Video Editing", "Graphic Design", "MS Office", 
      "Web Designing", "Management"
    ],
    experience: [
      { 
        role: "Teacher", 
        org: "Pushp Foundation", 
        year: "2023-2025",
        desc: "Taught basic computer and communication skills to students from diverse backgrounds."
      },
      { 
        role: "Volunteer", 
        org: "Robinhood Army", 
        year: "2022-2023",
        desc: "Assisted in food distribution drives and coordinated team events."
      }
    ]
  };

  return (
    <div style={{ fontFamily: 'Segoe UI, Arial, sans-serif', color: '#333', maxWidth: '850px', margin: 'auto', padding: '20px', lineHeight: '1.6' }}>
      
      {/* Header Section */}
      <header style={{ textAlign: 'center', padding: '60px 0', borderBottom: '2px solid #f4f4f4' }}>
        <h1 style={{ fontSize: '2.8rem', margin: '0', color: '#2c3e50' }}>{data.name}</h1>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>BCA Student @ Govt. Holkar Science College</p>
        <div style={{ marginTop: '20px' }}>
          <a href={`mailto:${data.email}`} style={{ marginRight: '20px', color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>Email</a>
          
          {/* rel="noreferrer" add kiya gaya hai Vercel error ko theek karne ke liye */}
          <a 
            href="https://linkedin.com/in/pawan-rajpoot-160394351/" 
            target="_blank" 
            rel="noreferrer" 
            style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}
          >
            LinkedIn
          </a>
        </div>
      </header>

      {/* About Section */}
      <section style={{ padding: '40px 0' }}>
        <h2 style={{ color: '#2c3e50', borderBottom: '2px solid #007bff', display: 'inline-block' }}>Profile</h2>
        <p>I am a motivated and diligent undergraduate student pursuing BCA. I have a keen interest in programming, software development, and teamwork. Eager to learn new technologies and contribute positively to any organisation.</p>
      </section>

      {/* Skills Section */}
      <section style={{ padding: '20px 0' }}>
        <h2 style={{ color: '#2c3e50', borderBottom: '2px solid #007bff', display: 'inline-block' }}>Skills</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '15px' }}>
          {data.skills.map(skill => (
            <span key={skill} style={{ background: '#e9ecef', padding: '8px 18px', borderRadius: '50px', fontSize: '14px', fontWeight: '500' }}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section style={{ padding: '40px 0' }}>
        <h2 style={{ color: '#2c3e50', borderBottom: '2px solid #007bff', display: 'inline-block' }}>Work Experience</h2>
        {data.experience.map((exp, index) => (
          <div key={index} style={{ marginBottom: '25px', marginTop: '15px' }}>
            <h3 style={{ margin: '0', color: '#34495e' }}>{exp.role} — {exp.org}</h3>
            <small style={{ color: '#95a5a6', fontWeight: 'bold' }}>{exp.year}</small>
            <p style={{ margin: '5px 0' }}>{exp.desc}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '60px 0', fontSize: '14px', color: '#bdc3c7', borderTop: '1px solid #f4f4f4' }}>
        Built with React | {new Date().getFullYear()} Pawan Rajpoot
      </footer>
    </div>
  );
}

export default App;