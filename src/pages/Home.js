import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="cyber-lines"></div>
        <div className="hero-content">
          <div className="hero-left">
            <div className="cyber-tag">
              <span className="tag-bracket">[</span>
              <span className="tag-text">SYSTEM_ACTIVE</span>
              <span className="tag-bracket">]</span>
            </div>
            
            <h1 className="hero-title">
              <div className="glitch-wrapper">
                <span className="line">MASTER THE ART OF</span>
                <span className="line accent">CYBER SECURITY</span>
              </div>
            </h1>

            <div className="hero-description">
              <div className="typing-effect">
                Advanced Security Training Platform
              </div>
              <p className="sub-text">Join the elite force of cyber defenders</p>
            </div>

            <div className="hero-cta">
              <Link to="/courses" className="cyber-btn primary">
                <span className="btn-content">Initialize Training</span>
                <span className="btn-glitch"></span>
              </Link>
              <Link to="/labs" className="cyber-btn secondary">
                <span className="btn-content">Access Labs</span>
                <span className="btn-glitch"></span>
              </Link>
            </div>
          </div>

          <div className="hero-right">
            <div className="cyber-terminal">
              <div className="terminal-header">
                <div className="terminal-buttons">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="terminal-title">SYSTEM_ACCESS</div>
              </div>
              <div className="terminal-window">
                <div className="line">
                  <span className="prompt">$</span>
                  <span className="command">initialize_security_protocol</span>
                </div>
                <div className="line">
                  <span className="output">Loading security modules...</span>
                </div>
                <div className="line">
                  <span className="output">Preparing training environment...</span>
                </div>
                <div className="line">
                  <span className="prompt">$</span>
                  <span className="command">activate_defense_matrix</span>
                </div>
                <div className="line">
                  <span className="output success">System ready. Welcome, recruit.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <h2 className="section-title">Training Modules</h2>
        <div className="features-grid">
          {[
            {
              title: "Penetration Testing",
              description: "Master ethical hacking with real-world scenarios",
              icon: "🔍"
            },
            {
              title: "Network Security",
              description: "Advanced network defense techniques",
              icon: "🌐"
            },
            {
              title: "Malware Analysis",
              description: "Deep dive into malicious code analysis",
              icon: "🔬"
            }
          ].map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="cta-content">
          <h2>Ready to Begin?</h2>
          <p>Start your journey into cybersecurity</p>
          <Link to="/register" className="cyber-btn primary">
            <span className="btn-content">Join Now</span>
            <span className="btn-glitch"></span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;