import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../../src/assets/styles/Styles.css"

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to DevSpace</h1>
        <p className="hero-text">Your gateway to modern web development</p>
        <button className="cta-button" onClick={() => navigate('/about')}>
          Get Started
        </button>
      </header>

      <section className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">🚀</div>
          <h3>Fast Development</h3>
          <p>Build scalable applications with modern tools and frameworks</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">💡</div>
          <h3>Learn & Grow</h3>
          <p>Access tutorials and resources to enhance your skills</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🛠️</div>
          <h3>Tools & Resources</h3>
          <p>Get started with the best development tools available</p>
        </div>
      </section>

      <section className="info-section">
        <div className="info-content">
          <h2>Why Choose Us?</h2>
          <ul className="features-list">
            <li>Modern Technology Stack</li>
            <li>Expert Guidance</li>
            <li>Hands-on Projects</li>
            <li>Community Support</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Home