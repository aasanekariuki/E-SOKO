import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import Register from "./components/Register";
import Orders from "./userPages/Orders";
import CartProducts from "./userPages/CartProducts"; 
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
