import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

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
            <NavLink to="/" className="btn btn-primary">
              Go Back to Home
            </NavLink>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <ul className="list-group shadow">
              {cartProducts.map((product) => (
                <li
                  className="list-group-item mb-3"
                  key={product.id}
                  style={{ backgroundColor: 'grey', color: 'white' }}
                >
                  <div className="media align-items-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="mr-3"
                      style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                    />
                    <div className="media-body">
                      <h5 className="mt-0">{product.name}</h5>
                      <p className="text-muted mb-1">₹ {product.price} for {product.category}</p>
                      <div>
                        <button className="btn btn-success mr-2" onClick={() => placeOrder(product)}>
                          Place Order
                        </button>
                        <button className="btn btn-danger" onClick={() => removeItem(product.id)}>
                          Remove
                        </button>
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