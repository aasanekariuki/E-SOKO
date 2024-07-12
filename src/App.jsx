import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import Register from "./components/Register";
import Orders from "./userPages/Orders"; // Import the Orders component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/orders" element={<Orders />} /> {/* Ensure the Orders route */}
      </Routes>
    </Router>
  );
};

export default App;
