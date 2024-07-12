import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const CartProducts = () => {
    const [cartProducts, setCartProducts] = useState([
        {
            _id: '1',
            productName: 'Product 1',
            productPrice: 100,
            productType: 'Type 1',
            productUrl: 'https://via.placeholder.com/150'
        },
        {
            _id: '2',
            productName: 'Product 2',
            productPrice: 150,
            productType: 'Type 2',
            productUrl: 'https://via.placeholder.com/150'
        },
    ]);

    const removeItem = (productId) => {
        setCartProducts(cartProducts.filter(item => item._id !== productId));
    };

    const placeOrder = (product) => {
        // Placeholder function for future backend integration
        console.log(`Placing order for ${product.productName}`);
    };

    return (
        <div className="container-fluid py-4" style={{ backgroundColor: 'teal' }}>
            <div className="row mb-4">
                <div className="col-lg-8 mx-auto">
                    <h1 className="display-4 text-center">My Cart</h1>
                </div>
            </div>
            {cartProducts.length === 0 ? (
                <div className="row text-center">
                    <div className="col-lg-7 mx-auto">
                        <h2 className="text-muted">Your Cart is Empty</h2>
                        <NavLink to="/" className="btn btn-primary">Go Back to Home</NavLink>
                    </div>
                </div>
            ) : (
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <ul className="list-group shadow">
                            {cartProducts.map(product => (
                                <li className="list-group-item mb-3" key={product._id} style={{ backgroundColor: 'grey', color: 'white' }}>
                                    <div className="media align-items-center">
                                        <img src={product.productUrl} alt={product.productName} className="mr-3" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                                        <div className="media-body">
                                            <h5 className="mt-0">{product.productName}</h5>
                                            <p className="text-muted mb-1">₹ {product.productPrice} for {product.productType}</p>
                                            <div>
                                                <button className="btn btn-success mr-2" onClick={() => placeOrder(product)}>Place Order</button>
                                                <button className="btn btn-danger" onClick={() => removeItem(product._id)}>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartProducts;
