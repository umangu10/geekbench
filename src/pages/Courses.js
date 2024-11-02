import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Courses.css';

function Courses() {
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();

  const handleCourseClick = (courseId) => {
    navigate(`/courses/${courseId}`);
  };

  const courses = [
    {
      id: 1,
      title: "Network Penetration Testing",
      category: "advanced",
      level: "Advanced",
      duration: "12 Weeks",
      modules: 15,
      students: "2.5k",
      rating: 4.9,
      description: "Master advanced network penetration testing techniques and methodologies.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
      tags: ["Network Security", "Ethical Hacking", "Penetration Testing"]
    },
    {
      id: 2,
      title: "Web Application Security",
      category: "intermediate",
      level: "Intermediate",
      duration: "8 Weeks",
      modules: 12,
      students: "3.2k",
      rating: 4.8,
      description: "Learn to identify and exploit web vulnerabilities using modern techniques.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      tags: ["Web Security", "OWASP", "Bug Bounty"]
    },
    {
      id: 3,
      title: "Malware Analysis Fundamentals",
      category: "beginner",
      level: "Beginner",
      duration: "6 Weeks",
      modules: 8,
      students: "1.8k",
      rating: 4.7,
      description: "Start your journey in malware analysis and reverse engineering.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      tags: ["Malware", "Reverse Engineering", "Security"]
    }
  ];

  const filteredCourses = filter === 'all' 
    ? courses 
    : courses.filter(course => course.category === filter);

  return (
    <div className="courses-page">
      <div className="courses-hero">
        <div className="cyber-grid"></div>
        <div className="hero-content">
          <h1>Security Training Modules</h1>
          <p>Master cybersecurity through hands-on training and real-world scenarios</p>
        </div>
      </div>

      <div className="courses-container">
        <div className="filter-section">
          <div className="cyber-terminal">
            <div className="terminal-header">
              <span className="terminal-title">SELECT_CATEGORY</span>
            </div>
            <div className="filter-buttons">
              <button 
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                <span className="btn-text">ALL_MODULES</span>
              </button>
              <button 
                className={`filter-btn ${filter === 'beginner' ? 'active' : ''}`}
                onClick={() => setFilter('beginner')}
              >
                <span className="btn-text">LEVEL_1</span>
              </button>
              <button 
                className={`filter-btn ${filter === 'intermediate' ? 'active' : ''}`}
                onClick={() => setFilter('intermediate')}
              >
                <span className="btn-text">LEVEL_2</span>
              </button>
              <button 
                className={`filter-btn ${filter === 'advanced' ? 'active' : ''}`}
                onClick={() => setFilter('advanced')}
              >
                <span className="btn-text">LEVEL_3</span>
              </button>
            </div>
          </div>
        </div>

        <div className="courses-grid">
          {filteredCourses.map(course => (
            <div key={course.id} className="course-card">
              <div className="card-image">
                <img src={course.image} alt={course.title} />
                <div className="card-overlay">
                  <span className={`level-badge ${course.category}`}>
                    {course.level}
                  </span>
                </div>
              </div>
              
              <div className="card-content">
                <h3>{course.title}</h3>
                <p className="description">{course.description}</p>
                
                <div className="tags">
                  {course.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>

                <div className="course-meta">
                  <div className="meta-item">
                    <i className="fas fa-clock"></i>
                    {course.duration}
                  </div>
                  <div className="meta-item">
                    <i className="fas fa-book"></i>
                    {course.modules} Modules
                  </div>
                  <div className="meta-item">
                    <i className="fas fa-users"></i>
                    {course.students} Students
                  </div>
                </div>

                <div className="card-footer">
                  <div className="rating">
                    <span className="stars">{'★'.repeat(Math.floor(course.rating))}</span>
                    <span className="rating-number">{course.rating}</span>
                  </div>
                  <button 
                    onClick={() => handleCourseClick(course.id)} 
                    className="cyber-btn"
                  >
                    Access Module
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;