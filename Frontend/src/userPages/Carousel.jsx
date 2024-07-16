import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel as BootstrapCarousel, Container, Row, Col } from 'react-bootstrap';

const Carousel = () => {
    return (
        <Container fluid className="bg-secondary py-5" style={{ minHeight: '100vh' }}>
            <Row className="justify-content-center">
                <Col lg={10}>
                    <div>
                        <BootstrapCarousel className="h-100 shadow" style={{ height: '500px', marginTop:'121px' }}>
                            <BootstrapCarousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://cdn.pixabay.com/photo/2019/11/24/15/28/angry-4649625_1280.jpg"
                                    alt="Featured Product"
                                    style={{ height: '500px', objectFit: 'cover' }}
                                />
                                <BootstrapCarousel.Caption>
                                    <h5>New Arrival: Wireless Noise-Canceling Headphones</h5>
                                    <p>
                                        Experience immersive sound and ultimate comfort with our latest headphones.
                                    </p>
                                    <Link to="/product/1" className="btn btn-primary">
                                        Shop Now
                                    </Link>
                                </BootstrapCarousel.Caption>
                            </BootstrapCarousel.Item>

                            <BootstrapCarousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://img.freepik.com/free-photo/3d-sale-shopping_23-2150499040.jpg?t=st=1721142042~exp=1721145642~hmac=2f2e22a3077b17f5632b4d229272d37a8b48c86371e8fadaed26ea2ab978f2e2&w=1060"
                                    alt="Summer Sale"
                                    style={{ height: '500px', objectFit: 'cover' }}
                                />
                                <BootstrapCarousel.Caption>
                                    <h5>Summer Sale - Up to 50% Off</h5>
                                    <p>
                                        Hurry! Discounts end on July 31st. Shop now and save big on all categories.
                                    </p>
                                    <Link to="/sale" className="btn btn-primary">
                                        Shop Sale
                                    </Link>
                                </BootstrapCarousel.Caption>
                            </BootstrapCarousel.Item>

                            <BootstrapCarousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://img.freepik.com/free-photo/cyber-monday-shopping-sales_23-2148688506.jpg?size=626&ext=jpg"
                                    alt="About Us"
                                    style={{ height: '500px', objectFit: 'cover' }}
                                />
                                <BootstrapCarousel.Caption>
                                    <h5>Learn More About Us</h5>
                                    <p>
                                        Discover our story and the values that drive our e-commerce business.
                                    </p>
                                    <Link to="/about" className="btn btn-primary">
                                        About Us
                                    </Link>
                                </BootstrapCarousel.Caption>
                            </BootstrapCarousel.Item>
                        </BootstrapCarousel>
                    </div>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col className="text-center">
                    <Link to="/" className="btn btn-primary">
                        Go Back to Home
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default Carousel;