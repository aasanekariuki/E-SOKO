import {Route, BrowserRouter as Router,Routes} from 'react-router-dom';
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React from 'react'
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import Logout from './components/Logout';
import Products from './components/Products';

function App  () {

  return (
    <div className='app'>
    <Router>
      {<Navbar/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
    </Router>
    </div>
    
  )
}

export default App;
