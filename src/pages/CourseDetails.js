import React from 'react';
import { useParams } from 'react-router-dom';
import './CourseDetails.css';
import { useState } from 'react';

function CourseDetails() {
  const { id } = useParams();
  const [activeWeek, setActiveWeek] = useState(null);

  const toggleWeek = (weekNumber) => {
    setActiveWeek(activeWeek === weekNumber ? null : weekNumber);
  };

  // Course data for Network Penetration Testing (id: 1)
  const courseData = {
    id: 1,
    title: "Network Penetration Testing",
    description: "Master advanced network penetration testing techniques and methodologies.",
    level: "Advanced",
    duration: "12 Weeks",
    price: {
      amount: 299.99,
      original: 399.99,
      discount: "25% off"
    },
    learningPath: [
      {
        phase: "Phase 1: Fundamentals",
        topics: [
          "Network Security Basics",
          "TCP/IP Protocol Suite",
          "Common Network Vulnerabilities"
        ]
      },
      {
        phase: "Phase 2: Reconnaissance",
        topics: [
          "Information Gathering",
          "Network Mapping",
          "Service Enumeration"
        ]
      },
      {
        phase: "Phase 3: Exploitation",
        topics: [
          "Vulnerability Assessment",
          "Exploitation Techniques",
          "Post-Exploitation"
        ]
      }
    ],
    syllabus: [
      {
        week: 1,
        title: "Introduction to Cybersecurity and Networking",
        lessons: [
          {
            title: "Fundamentals of Cybersecurity and Networking",
            topics: [
              "Basics of Cybersecurity",
              "Fundamental Networking Concepts",
              "Understanding IP Addressing, Subnetting, and Protocols"
            ],
            practice: "Network Configuration Lab",
            assignment: "Basic Network Setup and Analysis"
          }
        ]
      },
      {
        week: 2,
        title: "Operating System Essentials",
        lessons: [
          {
            title: "Operating Systems and Command Line",
            topics: [
              "Overview of Linux and Windows",
              "Command Line Basics (Linux and Windows)",
              "File Systems, Permissions, and Processes"
            ],
            practice: "Command Line Operations Lab",
            assignment: "System Administration Tasks"
          }
        ]
      },
      {
        week: 3,
        title: "Network Security Principles",
        lessons: [
          {
            title: "Core Network Security Components",
            topics: [
              "Firewalls, VPNs, and Intrusion Detection/Prevention Systems (IDS/IPS)",
              "Basic Encryption and Cryptography",
              "Network Protocols and Their Vulnerabilities"
            ],
            practice: "Security Tools Configuration Lab",
            assignment: "Network Security Implementation"
          }
        ]
      },
      {
        week: 4,
        title: "Penetration Testing Fundamentals",
        lessons: [
          {
            title: "Introduction to Penetration Testing",
            topics: [
              "Ethical Hacking and Legal Aspects",
              "Penetration Testing Methodologies (e.g., PTES, OSSTMM)",
              "Phases of Penetration Testing: Reconnaissance, Scanning, Exploitation, Post-Exploitation, Reporting"
            ],
            practice: "Basic Penetration Testing Lab",
            assignment: "Complete Basic Penetration Test"
          }
        ]
      },
      {
        week: 5,
        title: "Practical Tools and Techniques",
        lessons: [
          {
            title: "Essential Security Tools",
            topics: [
              "Using Nmap for Network Scanning",
              "Wireshark for Traffic Analysis",
              "Metasploit for Exploit Development"
            ],
            practice: "Security Tools Hands-on Lab",
            assignment: "Network Analysis and Exploitation"
          }
        ]
      },
      {
        week: 6,
        title: "Advanced Penetration Testing",
        lessons: [
          {
            title: "Advanced Security Concepts",
            topics: [
              "Exploit Development and Buffer Overflows",
              "Advanced Web Application Security (e.g., SQL Injection, XSS)",
              "Wireless Network Security"
            ],
            practice: "Advanced Exploitation Lab",
            assignment: "Complex Penetration Testing Scenarios"
          }
        ]
      },
      {
        week: 7,
        title: "Reporting and Documentation",
        lessons: [
          {
            title: "Professional Documentation",
            topics: [
              "Writing Comprehensive Penetration Testing Reports",
              "Communicating Findings to Stakeholders",
              "Mitigation Strategies and Recommendations"
            ],
            practice: "Report Writing Workshop",
            assignment: "Final Penetration Testing Report"
          }
        ]
      }
    ],
    certification: {
      title: "Certified Network Penetration Tester",
      requirements: [
        "Complete all course modules",
        "Pass the final assessment with 70% or higher",
        "Complete 5 practical lab assignments",
        "Submit a comprehensive penetration testing report"
      ]
    },
    prerequisites: [
      "Basic networking knowledge",
      "Understanding of Linux operating system",
      "Familiarity with command-line interfaces",
      "Basic scripting knowledge"
    ]
  };

  if (!courseData) {
    return <div>Course not found</div>;
  }

  return (
    <div className="course-details-page">
      <div className="course-content">
        <div className="content-grid">
          <div className="main-content">
            {/* Course Header */}
            <section className="course-header">
              <div className="course-title">
                <span className="difficulty-badge">{courseData.level}</span>
                <h1>{courseData.title}</h1>
                <p className="description">{courseData.description}</p>
              </div>
            </section>

            {/* Prerequisites */}
            <section className="prerequisites">
              <h2>Prerequisites</h2>
              <ul>
                {courseData.prerequisites.map((prereq, index) => (
                  <li key={index}>{prereq}</li>
                ))}
              </ul>
            </section>

            {/* Learning Path */}
            <section className="learning-path">
              <h2>Learning Path</h2>
              {courseData.learningPath.map((phase, index) => (
                <div key={index} className="phase-card">
                  <h3>{phase.phase}</h3>
                  <ul>
                    {phase.topics.map((topic, topicIndex) => (
                      <li key={topicIndex}>{topic}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Detailed Syllabus */}
            <section className="detailed-syllabus">
              <h2>Course Syllabus</h2>
              {courseData.syllabus.map((week, index) => (
                <div key={index} className="week-card">
                  <div 
                    className={`week-header ${activeWeek === week.week ? 'active' : ''}`}
                    onClick={() => toggleWeek(week.week)}
                  >
                    <h3>
                      Week {week.week}: {week.title}
                    </h3>
                    <span className="toggle-icon">▼</span>
                  </div>
                  <div className={`week-content ${activeWeek === week.week ? 'active' : ''}`}>
                    {week.lessons.map((lesson, lessonIndex) => (
                      <div key={lessonIndex} className="lesson-content">
                        <h4>{lesson.title}</h4>
                        <div className="lesson-topics">
                          <h5>Topics Covered:</h5>
                          <ul>
                            {lesson.topics.map((topic, topicIndex) => (
                              <li key={topicIndex}>{topic}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="lesson-practice">
                          <h5>Hands-on Practice:</h5>
                          <p>{lesson.practice}</p>
                        </div>
                        <div className="lesson-assignment">
                          <h5>Assignment:</h5>
                          <p>{lesson.assignment}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            {/* Certification */}
            <section className="certification">
              <h2>Certification</h2>
              <h3>{courseData.certification.title}</h3>
              <div className="certification-requirements">
                <h4>Requirements:</h4>
                <ul>
                  {courseData.certification.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Enrollment Section */}
            <section className="enrollment-section">
              <div className="enrollment-card">
                <h2>Ready to Start Learning?</h2>
                <div className="enrollment-info">
                  <span className="free-course-badge">Free Course</span>
                  <p className="enrollment-description">
                    This course is completely free. Start learning now!
                  </p>
                </div>
                <button className="btn-enroll">
                  Enroll Now - Free
                </button>
                <div className="enrollment-features">
                  <div className="feature">
                    <span>✓</span>
                    <p>Full Course Access</p>
                  </div>
                  <div className="feature">
                    <span>✓</span>
                    <p>Practice Labs</p>
                  </div>
                  <div className="feature">
                    <span>✓</span>
                    <p>Community Support</p>
                  </div>
                  <div className="feature">
                    <span>✓</span>
                    <p>Certificate of Completion</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;