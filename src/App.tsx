import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { AboutUs } from './Components/about/AboutUs';
import { ContactPage } from './Components/Contact/Contact';
import { Learning } from './Components/ELearning/learning';
import { Login } from './Components/Login/login';
import { Page } from './Components/Page/Home';
import { Register } from './Components/Register/register';
import { Shop } from './Components/Shop/shop';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Page />}></Route>
        <Route path='/Contact' element={<ContactPage />}></Route>
        <Route path='/Shop' element={<Shop />}></Route>
        <Route path='/Register' element={<Register />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/ELearning' element={<Learning />}></Route>
        <Route path='/About' element={<AboutUs />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
