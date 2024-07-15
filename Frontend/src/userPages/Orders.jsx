import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const Orders = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [productName, setProductName] = useState('');
  const [productType, setProductType] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Fetch product details from the backend
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`/api/products/${productId}`);
        const data = await response.json();

        if (response.ok) {
          setProductName(data.name);
          setProductType(data.type);
          setProductPrice(data.price);
        } else {
          notifyError('Failed to fetch product details');
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  const notifyOrder = (msg) => toast.success(msg, {
    icon: '😀',
  });

  const notifyError = (msg) => toast.error(msg);

  const placeOrder = async () => {
    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: quantity, status: 'pending' }),
      });

      const data = await response.json();

      if (response.ok) {
        notifyOrder('Order placed successfully!');
        setTimeout(() => {
          navigate('/allOrders');
        }, 2000);
      } else {
        notifyError('Failed to place order');
      }
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  return (
    <div className="orders-page" style={{ backgroundColor: '#141E30', minHeight: '100vh', paddingTop: '4rem' }}>
      <Toaster />
      <Container>
        <Row>
          <Col md={6} className="mx-auto">
            <Card className="shadow-lg" style={{ backgroundColor: '#343a40', color: '#fff' }}>
              <Card.Body>
                <Card.Title className="text-warning">{productName}</Card.Title>
                <Card.Text className="text-light">{productType}</Card.Text>
                <Card.Text>
                  <span className="text-light">₹ {productPrice}</span>
                </Card.Text>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicQuantity">
                    <Form.Label className="text-light">Quantity</Form.Label>
                    <Form.Control
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </Form.Group>
                </Form>
                <Button variant="warning" onClick={placeOrder}>
                  Buy now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Orders;