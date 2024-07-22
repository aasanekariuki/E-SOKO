import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import './styles.css';

// Set Axios base URL
axios.defaults.baseURL = 'https://e-soko-backened-qzca.onrender.com/';
axios.defaults.withCredentials = true;

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/users/register', { name, email, password, address });

      if (response.data.message) {
        alert(response.data.message);
        navigate('/login');
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error('Error registering:', error);
      setError('An error occurred while registering. Please try again later.');
    }
  };

  return (
    <div className="register-page" style={{
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
          Welcome to E-SOKO
        </h1>
        <h2 className="text-center text-black mb-5">
          <i className="bi bi-person-plus-fill"></i> Register
        </h2>
        {error && (
          <Alert variant="danger" onClose={() => setError('')} dismissible>
            {error}
          </Alert>
        )}
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label className="text-dark">Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-dark">Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-dark">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label className="text-dark">Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            <i className="bi bi-person-plus"></i> Register
          </Button>
        </Form>

        <p className="mt-3 text-center text-dark">
          <Link to="/login" className="text-primary">Already have an account? Login here</Link>
        </p>
      </Container>
    </div>
  );
};

export default Register;