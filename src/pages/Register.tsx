import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { storageService } from '../services/storageService';

interface FormData {
  username: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      storageService.addUser(formData);
      alert('User registered successfully');
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="username" 
        onChange={handleChange} 
        placeholder="Username" 
        required 
      />
      <input 
        type="email" 
        name="email" 
        onChange={handleChange} 
        placeholder="Email" 
        required 
      />
      <input 
        type="password" 
        name="password" 
        onChange={handleChange} 
        placeholder="Password" 
        required 
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register; 