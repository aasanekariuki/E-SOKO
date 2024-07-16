import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container fluid className="bg-secondary py-5" style={{ minHeight: '100vh', marginBottom:'5rem', marginTop:'10rem'}}>
      <Row className="justify-content-center">
        <Col lg={10}>
          <Card className="h-100 shadow">
            <Row>
              <Col md={6}>
                <Card.Img variant="top" src="https://img.freepik.com/free-photo/cyber-monday-shopping-sales_23-2148688506.jpg?size=626&ext=jpg" alt="About Us" />
              </Col>
              <Col md={6}>
                <Card.Body>
                  <Card.Title className="text-primary">About Us</Card.Title>
                  <Card.Text>
                    Welcome to our e-commerce website, your one-stop shop for all your electronic needs! We are a team of passionate individuals dedicated to providing you with the best shopping experience possible.
                  </Card.Text>
                  <Card.Text>
                    Our story began with a simple goal: to make it easier for people to access high-quality electronic products from the comfort of their own homes. Over the years, we have grown into a trusted brand, known for our commitment to customer satisfaction and our wide selection of cutting-edge electronics.
                  </Card.Text>
                  <Card.Text>
                    At the heart of our business are our core values: innovation, quality, and customer service. We constantly strive to stay ahead of the curve, bringing you the latest and greatest in technology. Our products are carefully curated to ensure that they meet the highest standards of quality and performance.
                  </Card.Text>
                  <Card.Text>
                    But what truly sets us apart is our dedication to our customers. We believe that every interaction should be a positive one, and we go above and beyond to ensure that your shopping experience is seamless and enjoyable. Whether you're looking for the latest smartphone, a powerful laptop, or a sleek new TV, we've got you covered.
                  </Card.Text>
                  <div className="text-center">
                    <Link to="/products" className="btn btn-primary">
                      Shop Our Products
                    </Link>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;