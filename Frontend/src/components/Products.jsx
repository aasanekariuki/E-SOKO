import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/products', { timeout: 10000 });
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleOrder = (product) => {
    // Navigate to the Orders page and pass the product data
    navigate('/orders', { state: { product } });
  };

  return (
    <div style={styles.container}>
      {loading ? (
        <Spinner animation="border" variant="light" />
      ) : (
        <div style={styles.productGrid}>
          {products.map((product) => (
            <Card key={product.id} style={styles.productCard}>
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Button variant="primary" onClick={() => handleOrder(product)}>
                  Order
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#343a40',
    margin: 0,
    padding: '150px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '1rem',
    width: '100%',
    maxWidth: '1200px',
  },
  productCard: {
    marginBottom: '1rem',
  },
};

export default Products;