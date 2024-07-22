import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Update to use the full URL of the deployed backend
        const response = await axios.get('https://e-soko-backened-qzca.onrender.com/products', {
          timeout: 10000 
        });
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div style={styles.container}>
      {loading ? (
        <Spinner animation="border" variant="light" />
      ) : (
        products.map((product) => (
          <Card key={product.id} style={{ width: '18rem', marginBottom: '1rem' }}>
            <Card.Img variant="top" src={product.image} alt={product.name} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                {product.description}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#343a40',
    margin: 0,
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
};

export default Products;
