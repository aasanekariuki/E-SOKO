import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import './styles.css';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, address }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        navigate('/login');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error registering:', error);
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
        <h2 className="text-center text-black mb-4">
          <i className="bi bi-person-plus-fill"></i> Register
        </h2>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label className="text-white">Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

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

          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label className="text-white">Address</Form.Label>
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

        <p className="mt-3 text-center text-white">
          <Link to="/login" className="text-primary">Already have an account? Login here</Link>
        </p>
      </Container>
    </div>
  );
};

export default Register;