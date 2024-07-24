import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Toast from 'react-bootstrap/Toast';

const Orders = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;
  const [quantity, setQuantity] = useState(1);
  const [showToast, setShowToast] = useState(false);

  if (!product) {
    return (
      <div style={styles.container}>
        <Card style={styles.card}>
          <Card.Body>
            <h2>No Product Selected</h2>
            <p>Please go back to the products page and select a product to order.</p>
            <Button onClick={() => navigate('/products')} variant="primary" style={styles.button}>
              Go to Products
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }

  const handleAddToCart = async () => {
    try {
      const cartItem = { ...product, quantity };
      await axios.post('/cart', cartItem);
      console.log('Product added to cart:', cartItem);
      setShowToast(true);
      setTimeout(() => {
        navigate('/cart');
      }, 2000);
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleQuantityChange = (e) => {
    const value = e.target.value;
    if (/^[1-9]\d*$/.test(value)) {
      setQuantity(parseInt(value));
    } else if (value === '') {
      setQuantity('');
    }
  };

  const handleQuantityBlur = () => {
    if (quantity === '') {
      setQuantity(1);
    } else {
      setQuantity(Math.max(1, quantity));
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  const totalPrice = formatCurrency(product.price * quantity);

  return (
    <div style={styles.container}>
      <Card style={styles.card}>
        <Card.Body>
          <h2>Order {product.name}</h2>
          <img src={product.image} alt={product.name} style={styles.image} />
          <p>{product.description}</p>
          <p style={styles.price}>Total Price: {totalPrice}</p>
          <div style={styles.quantityContainer}>
            <Button variant="secondary" onClick={decreaseQuantity} style={styles.quantityButton}>
              -
            </Button>
            <Form.Control
              type="text"
              value={quantity}
              onChange={handleQuantityChange}
              onBlur={handleQuantityBlur}
              style={styles.quantityInput}
            />
            <Button variant="secondary" onClick={increaseQuantity} style={styles.quantityButton}>
              +
            </Button>
          </div>
          <Button variant="primary" onClick={handleAddToCart} style={styles.button}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>

      <Toast 
        style={styles.toast} 
        onClose={() => setShowToast(false)} 
        show={showToast} 
        delay={3000} 
        autohide
      >
        <Toast.Body>Product added to cart successfully!</Toast.Body>
      </Toast>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
    backgroundColor: '#343a40',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '150px',
  },
  card: {
    width: '100%',
    maxWidth: '400px',
    backgroundColor: '#f0f0f0',
    borderRadius: '10px',
    padding: '30px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  image: {
    width: '100%',
    height: 'auto',
    marginBottom: '20px',
    borderRadius: '5px',
  },
  button: {
    marginTop: '10px',
  },
  quantityContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px 0',
  },
  quantityButton: {
    width: '40px',
    height: '40px',
    fontSize: '20px',
    margin: '0 10px',
  },
  quantityInput: {
    width: '80px',
    textAlign: 'center',
    marginLeft: '10px',
    marginRight: '10px',
  },
  price: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  toast: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 1050,
  },
};

export default Orders;
