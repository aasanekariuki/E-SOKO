import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col, ListGroup, ListGroupItem, Button, Image } from 'react-bootstrap';

const CartProducts = () => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    // Fetch cart items from the backend
    const fetchCartItems = async () => {
      try {
        const response = await fetch('/api/cart');
        const data = await response.json();

        if (response.ok) {
          setCartProducts(data);
        } else {
          console.error('Error fetching cart items:', data.message);
        }
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const removeItem = async (productId) => {
    try {
      const response = await fetch(`/api/cart/${productId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setCartProducts(cartProducts.filter((item) => item.id !== productId));
      } else {
        console.error('Error removing item from cart:', response.message);
      }
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const placeOrder = async (product) => {
    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product: product.id, amount: 1, status: 'pending' }),
      });

      if (response.ok) {
        console.log(`Placing order for ${product.name}`);
      } else {
        console.error('Error placing order:', response.message);
      }
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  return (
    <div className="cart-products-page" style={{ backgroundColor: '#141E30', minHeight: '100vh', paddingTop: '4rem' }}>
      <Container>
        <Row>
          <Col md={6} className="mx-auto">
            <h1 className="display-4 text-center mb-4" style={{ fontWeight: 'bold', color: 'white' }}>
              My Cart
            </h1>
            {cartProducts.length === 0 && (
              <Row className="text-center">
                <Col lg={{ span: 7, offset: 2 }}>
                  <h2 className="mb-4" style={{ fontWeight: 'bold', fontSize: '2rem', color: 'white' }}>
                    Your Cart is Empty Mind adding any Products ?
                  </h2>
                  <NavLink to="/products" className="btn btn-primary">
                    Get Something
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
                          ₹ {product.price} for {product.category}
                        </p>
                        <div>
                          <Button variant="success" className="mr-2" onClick={() => placeOrder(product)}>
                            Place Order
                          </Button>
                          <Button variant="danger" onClick={() => removeItem(product.id)}>
                            Remove
                          </Button>
                        </div>
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