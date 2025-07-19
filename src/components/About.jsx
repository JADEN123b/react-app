import React from 'react'
import { useSearchParams } from 'react-router-dom'
import "../../src/assets/styles/Styles.css"  

function About() {
  const [searchParams] = useSearchParams()
  const name = searchParams.get('name') || 'Jayden'

  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About DevSpace</h1>
        <p className="welcome-text">Welcome, {name}!</p>
      </section>

      <section className="about-content">
        <div className="mission-section">
          <h2>Our Mission</h2>
          <p>We strive to provide the best learning experience for developers of all levels.</p>
        </div>

        <div className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <span className="value-icon">🎯</span>
              <h3>Excellence</h3>
              <p>Committed to delivering high-quality education</p>
            </div>
            <div className="value-card">
              <span className="value-icon">🤝</span>
              <h3>Community</h3>
              <p>Building strong developer networks</p>
            </div>
            <div className="value-card">
              <span className="value-icon">💡</span>
              <h3>Innovation</h3>
              <p>Staying ahead with modern technologies</p>
            </div>
          </div>
        </div>

        <div className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <h3>Jayden</h3>
              <p>Lead Instructor</p>
            </div>
            <div className="team-member">
              <h3>jayden</h3>
              <p>Technical Mentor</p>
            </div>
            <div className="team-member">
              <h3>Mike jayden</h3>
              <p>Community Manager</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About