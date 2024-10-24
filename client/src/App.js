import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import './styles/index.css'
import './App.css';
import './styles/bootcamp.css';
import  './styles/home.css';




function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
