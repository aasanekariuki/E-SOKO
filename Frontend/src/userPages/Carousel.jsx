import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';
import logo from '/src/images/logo.png';

const Carousel = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <BootstrapCarousel>
                        <BootstrapCarousel.Item>
                            <img
                                className="d-block w-100"
                                src={logo}
                                alt="First slide"
                            />
                            <BootstrapCarousel.Caption>
                                <h5>First Slide Label</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </BootstrapCarousel.Caption>
                        </BootstrapCarousel.Item>

                        <BootstrapCarousel.Item>
                            <img
                                className="d-block w-100"
                                src={logo}
                                alt="Second slide"
                            />
                            <BootstrapCarousel.Caption>
                                <h5>Second Slide Label</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </BootstrapCarousel.Caption>
                        </BootstrapCarousel.Item>

                        <BootstrapCarousel.Item>
                            <img
                                className="d-block w-100"
                                src={logo}
                                alt="Third slide"
                            />
                            <BootstrapCarousel.Caption>
                                <h5>Third Slide Label</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </BootstrapCarousel.Caption>
                        </BootstrapCarousel.Item>
                    </BootstrapCarousel>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col text-center">
                    <Link to="/" className="btn btn-primary">
                        Go Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
