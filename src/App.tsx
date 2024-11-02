import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';
import ProtectedRoute from './components/ProtectedRoute';
import LabList from './components/LabList';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route 
              path="/courses" 
              element={
                <ProtectedRoute>
                  <CourseList />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/courses/:id" 
              element={
                <ProtectedRoute>
                  <CourseDetails />
                </ProtectedRoute>
              } 
            />
            <Route path="/labs" element={<LabList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App; 