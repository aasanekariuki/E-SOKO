import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Updated URL to use the deployed backend
        const response = await axios.get('https://e-soko-backened-qzca.onrender.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div style={styles.container}>
      <Card className="text-center welcome">
        <Card.Header className="cardhead">
          <h2>E-SOKO</h2>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <h3>Welcome to E-SOKO</h3>
          </Card.Title>
          <Card.Text>
            E-SOKO is your ultimate online marketplace for a wide range of
            products. Discover the best deals, explore unique items, and enjoy
            a seamless shopping experience. Join our community of savvy
            shoppers and start browsing now!
          </Card.Text>
          <div style={styles.buttonContainer}>
            <div style={styles.buttonWrapper}>
              <NavLink to="/products">
                <Button variant="primary">Shop Now</Button>
              </NavLink>
            </div>
            <div style={styles.buttonWrapper}>
              <NavLink to="/carousel">
                <Button variant="secondary">View Carousel</Button>
              </NavLink>
            </div>
          </div>
        </Card.Body>
        <Card.Footer className="text-muted">
          {products.length} products available
        </Card.Footer>
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
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
  },
  buttonWrapper: {
    margin: '0 10px',
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