import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import './styles.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/users', { email, password });

      if (response.data.access_token) {
        // Save the token in localStorage
        localStorage.setItem('jwt', response.data.access_token);
        alert('Login successful!');
        navigate('/');
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('An error occurred while logging in. Please try again later.');
    }
  };

  return (
    <div className="login-page" style={{
      background: 'linear-gradient(to right, #141E30, #243B55)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Container className="mt-5 bg-light p-5 rounded shadow" style={{ maxWidth: '800px', width: '100%' }}>
        <h1 className="text-center text-primary mb-4 hover-up" style={{
          fontWeight: 'bold',
          fontSize: '3rem',
          cursor: 'pointer',
          transition: 'transform 0.3s ease-in-out'
        }}>
          Welcome Back to E-SOKO
        </h1>
        <h2 className="text-center text-black mb-5">
          <i className="bi bi-person-circle"></i> Login
        </h2>
        {error && (
          <Alert variant="danger" onClose={() => setError('')} dismissible>
            {error}
          </Alert>
        )}
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-white">Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-white">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            <i className="bi bi-box-arrow-in-right"></i> Login
          </Button>
        </Form>

        <p className="mt-3 text-center text-white">
          <Link to="/register" className="text-primary">Don't have an account? Register here</Link>
        </p>
      </Container>
    </div>
  );
};

export default Login;