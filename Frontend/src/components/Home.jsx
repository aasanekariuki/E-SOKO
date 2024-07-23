import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';


function Home() {
  return (
    
    <div style={styles.container} >
      
      <Card className="text-center, welcome">
      <Card.Header className='cardhead'><h2>E-SOKO</h2></Card.Header>
      <Card.Body>
        <Card.Title><h3>Welcome</h3></Card.Title>
        <Card.Text>
        Welcome to E-SOKO! Your Ultimate Shopping Destination.Join our community of savvy shoppers today and let E-SOKO be your go-to destination for all your shopping needs. Start browsing now and uncover your next must-have item! Happy shopping!


        </Card.Text>
        <NavLink to='./products'><Button variant="primary">Shop</Button></NavLink>
      </Card.Body>
      <Card.Footer className="text-muted">Your E-mail</Card.Footer>
    </Card>
    </div>
    
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  heading: {
    color: '#F54952',
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  paragraph: {
    color: '#F54952',
    fontSize: '1.2rem',
    lineHeight: '1.6',
    textAlign: 'center',
  },
  link: {
    color: '#075299',
    textDecoration: 'none',
  },
  
  
  
};

export default Home;
