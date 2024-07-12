import React, { useState, useEffect } from 'react';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const Orders = () => {
    const { productName, productType, productPrice } = useParams();
    const navigate = useNavigate();
    const [count, setCount] = useState(1);

    useEffect(() => {
        if (!productName || !productType || !productPrice) {
            notifyError('Invalid product data. Please go back and try again.');
        }
    }, [productName, productType, productPrice]);

    const notifyOrder = (msg) => toast.success(msg, {
        icon: '😀',
    });

    const notifyError = (msg) => toast.error(msg);

    const placeOrder = () => {
        // Mock order placement logic
        notifyOrder('Order placed successfully!');
        setTimeout(() => {
            navigate('/allOrders');
        }, 2000);
    };

    return (
        <>
            <Toaster />
            <Container className="my-5">
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
                                        <Form.Control type="number" value={count} onChange={(e) => setCount(e.target.value)} />
                                    </Form.Group>
                                </Form>
                                <Button variant="warning" onClick={placeOrder}>Buy now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Orders;