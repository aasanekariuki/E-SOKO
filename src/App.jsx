import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Login from "./components/Login";
import Register from "./components/Register";
import Orders from "./userPages/Orders";
import CartProducts from "./userPages/CartProducts";

// Set up Axios with the correct base URL
axios.defaults.baseURL = 'https://dpg-cq92slaju9rs73av4qk0-a.frankfurt-postgres.render.com/api';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/orders" element={<Orders />} />
                <Route exact path="/cartProducts" element={<CartProducts />} /> 
            </Routes>
        </Router>
    );
};

export default App;