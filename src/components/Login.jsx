import React from "react";
import { Link } from "react-router-dom";
import {Container, Form, Button} from 'react-bootsrap';
import './styles.css'

const Login = () => {
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
            Welcome to E-SOKO
        </h1>
        <h2 className="text-center text-black mb-5">
            <i className="bi bi-box-arrow-in-right"></i> Login
        </h2>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-white">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-white">Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" required />
          </Form.Group>

          <Button variant="primary" type="submit">
            <i className="bi bi-box-arrow-in-tight"></i> Login
          </Button>
        </Form>

        <p className="mt-3 text-center text-white">
            <Link to="/register" className="text-primary">Don't have an account? Register here</Link>
        </p>
        </Container>
        </div>
    )
}

export default Login;