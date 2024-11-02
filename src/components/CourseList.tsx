import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { storageService } from '../services/storageService';
import { Course } from '../types';

const CourseList: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = () => {
      const coursesData = storageService.getCourses();
      setCourses(coursesData);
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <Link to={`/courses/${course.id}`}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList; 