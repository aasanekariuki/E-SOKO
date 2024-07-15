import React from 'react';
import { Link } from 'react-router-dom';

const Carousel = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <div id="myCarousel" className="carousel slide shadow" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={logo} alt="First slide" />
                                <div className="carousel-caption">
                                    <h5>First Slide Label</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={logo} alt="Second slide" />
                                <div className="carousel-caption">
                                    <h5>Second Slide Label</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={logo} alt="Third slide" />
                                <div className="carousel-caption">
                                    <h5>Third Slide Label</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col text-center">
                    <Link to="/" className="btn btn-primary">Go Back to Home</Link>
                </div>
            </div>
        </div>
    );
}

export default Carousel;