import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col, ListGroup, ListGroupItem, Button, Image } from 'react-bootstrap';
import axios from 'axios';

// Set Axios base URL
axios.defaults.baseURL = 'https://e-soko-backened-qzca.onrender.com/';

const CartProducts = () => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('/carts');
        setCartProducts(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const removeItem = async (productId) => {
    try {
      const response = await axios.delete(`/carts/${productId}`);
      if (response.status === 200) {
        setCartProducts(cartProducts.filter((item) => item.id !== productId));
      } else {
        console.error('Error removing item from cart:', response.data.message);
      }
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const placeOrder = async (product) => {
    try {
      const response = await axios.post('/orders', {
        product: product.id,
        amount: 1,
        status: 'pending',
      });
      if (response.status === 200) {
        console.log(`Placing order for ${product.name}`);
      } else {
        console.error('Error placing order:', response.data.message);
      }
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  return (
    <div className="cart-products-page" style={{ backgroundColor: '#343a40', minHeight: '100vh', paddingTop: '15rem' }}>
      <Container>
        <Row>
          <Col md={8} className="mx-auto">
            <h1 className="display-4 text-center mb-4" style={{ fontWeight: 'bold', color: 'white' }}>
              My Cart
            </h1>
            {cartProducts.length === 0 && (
              <Row className="text-center">
                <Col>
                  <h2 className="mb-4" style={{ fontWeight: 'bold', fontSize: '2rem', color: 'white' }}>
                    Your Cart is Empty. Mind adding any products?
                  </h2>
                  <NavLink to="/" className="btn btn-primary">
                    Go Back to Home
                  </NavLink>
                </Col>
              </Row>
            )}
            {cartProducts.length > 0 && (
              <ListGroup className="shadow">
                {cartProducts.map((product) => (
                  <ListGroupItem key={product.id} className="mb-3" style={{ backgroundColor: 'grey', color: 'white' }}>
                    <Row className="align-items-center">
                      <Col md={4}>
                        <Image src={product.image} alt={product.name} fluid />
                      </Col>
                      <Col md={8}>
                        <h5 className="mb-1" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                          {product.name}
                        </h5>
                        <p className="text-muted mb-3" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                          ₹ {product.price}
                        </p>
                        <Button variant="danger" className="me-2" onClick={() => removeItem(product.id)}>
                          Remove from Cart
                        </Button>
                        <Button variant="primary" onClick={() => placeOrder(product)}>
                          Place Order
                        </Button>
                      </Col>
                    </Row>
                  </ListGroupItem>
                ))}
              </ListGroup>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CartProducts;