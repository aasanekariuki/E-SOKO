import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import './styles.css'; // Import the CSS file

const Register = () => {
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
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label className="text-white">Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-white">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-white">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>

          <Button variant="primary" type="submit">
            <i className="bi bi-person-plus"></i> Register
          </Button>
        </Form>

        <p className="mt-3 text-center text-white">
           <Link to="/" className="text-primary">Already have an account? Login here</Link>
        </p>
      </Container>
    </div>
  );
};

export default Register;