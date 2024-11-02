import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Profile.css';

function Profile() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');

    if (!user || !token) {
      navigate('/login');
      return;
    }

    // Set the user data directly from localStorage
    setUserData(user);
    setIsLoading(false);

  }, [navigate]);

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await fetch('http://localhost:5000/api/user/enrolled-courses', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (!response.ok) throw new Error('Failed to fetch courses');
        
        const courses = await response.json();
        setEnrolledCourses(courses);
      } catch (error) {
        console.error('Error fetching enrolled courses:', error);
      }
    };

    if (userData) {
      fetchEnrolledCourses();
    }
  }, [userData]);

  if (isLoading) {
    return (
      <div className="profile-loading">
        <div className="loader"></div>
        <p>Loading your profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="profile-error">
        <p>{error}</p>
        <button onClick={() => window.location.reload()} className="retry-button">
          Retry
        </button>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="profile-error">
        <p>No user data found</p>
        <Link to="/login" className="retry-button">
          Go to Login
        </Link>
      </div>
    );
  }

  return (
    <div className="profile-container">
      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-avatar">
          {userData.username[0].toUpperCase()}
        </div>
        <div className="profile-info">
          <h1>{userData.username}</h1>
          <p className="user-email">{userData.email}</p>
          <p className="user-rank">{userData.rank || 'Beginner'}</p>
          <div className="level-indicator">
            <span>Level {userData.level || 1}</span>
            <div className="progress-bar">
              <div 
                className="progress" 
                style={{ width: `${userData.levelProgress || 0}%` }}
              ></div>
            </div>
          </div>
          <p className="join-date">
            Joined: {new Date(userData.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-icon">📚</span>
          <span className="stat-value">
            {userData.stats?.coursesEnrolled || 0}
          </span>
          <span className="stat-label">Courses Enrolled</span>
        </div>
        <div className="stat-card">
          <span className="stat-icon">✅</span>
          <span className="stat-value">
            {userData.stats?.coursesCompleted || 0}
          </span>
          <span className="stat-label">Courses Completed</span>
        </div>
        <div className="stat-card">
          <span className="stat-icon">⏱️</span>
          <span className="stat-value">
            {userData.stats?.totalHoursLearned || 0}h
          </span>
          <span className="stat-label">Hours Learned</span>
        </div>
        <div className="stat-card">
          <span className="stat-icon">🏆</span>
          <span className="stat-value">
            {userData.stats?.certificatesEarned || 0}
          </span>
          <span className="stat-label">Certificates</span>
        </div>
      </div>

      {/* Course Section */}
      <section className="enrolled-courses">
        <h2>My Courses</h2>
        {enrolledCourses.length === 0 ? (
          <div className="no-courses">
            <p>You haven't enrolled in any courses yet.</p>
            <Link to="/courses" className="btn-browse-courses">
              Browse Courses
            </Link>
          </div>
        ) : (
          <div className="courses-grid">
            {enrolledCourses.map(course => (
              <div key={course.id} className="course-card">
                <h3>{course.title}</h3>
                <div className="course-progress">
                  <div className="progress-bar">
                    <div 
                      className="progress" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <span className="progress-text">{course.progress}% Complete</span>
                </div>
                <div className="course-stats">
                  <span>{course.completedLessons.length} / {course.totalLessons} Lessons</span>
                  <span>Last accessed: {new Date(course.lastAccessed).toLocaleDateString()}</span>
                </div>
                <Link 
                  to={`/courses/${course.id}/learn`} 
                  className="btn-continue"
                >
                  Continue Learning
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Recent Activity */}
      <section className="recent-activity">
        <h2>Recent Activity</h2>
        <div className="no-activity">
          <p>No recent activity to show.</p>
          <p>Start learning to track your progress!</p>
        </div>
      </section>
    </div>
  );
}

export default Profile;