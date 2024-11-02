export const storageService = {
  getToken: () => localStorage.getItem('token'),
  setToken: (token) => localStorage.setItem('token', token),
  removeToken: () => localStorage.removeItem('token'),
  
  getCourses: () => {
    // Temporary mock data
    return [
      { id: 1, title: 'Introduction to Cybersecurity', description: 'Learn the basics of cybersecurity' },
      { id: 2, title: 'Network Security', description: 'Advanced network security concepts' }
    ];
  },
  
  getCourseById: (id) => {
    // Temporary mock data
    return {
      id,
      title: 'Course Title',
      description: 'Course Description',
      modules: [
        { title: 'Module 1', content: 'Content 1' },
        { title: 'Module 2', content: 'Content 2' }
      ]
    };
  },
  
  getLabs: () => {
    // Temporary mock data
    return [
      { id: 1, title: 'Web Security Lab', description: 'Practice web security concepts' },
      { id: 2, title: 'Network Lab', description: 'Hands-on network security exercises' }
    ];
  }
}; 