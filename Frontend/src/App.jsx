import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import Products from './components/Products';
import Orders from './userPages/Orders';
import Carousel from './userPages/Carousel';
import CartProducts from './userPages/CartProducts';

axios.defaults.baseURL = 'https://dpg-cqb5shmehbks73djnqi0-a.frankfurt-postgres.render.com/api';
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/cart" element={<CartProducts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
