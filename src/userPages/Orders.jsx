import React, { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Orders = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [count, setCount] = useState(1);

    // Mock data for demonstration purposes
    const productData = {
        pid: '1',
        uid: '123',
        productUrl: 'https://i.imgur.com/MPqUt62.jpg',
        productName: 'Sample Product',
        productPrice: 1000,
        productType: 'Laptops',
        rating: 4.5
    };

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
            <div className="container d-flex justify-content-center my-5">
                <Toaster />
                <div className="card shadow-lg" style={{ maxWidth: '600px', width: '100%' }}>
                    <NavLink to="#" className="img-wrap" data-abc="true">
                        <img src={productData.productUrl} className="card-img-top" alt="Product" />
                    </NavLink>
                    <div className="card-body">
                        <h5 className="card-title">{productData.productName}</h5>
                        <p className="card-text">{productData.productType}</p>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-muted">₹ {productData.productPrice}</span>
                            <div className="d-flex align-items-center">
                                <button className="btn btn-outline-secondary btn-sm" onClick={() => setCount(count + 1)}>
                                    <i className="fas fa-plus"></i>
                                </button>
                                <span className="mx-2">{count}</span>
                                <button className="btn btn-outline-secondary btn-sm" onClick={() => count > 1 && setCount(count - 1)}>
                                    <i className="fas fa-minus"></i>
                                </button>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <button className="btn btn-primary" onClick={placeOrder}>Buy now</button>
                            <NavLink to="/" className="btn btn-warning">Cancel</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Orders;
